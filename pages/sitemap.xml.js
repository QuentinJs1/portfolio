const EXTERNAL_DATA_URL = 'https://boiling-garden-52565.herokuapp.com/api/articles';

function generateSiteMap(articles) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://luden.fr</loc>
     </url>
     <url>
       <loc>https://luden.fr/services</loc>
     </url>
     <url>
       <loc>https://luden.fr/a-propos</loc>
     </url>
     <url>
       <loc>https://luden.fr/contact</loc>
     </url>
     <url>
       <loc>https://luden.fr/blog</loc>
     </url>
     ${articles?.data.map((article) => {
         return `
       <url>
           <loc>${`${'https://luden.fr/blog'}/${article.attributes.slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;