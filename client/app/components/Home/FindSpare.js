import React, { Component } from 'react';
import { Select } from 'react-dom';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import 'whatwg-fetch';
import css from '../../styles/FindSpare.css';
import ContentContainer from './ContentContainer';

import {
  getFromStorage
} from '../../utils/storage';


class FindSpare extends Component {

  constructor(props) {
      super(props);

      this.state = {
          firstName: 'Admin',
          lastName: 'Admin',
          telephone: '07xxxxxxxx',
          email: 'don.parminter@gmail.com',
          email: '',
          productModel: '',
          productSpare: '',
          findSpareError: ''
      };
      
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickProductModel = this.onClickProductModel.bind(this);

  }

  onSubmit(event) {
    const {
      productModel,
      productSpare,
      findSpareError
    } = this.state;

    // POST
    fetch('/api/account/booking', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        telephone: telephone,
        email: email,
        productModel: productModel,
        productSpare: productSpare
      }),
    }).then(res => res.json())
      .then(json => {
        this.setState({
            findSpareError: json.message,
          });
        if (json.success) {
          this.setState({
            findSpareError: json.message,
          })
        } else {
          this.setState({
            findSpareError: json.message,
          })
        }
      });

      // EMAIL
        fetch('/api/account/findspare-admin-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          telephone: telephone,
          email: email,
          productModel: productModel,
          productSpare: productSpare
        }),
      }).then(res => res.json())

      // CLIENT
      fetch('/api/account/findspare-client-email', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          telephone: telephone,
          email: email,
          productModel: productModel,
          productSpare: productSpare
        }),
      }).then(res => res.json())
  }


  onClickProductModel(event) {
    this.setState({
      productModel: event.currentTarget.textContent,
    });
    const productModel = event.currentTarget.textContent;
    console.log(productModel);
    }

    // JQUERY

    componentDidMount () {
      // PULL ACCOUNT DETAILS
      //1. RETRIEVE TOKEN
      // const obj = getFromStorage('the_main_app');
      // const { token } = obj;
      // fetch('/api/account/session/' + token)
      // .then(res => res.json())
      // .then(json => {
      //   if (json.success) {
      //     this.setState({
      //       token: json.token,
      //       userId: json.userId
      //     });
      //   }
      // });

      

      //2. ASSIGN USER DETAILS
    // const {
    //   userId
    // } = this.state;
    // fetch('/api/account/user/' + userId)
    //   .then(res => res.json())
    //   .then(json => {
    //     if (json.success) {
    //       this.setState({
    //         firstName: json.firstName,
    //         lastName: json.lastName,
    //         telephone: json.telephone,
    //         email: json.email
    //       });
    //     } 
    //   });


      let _this=this;
      let productModel = _this.state.productModel;
      let productSpare = _this.state.productSpare;


    $('.member').on('click', function(){
      if (!$(this).hasClass('selected')){
        $(this).addClass('selected');
        $('.wrap').addClass('member-selected');
        addModel();
      }
      // e.preventDefault();
      // e.stopPropagation();
    });

    $('.deselect-member, .restart').on('click', function(e){
      $('.member').removeClass('selected');
      $('.wrap').removeClass('member-selected model-selected spare-selected booking-complete');
      e.preventDefault();
      e.stopPropagation();
    });

    $('.deselect-model').on('click', function(e){
      $('.wrap').removeClass('model-selected');
      $('.model *').removeClass('selected');
      e.preventDefault();
      e.stopPropagation();
    });

    $('.deselect-spare').on('click', function(e){
      $('.wrap').removeClass('spare-selected');
      $('.spare *').removeClass('selected');
      e.preventDefault();
      e.stopPropagation();
    });

    $('.form').on('submit', function(e){
      $('.wrap').toggleClass('booking-complete');
      e.preventDefault();
      e.stopPropagation();
    });

    function invokeModelListener(){
      $('.model li').on('click', function(e){
        addSpare();
        var productModel = $(this).html();
        $(this).addClass('selected');
        $('.wrap').addClass('model-selected');
        _this.setState({ productModel: productModel })
        console.log(productModel);
        e.preventDefault();
        e.stopPropagation();
      });
    }

    function invokeSpareListener(){
      $('.spare li').on('click', function(e){
        var productSpare = $(this).html();
        $(this).addClass('selected');
        $('.wrap').addClass('spare-selected');
        _this.setState({ productSpare: productSpare })
        console.log(productSpare);
        e.preventDefault();
        e.stopPropagation();
      });
    }

    function addModel(container){
      
      var modelArray = ['CX2010B', 'CX290B', 'CX350B', 'CX470B'];
      var model = ''
      for(var i = 0; i < modelArray.length; i++) {
        model += '<li>'+modelArray[i]+'</li>';
      }
      
      $('.selected .model').html(model);
      
      invokeModelListener();
      
    }

    function addSpare(container){
      
      var spareArray = ['Oil Filter', 'Fuel Filter', 'Water Separator', 'Air Filter', 'Transmission filter', 'Hydraulic Filter'];
      var spare = ''
      for(var i = 0; i < spareArray.length; i++) {
        spare += '<li>'+spareArray[i]+'</li>';
      }
      
      $('.selected .spare').html(spare);
      
      invokeSpareListener();
      
    }

    }

    // END OF JQUERY

  render() {
    const {
      firstName,
      lastName,
      telephone,
      email,
      token,
      userId,
      productModel,
      productSpare,
      findSpareError
    } = this.state;
    console.log(token);
    console.log(userId);
    console.log(firstName);
    console.log(lastName);
    console.log(telephone);
    console.log(email);
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <Link to="/">
              <ul className="nav navbar-nav navbar-left">
                  <li><span className="glyphicon glyphicon-chevron-left"></span><span className="name">HOME</span></li>  
              </ul>
            </Link>
            <div className="navbar-header">
              <div className="navbar-brand navbar-brand-centered">ACHELIS KENYA LTD</div>
            </div>
          </div>
        </nav>
        <div className="wrap">
          <div className="instructions">
            <div className="first">Choose Product</div>
          </div>
          <div className="staff">
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Excavator</div>
              <div className="deselect-member">change</div>
              <div className="deselect-model">change</div>
              <div className="deselect-spare">change</div>
              <div className="model"></div>
              <ul className="spare"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Confirm Spare"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Backhoe Loader</div>
              <div className="deselect-member">change</div>
              <div className="deselect-model">change</div>
              <div className="deselect-spare">change</div>
              <div className="model">Select Model:</div>
              <ul className="spare">Select Spare:</ul>
              <form className="form">
                <label>Name</label>
                <input type="submit" onClick={this.onSubmit} value="Confirm Spare"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Motor Grader</div>
              <div className="deselect-member">change</div>
              <div className="deselect-model">change</div>
              <div className="deselect-spare">change</div>
              <div className="model"></div>
              <ul className="spare"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Confirm Spare"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Roller/Compactor</div>
              <div className="deselect-member">change</div>
              <div className="deselect-model">change</div>
              <div className="deselect-spare">change</div>
              <div className="model"></div>
              <ul className="spare"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Confirm Spare"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
          </div>
        </div>
        <h2 className="hidden">{productModel}</h2>
        <h2 className="hidden">{productSpare}</h2>
        <a className="sig" href="#" target="_blank">ACHELIS KENYA LTD</a>
      </div>
    );
  }

}

export default FindSpare;
