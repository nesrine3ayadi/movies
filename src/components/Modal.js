import React, { Component } from 'react'
import Modal from 'react-modal'
import {  Button, Row, Col, Form } from "react-bootstrap";


export default class AddModal extends Component {
    constructor() {
        super();

        this.state={
            name:'',
            url:'',
            star:"",
            modalIsOpen:false,
        }
    }
        openModal =()=>{
            this.setState({modalIsOpen:true})
        }

        closeModal = () => {
            this.setState({ modalIsOpen: false });
          }

       
        handleChange = (e) =>{
            const {name,value} = e.target
            this.setState({
                [name]:value
            })
        }
        add=(e)=>{
            e.preventDefault();
            this.props.add(this.state.name,this.state.url,this.state.star)
            this.closeModal()
        }
    render() {
        return (
    <div className='addSection'>
        <button className='btn-modal' onClick={this.openModal}>
          +
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='modall'
          contentLabel='Example Modal'
        >
          <h5> ADD A NEW MOVIE</h5>
           <Form.Control type="text" required placeholder="Movie Name"  name='name' value={this.state.name}
                onChange={this.handleChange}/>
           <Form.Control type="text" required placeholder="Image url.."  name='url' value={this.state.url}
                onChange={this.handleChange}/>
             <Form.Control type="text" required placeholder="stars rating.."  name='star'  value={this.state.star}
                onChange={this.handleChange}/>
         

          

         <Button variant="primary"  className='input-sub'  value='Add film' onClick={(e)=>this.add(e)}>
                Add
                </Button>
        </Modal>
      </div>
    );
}
}
