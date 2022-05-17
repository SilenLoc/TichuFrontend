import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



// a little function to help us with reordering the result
const reorder = (list: Iterable<any> | ArrayLike<any>, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  const gridSize = 8;


  // fake data generator
const getCards = (count: number) =>
Array.from({ length: count }, (v, k) => k).map(k => ({
  id: `item-${k}`,
  content: `item ${k}`,
}));


class TichuCardBoard extends React.Component{
    constructor(props: Array<any>) {
        super(props)
        this.state = {
          items: getCards(6),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
      }


      onDragEnd(result: { destination: { index: number; }; source: { index: number; }; }) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const items = reorder(
          this.state.items,
          result.source.index,
          result.destination.index
        );
    
        this.setState({
          items,
        });
      }

}


function Card() {
    return (
      <div className="Card">
        <header className="Card-header">
          
          <p>
            hey cool I mean really cool
          </p>
         
        </header>
      </div>
    );
  }
  
  export default Card;