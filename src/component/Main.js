import React, { Component } from 'react';
import Items from './Items';
import RoseImg from '../img/rose.jpg';
import LeafImg from '../img/leaf.jpg';

export default class Main extends Component {
    constructor(props){
        super();
        this.state = {
            mass : [{
                id: 1,
                img: RoseImg,
                title: '1Beautiful mint and glass bowl',
                hashtag: '#beauty #glass #mint #green #white #health',
                viev: 1130,
                like: 30,
                click: false
            },
            {
                id: 2,
                img: LeafImg,
                title: '2Beautiful mint and glass bowl',
                hashtag: '#beauty #glass #mint #green #white #health',
                viev: 1130,
                like: 20,
                click: false
            },
            {
                id: 3,
                img: RoseImg,
                title: '3Beautiful mint and glass bowl',
                hashtag: '#beauty #glass #mint #green #white #health',
                viev: 1130,
                like: 35,
                click: false
            },
            {
                id: 4,
                img: RoseImg,
                title: '1Beautiful mint and glass bowl',
                hashtag: '#beauty #glass #mint #green #white #health',
                viev: 1130,
                like: 30,
                click: false
            },
            {
                id: 5,
                img: LeafImg,
                title: '2Beautiful mint and glass bowl',
                hashtag: '#beauty #glass #mint #green #white #health',
                viev: 1130,
                like: 20,
                click: false
            },
            {
                id: 6,
                img: RoseImg,
                title: '1Beautiful mint and glass bowl',
                hashtag: '#beauty #glass #mint #green #white #health',
                viev: 1130,
                like: 30,
                click: false
            },
            {
                id: 7,
                img: LeafImg,
                title: '2Beautiful mint and glass bowl',
                hashtag: '#beauty #glass #mint #green #white #health',
                viev: 1130,
                like: 20,
                click: false
            }]
        }
    }
  render() {
    return (
      <div className="main">
        <div className="container">
            <h1>World’s most <span className="main__span">amazing</span> test tiles</h1>
            <Items mass={this.state.mass}/>
        </div>
      </div>
    );
  }
}
