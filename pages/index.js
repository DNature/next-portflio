import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class Index extends React.Component {
  static async getInitialProps() {
    try {
      const { data: userData } = await axios.get(
        'http://jsonplaceholder.typicode.com/todos/1'
      );

      return { initialData: [1, 2, 3, 4], userData };
    } catch (err) {
      console.log(err);
    }
  }
  constructor() {
    super();
    this.state = {
      title: 'I am Index page'
    };
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    const { userData, initialData } = this.props;
    return (
      <BaseLayout>
        <h1>Hello world</h1>
        <h2>{this.state.title}</h2>
        <h3 style={{ color: 'blue' }}>{userData.title}</h3>
        <button
          onClick={() =>
            this.setState({ title: 'I am a new render of index page' })
          }
        >
          Change title
        </button>
      </BaseLayout>
    );
  }
}

export default Index;
