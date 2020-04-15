import React, { Component } from 'react'
import Modal from 'react-modal'


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
    <div className=''>
        <button className='btn-modal' onClick={this.openModal}>
          <img className="img-plus" src="https://www.freepnglogos.com/uploads/plus-icon/plus-svg-png-icon-download-onlinewebfontsm-4.png"/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='modall'
          contentLabel='Example Modal'
        >
          
            <label for='fname'>Film Name</label>
            <input
              type='text'
              id='fname'
              name='name'
              placeholder='Film name..'
                value={this.state.name}
                onChange={this.handleChange}
            />

            <label for='lname'>Image Url</label>
            <input
              type='text'
              id='lname'
              name='url'
              placeholder='Image url..'
              value={this.state.url}
              onChange={this.handleChange}
            />

            <label for='lname'>FIlm rating</label>
            <input
              type='text'
              id='lname'
              name='star'
              placeholder='Film rating..'
              value={this.state.star}
              onChange={this.handleChange}
            />

            <button className='input-sub'  value='Add film' onClick={(e)=>this.add(e)}>
                Add
                </button>
        </Modal>
      </div>
    );
}
}
