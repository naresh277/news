import React, { Component } from 'react'
import { Newsdescription } from './Newsdescription'

export class Newsbox extends Component {


  constructor(){
    super();
    this.state = {
      articles:[]
    }
  }

  // async componentDidMount(){
  //     let url ="https://newsapi.org/v2/everything?q=tesla&from=2022-09-11&sortBy=publishedAt&apiKey=b98431fdead84901b89c3a5edb4f72e4";
  //     let data =await fetch(url);
  //     let parsedData =await data.json()
  //     this.setState = ({articles:parsedData.articles})
  // }

  async componentDidMount(){
    try{ 
        const url = "https://newsapi.org/v2/everything?q=cricket&from=2022-09-11&sortBy=publishedAt&apiKey=b98431fdead84901b89c3a5edb4f72e4";       
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            articles: data.articles
        });
    }
    catch(e) {
        console.log("something is not working");
    }
}
  render() {
    
    return (
      <>
      <div className='container my-3'>
      <div className='row' key={"element.name"}>
        {this.state.articles.map((element)=>{
          return(
            <div className='col-md-4'>
            <Newsdescription title={element.title} description={element.description} imgUrl={element.urlToImage} link={element.url}/>
            </div>
          )
        })}
        </div> 
      </div>
      </>
    )
  }
}

export default Newsbox
