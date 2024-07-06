import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  tags?: string[];
}
const SEO: React.FC<SEOProps> = ({
  title = "Luxury Catering Service For Your Events",
  description = null,
  thumbnail = "",
  tags = null,
}) => {
  const siteName = "Luxury Catering Service";
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      {Boolean(description) && (
        <meta name="description" content={description ?? ""} />
      )}
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {Boolean(description) && (
        <meta property="og:description" content={description ?? undefined} />
      )}
      {Boolean(thumbnail) && <meta property="og:image" content={thumbnail} />}
      {Boolean(tags) && (
        <meta name="keywords" content={tags?.join(", ")}></meta>
      )}
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={siteName} />
      <meta name="twitter:card" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content={siteName} />
      {Boolean(description) && (
        <meta name="twitter:description" content={description ?? ""} />
      )}
      {Boolean(thumbnail) && <meta name="twitter:image" content={thumbnail} />}
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default SEO;
