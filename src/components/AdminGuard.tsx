import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LockKeyhole, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type AccessState = 'checking' | 'authorized' | 'signed-out' | 'denied';

const AdminGuard = () => {
  const [access, setAccess] = useState<AccessState>('checking');

  useEffect(() => {
    let active = true;

    const verifyAccess = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (!active) return;
      if (userError || !user) {
        setAccess('signed-out');
        return;
      }

      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (!active) return;
      setAccess(!error && data?.role === 'admin' ? 'authorized' : 'denied');
    };

    void verifyAccess();
    const { data: authListener } = supabase.auth.onAuthStateChange(() => void verifyAccess());
    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (access === 'signed-out') return <Navigate to="/admin/login" replace />;
  if (access === 'authorized') return <Outlet />;

  if (access === 'denied') {
    return (
      <main className="min-h-screen bg-muted/40 px-4 py-16 flex items-center justify-center">
        <Card className="w-full max-w-md border-border shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <LockKeyhole className="h-7 w-7 text-accent" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-primary">Admin access required</h1>
            <p className="mt-3 text-muted-foreground">This account is signed in, but it does not have administrator permission.</p>
            <Button
              className="mt-7 w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => void supabase.auth.signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" /> Sign out
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/40 flex items-center justify-center" aria-live="polite">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-border border-t-accent" />
        <p className="font-medium text-foreground">Verifying administrator access…</p>
      </div>
    </main>
  );
};

export default AdminGuard;