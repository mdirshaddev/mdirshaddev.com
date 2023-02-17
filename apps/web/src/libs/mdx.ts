/**
 * MDX helpers
 */

import { readdirSync, readFileSync } from 'fs';

import matter from 'gray-matter';

import { bundleMDX } from 'mdx-bundler';

import { join } from 'path';

import readingTime from 'reading-time';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'esbuild.exe'
  );
} else {
  process.env.ESBUILD_BINARY_PATH = join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'bin',
    'esbuild'
  );
}

export async function getFiles() {
  return readdirSync(
    join(
      process.cwd(),
      'src',
      'data',
      'libraries',
      'ts-next-tailwind-starter-template.mdx'
    )
  );
}

export default async function getFileBySlug(params: '') {
  const source = readFileSync(
    join(
      process.cwd(),
      'src',
      'data',
      'libraries',
      'ts-next-tailwind-starter-template.mdx'
    ),
    'utf-8'
  );
  console.log(source);
  const { code, frontmatter } = await bundleMDX({
    source: source,
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor']
            }
          }
        ]
      ];
      return options;
    }
  });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      ...frontmatter
    }
  };
}
