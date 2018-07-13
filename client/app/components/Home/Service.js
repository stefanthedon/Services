import React, { Component } from 'react';
import { Select } from 'react-dom';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import 'whatwg-fetch';
import css from '../../styles/Service.css';
// import axios from 'axios';



class Service extends Component {

  constructor(props) {
      super(props);

      this.state = {
          firstName: 'Admin',
          lastName: 'Admin',
          telephone: '0719762808',
          email: 'don.parminter@gmail.com',
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
        fetch('/api/account/booking-admin-email', { 
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

        // CLIENT
      fetch('/api/account/booking-client-email', { 
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
        addCalendar($(this).find('.calendar'));
      }
      // e.preventDefault();
      // e.stopPropagation();
    });

    $('.deselect-member, .restart').on('click', function(e){
      $('.member').removeClass('selected');
      $('.wrap').removeClass('member-selected date-selected slot-selected booking-complete');
      e.preventDefault();
      e.stopPropagation();
    });

    $('.deselect-date').on('click', function(e){
      $('.wrap').removeClass('date-selected slot-selected');
      $('.calendar *').removeClass('selected');
      e.preventDefault();
      e.stopPropagation();
    });

    $('.deselect-slot').on('click', function(e){
      $('.wrap').removeClass('slot-selected');
      $('.slots *').removeClass('selected');
      e.preventDefault();
      e.stopPropagation();
    });

    $('.form').on('submit', function(e){
      $('.wrap').toggleClass('booking-complete');
      e.preventDefault();
      e.stopPropagation();
    });

    function invokeCalendarListener(){
      $('.calendar td:not(.disabled)').on('click', function(e){
        addSlots();
        var today = new Date();
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = $(this).html();
        var day = $(this).data('day');
        var month = today.getMonth();
        var year = today.getFullYear();
        $('.date').html(day + ',  ' + date);
        $(this).addClass('selected');
        setTimeout(function(){
          $('.wrap').addClass('date-selected');
        },10);
        _this.setState({ serviceDate: [date+ ' ' +day+ ' ' +monthNames[month]+ ' ' +year] })
        console.log(serviceDate);
        e.preventDefault();
        e.stopPropagation();
      });
    }


    function invokeSlotsListener(){
      $('.slots li').on('click', function(e){
        var service = $(this).html();
        $(this).addClass('selected');
        $('.wrap').addClass('slot-selected');
        setTimeout(function(){
          $('.selected.member input[name="name"]').focus();
        }, 700);
        _this.setState({ serviceType: service })
        console.log(serviceType);
        e.preventDefault();
        e.stopPropagation();
      });
    }



    function addSlots(container){
      
      var service = ['Major Service', 'Minor Service'];
      var slots = ''
      for(var i = 0; i < service.length; i++) {
        slots += '<li>'+service[i]+'</li>';
      }
      
      $('.selected .slots').html(slots);
      
      invokeSlotsListener();
      
    }



    function addCalendar(container){
      //get dates
      var today = new Date();
      var day = today.getDay()
      var date = today.getDate();
      var month = today.getMonth();
      var year = today.getFullYear();
      var first = new Date();
      first.setDate(1);
      var startDay = first.getDay();
      var dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
      var monthLengths = [31,28,31,30,31,30,31,31,30,31,30,31];
      var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var dayNames = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      
      var current = 1 - startDay;
      
      //assemble calendar
      var calendar = '<label class="date"></label><label class="month">'+monthNames[month]+'</label> <label class="year">'+year+'</label>';
      
      calendar += '<table><tr>';
      dayLabels.forEach(function(label){
        calendar += '<th>'+label+'</th>';
      })
      calendar += '</tr><tr>';
      var dayClasses = '';
      while( current <= 30){
        // if (window.CP.shouldStopExecution(2)){break;}
        if (current > 0){
          dayClasses = '';
          today.setDate(current);
          if (today.getDay() == 0 || today.getDay() == 6){
            dayClasses += ' disabled';
          }
          if (current < date){
            dayClasses += ' disabled';
          }
          if (current == date){
            dayClasses += ' today';
          }
          calendar += '<td class="'+dayClasses+'" data-day="'+dayNames[(current + startDay)%7]+'">'+current+'</td>';
        } else {
          calendar += '<td></td>';
        }
        
        if ( (current + startDay) % 7 == 0){
          calendar += '</tr><tr>';
        }
        
        current++
      }
    // window.CP.exitedLoop(2);

      
      calendar += '</tr></table>';
      container.html(calendar);
      
      invokeCalendarListener();
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
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Backhoe Loader</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <label>Name</label>
                <input type="submit" onClick={this.onSubmit} value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Motor Grader</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Roller/Compactor</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-slot">change</div>
              <div className="calendar"></div>
              <ul className="slots"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Booking Complete!<span className="restart">Book Again?</span></div>
            </div>
          </div>
        </div>
        <h2 className="hidden">{serviceDate}</h2>
        <h2 className="hidden">{serviceType}</h2>
        <a className="sig" href="#" target="_blank">ACHELIS KENYA LTD</a>
      </div>
    );
  }

}

export default Service;
