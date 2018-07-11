import React, { Component } from 'react';
import { Select } from 'react-dom';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import 'whatwg-fetch';
import css from '../../styles/FindSpare.css';
// import axios from 'axios';



class FindSpare extends Component {

  constructor(props) {
      super(props);

      this.state = {
          firstName: 'Admin',
          lastName: 'Admin',
          telephone: '0719762808',
          email: 'admin@admin.com',
          productModel: '',
          serviceDate: '',
          serviceType: '',
          bookingError: ''
      };

    this.onSubmit = this.onSubmit.bind(this);
    this.onClickProductModel = this.onClickProductModel.bind(this);
    // this.onClickSeviceDate = this.onClickSeviceDate.bind(this);
    // this.onClickSeviceType = this.onClickSeviceType.bind(this);
  
  }

  onSubmit(event) {
    const {
      firstName,
      lastName,
      telephone,
      email,
      productModel,
      serviceDate,
      serviceType,
      bookingError
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
        serviceType: serviceType,
        serviceDate: serviceDate
      }),
    }).then(res => res.json())
      .then(json => {
        this.setState({
            bookingError: json.message,
          });
        if (json.success) {
          this.setState({
            bookingError: json.message,
          })
        } else {
          this.setState({
            bookingError: json.message,
          })
        }
      });

      // EMAIL
      fetch('/api/account/email', { 
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
        serviceType: serviceType,
        serviceDate: serviceDate
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
    // onClickSeviceDate(event) {
    // this.setState({
    //   serviceDate: date,
    // });
    // const serviceDate = event.currentTarget.textContent;
    // console.log(serviceDate);
    // }
    // onClickSeviceType(event) {
    // this.setState({
    //   serviceType: event.currentTarget.textContent,
    // });
    // const serviceType = event.currentTarget.textContent;
    // console.log(serviceType);
    // }




    // JQUERY

    componentDidMount () {
      let _this=this;
      let serviceType = _this.state.serviceType;
      let serviceDate = _this.state.serviceDate;

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
        var FindSpare = $(this).html();
        $(this).addClass('selected');
        $('.wrap').addClass('model-selected');
        _this.setState({ serviceType: FindSpare })
        console.log(serviceType);
        e.preventDefault();
        e.stopPropagation();
      });
    }

    function invokeSpareListener(){
      $('.spare li').on('click', function(e){
        var FindSpare = $(this).html();
        $(this).addClass('selected');
        $('.wrap').addClass('spare-selected');
        _this.setState({ serviceType: FindSpare })
        console.log(serviceType);
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
      productModel,
      serviceDate,
      serviceType,
      bookingError
    } = this.state;
      
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <Link to="/">
          <ul className="nav navbar-nav navbar-left">
              <li><a href=""><span className="glyphicon glyphicon-home">HOME</span></a></li>  
          </ul>
          </Link>

          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand navbar-brand-centered">ACHELIS KE</div>
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
              <h2>{bookingError}</h2>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar" style={{backgroundImage: 'url(http://i.pravatar.cc/300?img=25)'}}></div>
              <div className="name">Backhoe Loader</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-model">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">Motor Grader</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-model">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name">Roller/Compactor</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-model">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <input type="submit" value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
          </div>
        </div>
        <h2 className="hidden">{serviceDate}</h2>
        <h2 className="hidden">{serviceType}</h2>
        <a className="sig" href="#" target="_blank">ACHELIS KE</a>
      </div>
    );
  }

}

export default FindSpare;
