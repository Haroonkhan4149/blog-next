


import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetadata(basePath) {
  let markdownPosts = [];

  try {
    const folder = basePath;
    const files = fs.readdirSync(folder);
    markdownPosts = files.filter((file) => file.endsWith('.md'));
  } catch (error) {
    console.error(error);
  }

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${basePath}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      prep_time: matterResult.data.prep_time,
      cook_time: matterResult.data.cook_time,
      bio: matterResult.data.bio,
      slug: fileName.replace('.md', ''),
    };
  });
  return posts;
}

