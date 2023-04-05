import { Component } from "react";
import axios, { AxiosResponse } from 'axios';
import { Landing, About } from '@/components/home/index';

interface Props {
  data: any;
};

class Home extends Component<Props> {
  render() { 
    const { data } = this.props;
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
  const res: AxiosResponse = await axios.get('http://127.0.0.1:8000/api/youssef');
  const data:any = res.data;
  return {
      props: {
          data,
      }
  };
}

export default Home;