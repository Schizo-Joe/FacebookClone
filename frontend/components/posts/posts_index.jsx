import React from 'react'
import PostIndexItem from './post_index_item';

class PostsIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.props.posts.map(post =>{
            return (
              <PostIndexItem
                key={post.id}
                post={post}
                fetchPost={this.props.fetchPost}
              />
            )
          })
        }
        </ul>
      </div>
    )
  }
}
export default PostsIndex