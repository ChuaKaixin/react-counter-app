import React, { Component } from 'react';
import Counter from "./Counter";

class Counters extends Component {
    state ={
        counters : [
            {id:'Kaixin', value:0},
            {id:'Sheldon', value:0},
            {id:'Tim', value:0},
            {id:'Shun', value:0},
            {id:'Xin Fang', value:0},
            {id:'Delphine', value:0},
            {id:'Hui Min', value:0},
            {id:'Calvin', value:0},
            {id:'Sebastian', value:0},
            {id:'Brian', value:0}
        ]
    }
    render() {
        return (
           this.state.counters.map(counter =>
                <Counter counterId={counter.id} counterCount={counter.value}/>
           )
        );
    }
}

export default Counters;
