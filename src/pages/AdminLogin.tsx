import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import logoAsset from '@/assets/1145-allied-shield.png.asset.json';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkExistingAccess = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase.from('user_roles').select('role').eq('user_id', user.id).eq('role', 'admin').maybeSingle();
      if (data?.role === 'admin') navigate('/admin', { replace: true });
    };
    void checkExistingAccess();
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error || !data.user) {
      setErrorMessage('The email or password is incorrect.');
      setSubmitting(false);
      return;
    }

    const { data: role, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', data.user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (roleError || role?.role !== 'admin') {
      await supabase.auth.signOut();
      setErrorMessage('This account does not have administrator access.');
      setSubmitting(false);
      return;
    }

    navigate('/admin', { replace: true });
  };

  return (
    <main className="min-h-screen bg-primary on-dark px-4 py-12 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
      <Card className="w-full max-w-md border-primary-foreground/10 shadow-2xl">
        <CardContent className="p-7 sm:p-9">
          <div className="text-center mb-8">
            <img src={logoAsset.url} alt="1145 Allied Protections shield" className="mx-auto h-24 w-24 object-contain" />
            <p className="mt-5 text-xs font-bold uppercase text-accent">Protected operations portal</p>
            <h1 className="mt-2 text-3xl font-heading font-bold text-primary">Administrator sign in</h1>
            <p className="mt-2 text-sm text-muted-foreground">Use your authorized company account to continue.</p>
          </div>

          {errorMessage && <Alert variant="destructive" className="mb-5"><AlertDescription>{errorMessage}</AlertDescription></Alert>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="admin-email">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Input id="admin-email" name="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="h-11 pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Input id="admin-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="h-11 px-10" />
                <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1 h-9 w-9" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button type="submit" disabled={submitting} className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent-dark font-semibold">
              {submitting ? 'Verifying access…' : 'Sign in securely'}
            </Button>
          </form>

          <p className="mt-7 text-center text-sm text-muted-foreground">
            Not an administrator? <Link to="/" className="font-semibold text-accent hover:underline">Return to the website</Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
};

export default AdminLogin;