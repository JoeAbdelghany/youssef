import { Component } from 'react';

class Loading extends Component {
    render () {
        return (
            <section className="loading h-screen">
                <div className="container center w-full h-full">
                    <h1>Loading...</h1>
                </div>
            </section>
        )
    }
}

export default Loading;