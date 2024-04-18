// pages/api/sitemap.xml.ts
import { NextApiRequest, NextApiResponse } from "next";
import sitemap from "../../app/sitemap"; // Adjust this import path as needed

interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
}

export default function sitemapApi(req: NextApiRequest, res: NextApiResponse) {
  const sitemapData = sitemap();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  sitemapData.forEach((link) => {
    const lastModifiedDate = new Date(link.lastModified || Date.now());
    xml += `
      <url>
        <loc>${link.url}</loc>
        <lastmod>${lastModifiedDate.toISOString()}</lastmod>
        <changefreq>${link.changeFrequency}</changefreq>
        <priority>${link.priority}</priority>
      </url>
    `;
  });
  xml += "</urlset>";

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
