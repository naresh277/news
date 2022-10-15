import React, { Component } from 'react'


export class Newsdescription extends Component {
  render() {
    let {title,description,imgUrl,link} = this.props;
    return (
     <>
        <div className="card" >
            <img src={!imgUrl?"https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={link} target="_blank "className="btn btn-dark">READ MORE</a>
            </div>
        </div>              
     </>
    )
  }
}

export default Newsdescription
