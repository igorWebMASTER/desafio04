import React, { Component } from 'react';
import PostItem from './PostItem';


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Igor Ribeiro",
          avatar: "https://avatars2.githubusercontent.com/u/8940529?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/8940529?s=460&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className='postlist'>
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}



export default PostList;