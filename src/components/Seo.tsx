import { Helmet } from 'react-helmet-async';

const SITE = 'https://allied1145pro.lovable.app';

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

const Seo = ({ title, description, path }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${SITE}${path}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${SITE}${path}`} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default Seo;
