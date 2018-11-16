import React, { Component } from 'react';

export default class Items extends Component {
    handleClick = index => {
        index = index -1;
        if (!this.props.mass[index].click) {
            const list = this.props.mass; //клон mass array
            var item = list[index]; // mass[item] кликнутый итем
            item.like = item.like + 1; //меняем текушее значение на 1
            item.click = !item.click;
            list[index] = item; //обновляем клон
            this.setState({
              mass: list  //обновляем state
            }); 
        }
    }
    render() {
        return(
        <div className="items">
        {this.props.mass.map((i, index) => {
            return (
            <div className="item" key={index}>
                <div className="item__img">
                     <img src={i.img} alt="rose" /> 
                </div>
                <div className="item__text">
                    <p className="item__title">{i.title}</p>
                    <p className="item__hashtag">{i.hashtag}</p>
                    <i className="fa fa-eye"></i><span className="item__viev">{i.viev}</span>
                    <i className="fa fa-heart" onClick={() => this.handleClick(i.id)}></i><span className="item__like">{i.like}</span>
                </div>
            </div>
            )
        })}
        </div>
        );
    }
}
