import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

const Posts = ({ data: { loading, error, post } }) => {
    if (error) return <h1>Error fetching the post!</h1>
    if (!loading) {
        console.log(post)
        return (
            <article>
                <h1>{post.title}</h1>
                <div className='Post-placeholder'>
                    <img
                        alt={post.title}
                        src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`}
                    />
                </div>
                <Markdown
                    source={post.content}
                    escapeHtml={false}
                />
            </article>
        )
    }
    return <h2>Loading post...</h2>
}

export const singlePost = gql`
  query singlePost($slug: String!) {
    post: Post(slug: $slug) {
      id
      slug
      title
      coverImage {
        handle
      }
      content
      dateAndTime
    }
  }
`

export default graphql(singlePost, {
    options: ({ match }) => ({
        variables: {
            slug: match.params.slug
        }
    })
})(Posts)