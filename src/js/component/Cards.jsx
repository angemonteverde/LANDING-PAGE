import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
  return (
   
<div className= "col md-3">
    <div className="card">
      <img src={props.urlimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    </div>

  );
};

Cards.propTypes = {
  title: PropTypes.string,
  btnDescription: PropTypes.string,
  urlimg: PropTypes.string,

}

Cards.defaultProps = {
  title: "Card Title",
  btnDescription: "Find Out More!",
  urlimg: "https://via.placeholder.com/500x325"
};

export default Cards;
