import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';

class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            som: 0
        }
    }


    handleSet(event) {
        this.setState({
            som: event.target.value
        });
    }

    render() {

        const products = this.props.product.map((item) => (


            <div key={item.productId} className="products-item">
                <div className="product-img-container" style={{ backgroundColor: "#8080801" }}>
                    <img src={require("" + item.image)} />
                    </div>
                <div className="border-w">

                    <div className="product-rating-web">
                        <h4>{item.title}</h4>
                        <div className="r-web">
                        <Ratings
                            rating={item.rating}
                            widgetRatedColors="#A5B464"
                            typeOfWidget="Star"
                            widgetDimensions="14px"
                            widgetSpacings="0px"
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            </Ratings>
                        </div>
                    </div>
                  
                <div className="product-info">
                        <p>${item.price + ".00"}  </p>
                        <div className="r-mob">
                        <Ratings
                            rating={item.rating}
                            widgetRatedColors="#A5B464"
                            typeOfWidget="Star"
                            widgetDimensions="16px"
                            widgetSpacings="0px"
                        >
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget/>
                            <Ratings.Widget />
                        </Ratings>

                    </div>
                    </div>
                    </div>
                    <div className="product-btns">
                    <button>DETAILS</button>

                    <button className="add-btn" value={item.productId} onClick={() => this.props.add(item.productId)}>ADD TO</button>
                    </div>
                </div>


        ));

    return (

        <div className="products-container">

            {products}
        </div>
            
            );

        }

 


}

export default Product;
