import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'react-dom';
import $ from 'jquery'
import 'whatwg-fetch';
import css from '../../styles/Rental.css';


class Rental extends Component {

  constructor(props) {
      super(props);

      this.state = {
          firstName: 'Admin',
          lastName: 'Admin',
          telephone: '0719762808',
          email: 'admin@admin.com',
          productModel: '',
          rentalDate: '',
          returnDate: '',
          rentalError: ''
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
      rentalDate,
      returnDate,
      rentalError
    } = this.state;

    // POST
    fetch('/api/account/rental', { 
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
        returnDate: returnDate,
        rentalDate: rentalDate
      }),
    }).then(res => res.json())
      .then(json => {
        this.setState({
            rentalError: json.message,
          });
        if (json.success) {
          this.setState({
            rentalError: json.message,
          })
        } else {
          this.setState({
            rentalError: json.message,
          })
        }
      });

      // EMAIL
      // ADMIN
      fetch('/api/account/rental-admin-email', { 
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
          returnDate: returnDate,
          rentalDate: rentalDate
        }),
      }).then(res => res.json())

      // CLIENT
      fetch('/api/account/rental-client-email', { 
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
          returnDate: returnDate,
          rentalDate: rentalDate
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
    //   rentalDate: date,
    // });
    // const rentalDate = event.currentTarget.textContent;
    // console.log(rentalDate);
    // }
    // onClickSeviceType(event) {
    // this.setState({
    //   returnDate: event.currentTarget.textContent,
    // });
    // const returnDate = event.currentTarget.textContent;
    // console.log(returnDate);
    // }




    // JQUERY

    componentDidMount () {
      let _this=this;
      let returnDate = _this.state.returnDate;
      let rentalDate = _this.state.rentalDate;

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
      $('.wrap').removeClass('member-selected date-selected time-in-selected time-out-selected booking-complete');
      e.preventDefault();
      e.stopPropagation();
    });

    // Select Time In
    $('.deselect-date').on('click', function(e){
      $('.wrap').removeClass('date-selected time-in-selected time-out-selected');
      $('.calendar *').removeClass('selected');
      e.preventDefault();
      e.stopPropagation();
    });

    // Select Time Out
     $('.deselect-time-in').on('click', function(e){
      $('.wrap').removeClass('time-in-selected time-out-selected');
      $('.calendar *').removeClass('selected');
      e.preventDefault();
      e.stopPropagation();
    });

    $('.deselect-time-out').on('click', function(e){
      $('.wrap').removeClass('time-out-selected');
      $('.time-out *').removeClass('selected');
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
        addTimeIn();
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
        _this.setState({ rentalDate: [date+ ' ' +day+ ' ' +monthNames[month]+ ' ' +year] })
        console.log(rentalDate);
        e.preventDefault();
        e.stopPropagation();
      });
    }


    function invokeTimeInListener(){
      $('.time-in li').on('click', function(e){
        addTimeOut();
        var rentalDate = $(this).html();
        $(this).addClass('selected');
        $('.wrap').addClass('time-in-selected');
        _this.setState({ rentalDate: rentalDate })
        console.log(rentalDate);
        e.preventDefault();
        e.stopPropagation();
      });
    }

    function invokeTimeOutListener(){
      $('.time-out li').on('click', function(e){
        var returnDate = $(this).html();
        $(this).addClass('selected');
        $('.wrap').addClass('time-out-selected');
        _this.setState({ returnDate: returnDate })
        console.log(returnDate);
        e.preventDefault();
        e.stopPropagation();
      });
    }

    function addTimeOut(container){
  
      var time = ['12:00','13:00','14:00','15:00','16:00','17:00'];
      var timeDisplay = '';
      var timeOut = '';
      for(var i = 0; i < time.length; i++) {
        timeDisplay = time[i];
        timeOut += '<li>'+timeDisplay+'</li>';
      }

      $('.selected .time-out').html(timeOut);
      
      invokeTimeOutListener();
      
    }

    function addTimeIn(container){
      
      var time = ['7:00','8:00','9:00','10:00','11:00','12:00'];
      var timeDisplay = '';
      var timeIn = '';
      for(var i = 0; i < time.length; i++) {
        timeDisplay = time[i];
        timeIn += '<li>'+timeDisplay+'</li>';
      }
      
      $('.selected .time-in').html(timeIn);
      
      invokeTimeInListener();
      
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
      rentalDate,
      returnDate,
      rentalError
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
              <div className="deselect-time-in">change</div>
              <div className="deselect-time-out">change</div>
              <div className="calendar"></div>
              <ul className="time-in"></ul>
              <ul className="time-out"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Lease Product"/>
              </form>
              <div className="confirm-message">Lease Complete!<span className="restart">Find Another Product?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Backhoe Loader</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-time-in">change</div>
              <div className="deselect-time-out">change</div>
              <div className="calendar"></div>
              <ul className="time-in"></ul>
              <ul className="time-out"></ul>
              <form className="form">
                <label>Name</label>
                <input type="submit" onClick={this.onSubmit} value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Lease Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Motor Grader</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-time-in">change</div>
              <div className="deselect-time-out">change</div>
              <div className="calendar"></div>
              <ul className="time-in"></ul>
              <ul className="time-out"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Lease Complete!<span className="restart">Book Again?</span></div>
            </div>
            <div className="member"> 
              <div className="avatar"></div>
              <div className="name" onClick={this.onClickProductModel}>Roller/Compactor</div>
              <div className="deselect-member">change</div>
              <div className="deselect-date">change</div>
              <div className="deselect-time-in">change</div>
              <div className="deselect-time-out">change</div>
              <div className="calendar"></div>
              <ul className="time-in"></ul>
              <ul className="time-out"></ul>
              <form className="form">
                <input type="submit" onClick={this.onSubmit} value="Confirm Booking"/>
              </form>
              <div className="confirm-message">Lease Complete!<span className="restart">Book Again?</span></div>
            </div>
          </div>
        </div>
        <h2 className="hidden">{rentalDate}</h2>
        <h2 className="hidden">{returnDate}</h2>
        <a className="sig" href="#" target="_blank">ACHELIS KENYA LTD</a>
      </div>
    );
  }

}

export default Rental;
