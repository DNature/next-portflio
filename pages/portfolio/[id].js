import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    let post = {};
    try {
      const postId = query.id;
      const { data } = await axios.get(
        `http://jsonplaceholder.typicode.com/posts/${postId}`
      );

      post = data;
    } catch (error) {
      console.error(error);
    }
    return { post };
  }

  render() {
    const { post } = this.props;
    return (
      <>
        <BaseLayout>
          <h1>I am Portfolio page</h1>
          <h2 style={{ color: 'orange' }}>{post.title}</h2>
          <p>{post.body}</p>
        </BaseLayout>
      </>
    );
  }
}

export default withRouter(Portfolio);
