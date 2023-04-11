import { Component } from "react";
import axios, { AxiosResponse } from 'axios';
import { Landing, About } from '@/components/home/index';

interface Props {
  data: any,
  projects: any,
  ratings: any,
  users: any,
};

class Home extends Component<Props> {
  render() { 
    const { data, projects, ratings, users } = this.props;
    const { user } = data;

    return (
      <>
        <Landing user={user} />
        <About user={user} />
      </>
    );
  }
}

export const getStaticProps = async () => {
  const data = await (await axios.get('http://127.0.0.1:8000/api/youssef')).data;
  const projects = await (await axios.get('http://127.0.0.1:3000/api/projects')).data;
  const ratings = await (await axios.get('http://127.0.0.1:3000/api/ratings')).data;
  const users = await (await axios.get('http://127.0.0.1:3000/api/users')).data;

  return {
      props: {
          data,
          projects,
          ratings,
          users,
      }
  };
}

export default Home;