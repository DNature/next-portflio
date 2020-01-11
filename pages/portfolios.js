import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Link } from '../routes';

import axios from 'axios';

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const { data } = await axios.get(
        'http://jsonplaceholder.typicode.com/posts'
      );
      posts = data;
    } catch (err) {
      console.log(err);
    }
    return { posts: posts.splice(0, 9) };
  }

  renderProps = posts => {
    return posts.map(post => (
      <React.Fragment key={post.title}>
        <Link route={`/portfolio/${post.id}`}>
          <a style={{ fontSize: '20px' }}>{post.title}</a>
        </Link>
        <br />
        {/* <p>{post.body}</p> */}
      </React.Fragment>
    ));
  };
  render() {
    const { posts } = this.props;
    return (
      <>
        <BaseLayout>
          <h1>I am Portfolio page</h1>
          <h2>{this.renderProps(posts)}</h2>
        </BaseLayout>
      </>
    );
  }
}

export default Portfolios;
