import React, { Component } from 'react';
import Product from "./Product";
import Navigation from "./Navigation";

export class Home extends Component {
  static displayName = Home.name;


    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart:[]
        }
    }

    componentDidMount() {
        this.getData();
        this.getDataBasket();
    }

    async getData() {
        const url = "https://localhost:44337/api/Products/";
        const response = await fetch(url);
        const data = await response.json();
        return this.setState({ products: data })
    }
    async getDataBasket() {
        const url = "https://localhost:44337/api/ShoppingCarts";
        const response = await fetch(url);
        const data = await response.json();
        return this.setState({ cart: data })
    }

    async addToBasket(id) {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ShoppingCartId: Math.floor(Math.random()), ProductId: id, Quantity: 1 })
        };
        const response = await fetch("https://localhost:44337/api/ShoppingCarts", request);
        const data = await response.json();
        this.getDataBasket();
        console.log(data);
    }

    render() {
     
    return (

        <div>
            <Navigation />

       

            <div id="hero-container">
                <div id="sub-hero-text">
                    <h1>Let Them Know Why You're The Best</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis euismod egestas. Ut mollis urna odio, quis semper purus rutrum at.
                    </p>
                    <button id="sub-check-btn">Check it out</button>
                    <button id="sub-buy-btn">Buy The Theme</button>
                </div>
                <div><img src={require("./images/watch.png")} /></div>
            </div>

            <div id="categories">
            <div className="category-container">
                <div className="category-text">
                    <h2>Gadgets</h2>
                    <p>Lorem Ipsum Dolor Sit</p>
                </div>
                    <div className="category-img">
                        <img style={{ marginTop:14 }} alt="headphones-category" src={require("./images/headphones.png")} />
                </div>
            </div>
            <div className="category-container">
                <div className="category-text">
                    <h2>Gadgets</h2>
                    <p>Lorem Ipsum Dolor Sit</p>
                </div>
                <div className="category-img">
                    <img alt="headphones-category" src={require("./images/lamp.png")} />
                </div>
            </div>
            <div className="category-container">
                <div className="category-text">
                    <h2>Gadgets</h2>
                    <p>Lorem Ipsum Dolor Sit</p>
                </div>
                <div className="category-img">
                    <img alt="headphones-category" src={require("./images/watch.png")} />
                </div>
            </div>
            </div>
            <Product add={(id) => this.addToBasket(id)} product={this.state.products} />
            <footer>
                    Some Footer
	        </footer>

             

        </div>
    );
  }
}
