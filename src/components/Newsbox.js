import React, { Component } from 'react'
import { Newsdescription } from './Newsdescription'



export class Newsbox extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1
    }
  }


  async componentDidMount() {
    try {
      this.props.setprogress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c360473e1dc0405e9faba04b3ecfa1e6&page=1&pageSize=6`;
      const res = await fetch(url);
      this.props.setprogress(50);
      const data = await res.json();
      this.setState({
        articles: data.articles
      });
      this.props.setprogress(100);
    }
    catch (e) {
      console.log("something is not working");
    }
  }

  handleOnClickPrev = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c360473e1dc0405e9faba04b3ecfa1e6&page=${this.state.page - 1}&pageSize=6`;
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        page: this.state.page - 1
      });
    }
    catch (e) {
      console.log("something is not working");
    }
  }

  handleOnClickNext = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c360473e1dc0405e9faba04b3ecfa1e6&page=${this.state.page + 1}&pageSize=6`;
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        page: this.state.page + 1
      });
    }
    catch (e) {
      console.log("something is not working");
    }
  }
  render() {

    return (
      <>

        <div className='container my-3'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return (
                <>
                  <div className='col-md-4' key={"element.url"}>
                    <Newsdescription title={element.title} description={element.description} imgUrl={element.urlToImage} link={element.url} />
                  </div>
                </>
              )

            })}
            <div className="d-flex justify-content-between my-3" >
              <button type="button" disabled={this.state.page <= 1} onClick={this.handleOnClickPrev} className="btn btn-dark">Previous</button>
              <button type="button" onClick={this.handleOnClickNext} className="btn btn-dark">Next</button>
            </div>
          </div>
        </div>
        <div>

        </div>
      </>
    )
  }
}

export default Newsbox
