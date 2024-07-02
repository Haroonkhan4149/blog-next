import Markdown from "markdown-to-jsx"
import getPostMetadata from '@/utils/getPostMetadata'   
import React from "react"
import fs from 'fs'
import matter from "gray-matter"

function getPostContent(slug) {
    const folder = 'recipes/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return matterResult
}

export async function generateStaticParams() {
    const postMetadata = getPostMetadata('recipes')
    return postMetadata.map(post => ({
        slug: post.slug
    }))
}

export async function generateMetadata({ params, searchParams }) {
    const id =params?.slug?'...'+params?.slug:''
    return{
        title: `My Kitchen ${id.replaceAll('_',' ')}`
    }
}
export default function RecipePage(props) {
    const slug=props.params.slug
    const post=getPostContent(slug)
    // console.log(post)
  return (
    <main>
        <article>
            <Markdown>{post.content}</Markdown>
        </article>
    </main>
  )
}
