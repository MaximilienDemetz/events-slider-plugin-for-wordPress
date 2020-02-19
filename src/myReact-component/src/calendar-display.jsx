class CalendarDisplay extends React.Component{
    constructor(props){
        super(...props);
        this.state = {
            dateContext: moment(),
            today: moment(), 
            dailyEvents:  props.datas,
        };
    }
    weekDays = moment.weekdays(true);
    months = moment.months();
    year= () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({dateContext: dateContext});
    }
    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({dateContext: dateContext});
    }
    nextWeek = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(7, "days");
        this.setState({dateContext: dateContext});
    }
    prevWeek = () =>{
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(7, "days");
        this.setState({dateContext: dateContext});
    }
    render() {
        let weekDays = this.weekDays.map((day) => {
            return <th key={day} className={`week-day ${day}`}>{day.toUpperCase()}</th>
        });
        let copieMoment = Object.assign({}, this.state.dateContext);
        let aujourdhuiJour = this.state.dateContext.day();
        let week = [];
        let weekMonth =[];
        let weekYear =[];
        switch (aujourdhuiJour) {
            case 0:
                for (let i=0; i<8; i++){

                    let finSemaine = moment(copieMoment).add(i,'days');
                    let finMonth = finSemaine.format('MM');
                    weekMonth.push(finMonth);
                    let finYear = finSemaine.format('YYYY');
                    weekYear.push(finYear);
                    finSemaine = finSemaine.format('DD');
                    week.push(finSemaine);
                }
                break;
            case 1:
                for (let i=1; i<1; i++){
                    let debutSemaine = moment(copieMoment).subtract(i,'days');
                    let debutMonth = debutSemaine.format('MM');
                    weekMonth.unshift(debutMonth);
                    let debutYear = debutSemaine.format('YYYY');
                    weekYear.unshift(debutYear);
                    debutSemaine = debutSemaine.format('DD');
                    week.unshift(debutSemaine);
                }
                for (let i=0; i<7; i++){
                    let finSemaine = moment(copieMoment).add(i,'days');
                    let finMonth = finSemaine.format('MM');
                    weekMonth.push(finMonth);
                    let finYear = finSemaine.format('YYYY');
                    weekYear.push(finYear);
                    finSemaine = finSemaine.format('DD');
                    week.push(finSemaine);
                }
                break;
            case 2:
                for (let i=1; i<2; i++){
                    let debutSemaine = moment(copieMoment).subtract(i,'days');
                    let debutMonth = debutSemaine.format('MM');
                    weekMonth.unshift(debutMonth);
                    let debutYear = debutSemaine.format('YYYY');
                    weekYear.unshift(debutYear);
                    debutSemaine = debutSemaine.format('DD');
                    week.unshift(debutSemaine);
                }
                for (let i=0; i<6; i++){
                    let finSemaine = moment(copieMoment).add(i,'days');
                    let finMonth = finSemaine.format('MM');
                    weekMonth.push(finMonth);
                    let finYear = finSemaine.format('YYYY');
                    weekYear.push(finYear);
                    finSemaine = finSemaine.format('DD');
                    week.push(finSemaine);
                }
                break;
            case 3:
                for (let i=1; i<3; i++){
                    let debutSemaine = moment(copieMoment).subtract(i,'days');
                    let debutMonth = debutSemaine.format('MM');
                    weekMonth.unshift(debutMonth);
                    let debutYear = debutSemaine.format('YYYY');
                    weekYear.unshift(debutYear);
                    debutSemaine = debutSemaine.format('DD');
                    week.unshift(debutSemaine);
                }
                for (let i=0; i<5; i++){
                    let finSemaine = moment(copieMoment).add(i,'days');
                    let finMonth = finSemaine.format('MM');
                    weekMonth.push(finMonth);
                    let finYear = finSemaine.format('YYYY');
                    weekYear.push(finYear);
                    finSemaine = finSemaine.format('DD');
                    week.push(finSemaine);
                }
                break;  
            case 4:
                for (let i=1; i<4; i++){
                    let debutSemaine = moment(copieMoment).subtract(i,'days');
                    let debutMonth = debutSemaine.format('MM');
                    weekMonth.unshift(debutMonth);
                    let debutYear = debutSemaine.format('YYYY');
                    weekYear.unshift(debutYear);
                    debutSemaine = debutSemaine.format('DD');
                    week.unshift(debutSemaine);
                }
                for (let i=0; i<4; i++){
                    let finSemaine = moment(copieMoment).add(i,'days');
                    let finMonth = finSemaine.format('MM');
                    weekMonth.push(finMonth);
                    let finYear = finSemaine.format('YYYY');
                    weekYear.push(finYear);
                    finSemaine = finSemaine.format('DD');
                    week.push(finSemaine);
                }
                break;
            case 5:
                for (let i=1; i<5; i++){
                    let debutSemaine = moment(copieMoment).subtract(i,'days');
                    let debutMonth = debutSemaine.format('MM');
                    weekMonth.unshift(debutMonth);
                    let debutYear = debutSemaine.format('YYYY');
                    weekYear.unshift(debutYear);
                    debutSemaine = debutSemaine.format("DD");
                    week.unshift(debutSemaine);
                }
                for (let i=0; i<3; i++){
                    let finSemaine = moment(copieMoment).add(i,'days');
                    let finMonth = finSemaine.format('MM');
                    weekMonth.push(finMonth);
                    let finYear = finSemaine.format('YYYY');
                    weekYear.push(finYear);
                    finSemaine = finSemaine.format('DD');
                    week.push(finSemaine);
                }
                break;
            case 6:
                for (let i=1; i<6; i++){
                    let debutSemaine = moment(copieMoment).subtract(i,'days');
                    let debutMonth = debutSemaine.format('MM');
                    weekMonth.unshift(debutMonth);
                    let debutYear = debutSemaine.format('YYYY');
                    weekYear.unshift(debutYear);
                    debutSemaine = debutSemaine.format('DD');
                    week.unshift(debutSemaine);
                }
                for (let i=0; i<2; i++){
                    let finSemaine = moment(copieMoment).add(i,'days');
                    let finMonth = finSemaine.format('MM');
                    weekMonth.push(finMonth);
                    let finYear = finSemaine.format('YYYY');
                    weekYear.push(finYear);
                    finSemaine = finSemaine.format('DD');
                    week.push(finSemaine);
                }
                break;
            case 7:
                for (let i=1; i<7; i++){
                    let debutSemaine = moment(copieMoment).subtract(i,'days');
                    let debutMonth = debutSemaine.format('MM');
                    weekMonth.unshift(debutMonth);
                    let debutYear = debutSemaine.format('YYYY');
                    weekYear.unshift(debutYear);
                    debutSemaine = debutSemaine.format('DD');
                    week.unshift(debutSemaine);
                }
                break;
            default:
                alert('Oups, il ya un pb avec le switch ligne 240');
        }
        let currentWeek = week.map(day => {
            return(
                <td key={day*15.68} className='daysNb'>
                    {day}
                </td>
            );
        });
        let currentMonth = weekMonth.map(month=>{
            return(
                <td className="hidden">
                    {month}
                </td>
            )
        })
        let currentYear = weekYear.map(year =>{
            return(
                <td className="hidden">
                    {year}
                </td>
            )
        })
       
        return(   
            <div className='calendarContainer'>
                    <div className="weekNav leftWeekNav ">
                        <button onClick={(e)=> {this.prevWeek()}} id ="leftNavBtn" className="weekNavBtn"> &#10216; </button>
                    </div>
                    <main className="calendar">
                        <section className="calendarHeader">
                                <div className="monthDisplay">
                                    {this.month().toUpperCase()+" "+this.year()}
                                </div>
                                <div className="monthNav">
                                    <p onClick={(e)=> {this.prevMonth()}} className="prev monthNavBtn"> &nbsp;&nbsp;&#60; </p>
                                    <p onClick={(e)=> {this.nextMonth()}} className="next monthNavBtn"> &nbsp;&#62; </p>
                                </div> 
                        </section>
                        <section className ="weekDisplay" >
                            <table className="daysOfWeek">
                                <thead>
                                    <tr>
                                        {weekDays}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {currentYear}
                                    </tr>
                                   <tr>
                                       {currentWeek}
                                   </tr>
                                   <tr>
                                        {currentMonth}
                                   </tr>
                                   <DailyEvents datas={this.state.dailyEvents} currentWeek={currentWeek} dateContext={this.state.dateContext} currentMonth={currentMonth} currentYear={weekYear}/>  
                                </tbody>
                            </table>
                        </section>
                    </main>
                    <div className="weekNav rightWeekNav">
                        <button onClick={(e)=> {this.nextWeek()}} id ="rightNavBtn" className="weekNavBtn"> &#10217; </button>
                    </div>
            </div>
        );
    }
}

