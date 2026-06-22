import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SITES_DIR = path.join(process.cwd(), 'members');

export interface Site {
  slug: string;
  name: string;
  url: string;
  tags: string[];
  email: string;
  nickname: string;
  widget: string;
  bgColor: string;
  textColor: string;
  info: string;
}

export function getSites(): Site[] {
  const files = fs.readdirSync(SITES_DIR)
    .filter(f => f.endsWith('.md'))
    .sort();

  return files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(SITES_DIR, filename), 'utf-8');
    const { data } = matter(raw);

    return {
      slug,
      name: data.name ?? '',
      url: data.url ?? '',
      tags: data.tags ?? [],
      email: data.email ?? '',
      nickname: data.nickname ?? '',
      widget: data.widget ?? '',
      bgColor: data.bgColor ?? '',
      textColor: data.textColor ?? '',
      info: data.info ?? '',
    };
  });
}
