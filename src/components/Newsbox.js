import React, { Component } from "react";
import { Newsdescription } from "./Newsdescription";
import InfiniteScroll from "react-infinite-scroll-component";

export class Newsbox extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 2,
      totalResults : 0,
      loading : true
    };
  }

  async updateNews() {
    try {
      this.props.setprogress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c360473e1dc0405e9faba04b3ecfa1e6&page=1&pageSize=6`;
      const res = await fetch(url);
      this.props.setprogress(50);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        totalResults : data.totalResults,
        loading : true
      });
      this.props.setprogress(100);
    } catch (e) {
      console.log("something is not working");
    }
  }
   

  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData =async ()=>{
    this.setState({
      page : this.state.page+1,
    })
      this.props.setprogress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c360473e1dc0405e9faba04b3ecfa1e6&page=${this.state.page}&pageSize=6`;
      const res = await fetch(url);
      this.props.setprogress(50);
      const data = await res.json();
      this.setState({
        
        articles: this.state.articles.concat(data.articles),
        totalResults : data.totalResults, 
        loading : true,
        
      })
      this.props.setprogress(100);
  }
  // handleOnClickPrev = async () => {
  //   this.updateNews();
  // };

  // handleOnClickNext = async () => {
  //   this.updateNews();
  // };

  render() {
    return (
      <>

        <div className="container my-3">
       
        <div className="container">
        <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<h4>Loading...</h4>}
            >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <>
                  <div className="col-md-4" key={"element.url"}>
                    <Newsdescription
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      link={element.url}
                    />
                  </div>
                  
                </>
              );
            })}
            {/* <div className="d-flex justify-content-between my-3">
              <button
                type="button"
                disabled={this.state.page <= 1}
                onClick={this.handleOnClickPrev}
                className="btn btn-dark"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={this.handleOnClickNext}
                className="btn btn-dark"
              >
                Next
              </button>
            </div> */}
            
          </div>
          </InfiniteScroll>
          </div>
          
        </div>
        
       
      </>
    );
  }
}

export default Newsbox;