class DailyEvents extends React.Component {
    render(){
        let events = this.props.datas;
        let currentWeek = this.props.currentWeek;
        console.log("currentWeek", currentWeek);
        let currentMonth = this.props.currentMonth;
        let currentYear = this.props.currentYear;

        let year1 = currentYear[0];
        let month1= [currentMonth[0].props.children];
        let jour1 = [currentWeek[0].props.children];

        events.forEach(function(event){
            if ((event.eventDate === event.eventEnd)&&(event.eventDate === (year1+"-"+month1+"-"+jour1[0]))){
                jour1.push(event.eventTime.replace(':','h')+"  "+event.eventName);
            }else if(event.eventDate != event.eventEnd){
               if(moment(event.eventDate).isSameOrBefore(year1+"-"+month1+"-"+jour1[0])&&moment(year1+"-"+month1+"-"+jour1[0]).isBefore(event.eventEnd)){
                   switch (event.eventRec){
                       case 'Tous les jours':
                           jour1.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                           break;
                        case 'Tous les jours hors Week-end':
                            jour1.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                           break;
                        case 'Une fois par semaine':
                            if(moment(event.eventDate).format('ddd') === 'lun'){
                                jour1.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            }
                            break;
                   }
               }
            }
        })
        jour1.shift();
        jour1.sort();
        let jour1Display = jour1.map(evt=>{
            return(
                <li key={evt}> <span className="hourSpan">{evt.slice(0,6)}</span>{evt.slice(7)} </li>
            )
        })
        let year2 = currentYear[1];
        let month2= [currentMonth[1].props.children];
        let jour2 = [currentWeek[1].props.children];
        events.forEach(function(event){
            if ((event.eventDate === event.eventEnd)&&(event.eventDate === (year2+"-"+month2+"-"+jour2[0]))){
                jour2.push(event.eventTime.replace(':','h')+"  "+event.eventName);
            }else if(event.eventDate != event.eventEnd){
                if(moment(event.eventDate).isSameOrBefore(year2+"-"+month2+"-"+jour2[0])&&moment(year2+"-"+month2+"-"+jour2[0]).isBefore(event.eventEnd)){
                    switch (event.eventRec){
                        case 'Tous les jours':
                            jour2.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Tous les jours hors Week-end':
                             jour2.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Une fois par semaine':
                             if(moment(event.eventDate).format('ddd') === 'mar'){
                                 jour2.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                             }
                             break;
                    }
                }
            }
        })
        jour2.shift();
        jour2.sort();
        let jour2Display = jour2.map(evt=>{
            return(
                <li key={evt}> <span className="hourSpan">{evt.slice(0,6)}</span>{evt.slice(7)} </li>
            )
        })
        let year3 = currentYear[2];
        let month3= [currentMonth[2].props.children];
        let jour3 = [currentWeek[2].props.children];
        events.forEach(function(event){
            if ((event.eventDate === event.eventEnd)&&(event.eventDate === (year3+"-"+month3+"-"+jour3[0]))){
                jour3.push(event.eventTime.replace(':','h')+"  "+event.eventName);
            }else if(event.eventDate != event.eventEnd){
                if(moment(event.eventDate).isSameOrBefore(year3+"-"+month3+"-"+jour3[0])&&moment(year3+"-"+month3+"-"+jour3[0]).isBefore(event.eventEnd)){
                    switch (event.eventRec){
                        case 'Tous les jours':
                            jour3.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Tous les jours hors Week-end':
                             jour3.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Une fois par semaine':
                             if(moment(event.eventDate).format('ddd') === 'mer'){
                                 jour3.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                             }
                             break;
                    }
                }
            }
        })
        jour3.shift();
        jour3.sort();
        let jour3Display = jour3.map(evt=>{
            return(
                <li key={evt}> <span className="hourSpan">{evt.slice(0,6)}</span>{evt.slice(7)} </li>
            )
        })
        let year4 = currentYear[3];
        let month4= [currentMonth[3].props.children];
        let jour4 = [currentWeek[3].props.children];
        events.forEach(function(event){
            if ((event.eventDate===event.eventEnd)&&(event.eventDate === (year4+"-"+month4+"-"+jour4[0]))){
                jour4.push(event.eventTime.replace(":","h")+"  "+event.eventName);
            }else if(event.eventDate != event.eventEnd){
                if(moment(event.eventDate).isSameOrBefore(year4+"-"+month4+"-"+jour4[0])&&moment(year4+"-"+month4+"-"+jour4[0]).isBefore(event.eventEnd)){
                    switch (event.eventRec){
                        case 'Tous les jours':
                            jour4.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Tous les jours hors Week-end':
                             jour4.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Une fois par semaine':
                             if(moment(event.eventDate).format('ddd') === 'jeu'){
                                 jour4.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                             }
                             break;
                    }
                }
            }
        })
        jour4.shift();
        jour4.sort();
        let jour4Display = jour4.map(evt=>{
            return(
                <li key={evt}> <span className="hourSpan">{evt.slice(0,6)}</span>{evt.slice(7)} </li>
            )
        })
        let year5 = currentYear[4];
        let month5= [currentMonth[4].props.children];
        let jour5 = [currentWeek[4].props.children];
        events.forEach(function(event){
            if ((event.eventDate===event.eventEnd)&&(event.eventDate === (year5+"-"+month5+"-"+jour5[0]))){
                jour5.push(event.eventTime.replace(":","h")+"  "+event.eventName);
            }else if(event.eventDate != event.eventEnd){
                if(moment(event.eventDate).isSameOrBefore(year5+"-"+month5+"-"+jour5[0])&&moment(year5+"-"+month5+"-"+jour5[0]).isBefore(event.eventEnd)){
                    switch (event.eventRec){
                        case 'Tous les jours':
                            jour5.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Tous les jours hors Week-end':
                             jour5.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Une fois par semaine':
                             if(moment(event.eventDate).format('ddd') === 'ven'){
                                 jour5.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                             }
                             break;
                    }
                }
            }
        })
        jour5.shift();
        jour5.sort();
        let jour5Display = jour5.map(evt=>{
            return(
                <li key={evt}> <span className="hourSpan">{evt.slice(0,6)}</span>{evt.slice(7)} </li>
            )
        })
        let year6 = currentYear[5];
        let month6= [currentMonth[5].props.children];
        let jour6 = [currentWeek[5].props.children];
        events.forEach(function(event){
            if ((event.eventDate===event.eventEnd)&&(event.eventDate === (year6+"-"+month6+"-"+jour6[0]))){
                jour6.push(event.eventTime.replace(':','h')+"  "+event.eventName);
            }else if(event.eventDate != event.eventEnd){
                if(moment(event.eventDate).isSameOrBefore(year6+"-"+month6+"-"+jour6[0])&&moment(year6+"-"+month6+"-"+jour6[0]).isBefore(event.eventEnd)){
                    switch (event.eventRec){
                        case 'Tous les jours':
                            jour6.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Uniquement les week-end':
                             jour6.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                         case 'Une fois par semaine':
                             if(moment(event.eventDate).format('ddd') === 'sam'){
                                 jour6.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                             }
                             break;
                    }
                }
            }
        })
        jour6.shift();
        jour6.sort();
        let jour6Display = jour6.map(evt=>{
            return(
                <li key={evt}> <span className="hourSpan">{evt.slice(0,6)}</span>{evt.slice(7)} </li>
            )
        })
        let year7 = currentYear[6];
        let month7= [currentMonth[6].props.children];
        let jour7 = [currentWeek[6].props.children];
        events.forEach(function(event){
            if ((event.eventDate===event.eventEnd)&&(event.eventDate === (year7+"-"+month7+"-"+jour7[0]))){
                jour7.push(event.eventTime.replace(':','h')+"  "+event.eventName);
            }else if(event.eventDate != event.eventEnd){
                if(moment(event.eventDate).isSameOrBefore(year7+"-"+month7+"-"+jour7[0])&&moment(year7+"-"+month7+"-"+jour7[0]).isBefore(event.eventEnd)){
                    switch(event.eventRec){
                        case 'Tous les jours':
                            jour7.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                        case 'Uniquement les week-end':
                            jour7.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            break;
                        case 'Une fois par semaine':
                            if(moment(event.eventDate).format('ddd') === 'dim'){
                                jour7.push(event.eventTime.replace(':','h')+"  "+event.eventName);
                            }
                            break;
                    }
                }
            }
        })
        jour7.shift();
        jour7.sort();
        let jour7Display = jour7.map(evt=>{
            return(
                <li key={evt}> <span className="hourSpan">{evt.slice(0,6)}</span>{evt.slice(7)} </li>
            )
        })
        return(
            <tr>
              <td>{jour1Display}</td>
              <td>{jour2Display}</td>
              <td>{jour3Display}</td>
              <td>{jour4Display}</td>
              <td>{jour5Display}</td>
              <td>{jour6Display}</td>
              <td>{jour7Display}</td>
            </tr>
        )  
    }
}

jQuery(document).ready(function () {
    var domContainer = document.getElementsByClassName('events-calendar-root');
    [].forEach.call(domContainer, function(element) {
        let datas = JSON.parse(jQuery(element).attr('datas'));
        ReactDOM.render(React.createElement(CalendarDisplay, {"datas": datas}), element);
    });
});