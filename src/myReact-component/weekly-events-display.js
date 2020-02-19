var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeeklyEventsDisplay = function (_React$Component) {
    _inherits(WeeklyEventsDisplay, _React$Component);

    function WeeklyEventsDisplay(props) {
        var _ref;

        _classCallCheck(this, WeeklyEventsDisplay);

        var _this = _possibleConstructorReturn(this, (_ref = WeeklyEventsDisplay.__proto__ || Object.getPrototypeOf(WeeklyEventsDisplay)).call.apply(_ref, [this].concat(_toConsumableArray(props))));

        _this.weekDays = moment.weekdays(true);
        _this.months = moment.months();

        _this.year = function () {
            return _this.state.dateContext.format("Y");
        };

        _this.month = function () {
            return _this.state.dateContext.format("MMMM");
        };

        _this.nextMonth = function () {
            var dateContext = Object.assign({}, _this.state.dateContext);
            dateContext = moment(dateContext).add(1, "month");
            _this.setState({ dateContext: dateContext });
        };

        _this.prevMonth = function () {
            var dateContext = Object.assign({}, _this.state.dateContext);
            dateContext = moment(dateContext).subtract(1, "month");
            _this.setState({ dateContext: dateContext });
        };

        _this.nextWeek = function () {
            var dateContext = Object.assign({}, _this.state.dateContext);
            dateContext = moment(dateContext).add(7, "days");
            _this.setState({ dateContext: dateContext });
        };

        _this.prevWeek = function () {
            var dateContext = Object.assign({}, _this.state.dateContext);
            dateContext = moment(dateContext).subtract(7, "days");
            _this.setState({ dateContext: dateContext });
        };

        _this.state = {
            dateContext: moment(),
            today: moment(),
            dailyEvents: props.datas
        };
        return _this;
    }

    _createClass(WeeklyEventsDisplay, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var weekDays = this.weekDays.map(function (day) {
                return React.createElement(
                    "th",
                    { key: day, className: "week-day " + day },
                    day.toUpperCase()
                );
            });
            var copieMoment = Object.assign({}, this.state.dateContext);
            var aujourdhuiJour = this.state.dateContext.day();
            var week = [];
            var weekMonth = [];
            var weekYear = [];
            switch (aujourdhuiJour) {
                case 0:
                    for (var i = 0; i < 8; i++) {

                        var finSemaine = moment(copieMoment).add(i, 'days');
                        var finMonth = finSemaine.format('MM');
                        weekMonth.push(finMonth);
                        var finYear = finSemaine.format('YYYY');
                        weekYear.push(finYear);
                        finSemaine = finSemaine.format('DD');
                        week.push(finSemaine);
                    }
                    break;
                case 1:
                    for (var _i = 1; _i < 1; _i++) {
                        var debutSemaine = moment(copieMoment).subtract(_i, 'days');
                        var debutMonth = debutSemaine.format('MM');
                        weekMonth.unshift(debutMonth);
                        var debutYear = debutSemaine.format('YYYY');
                        weekYear.unshift(debutYear);
                        debutSemaine = debutSemaine.format('DD');
                        week.unshift(debutSemaine);
                    }
                    for (var _i2 = 0; _i2 < 7; _i2++) {
                        var _finSemaine = moment(copieMoment).add(_i2, 'days');
                        var _finMonth = _finSemaine.format('MM');
                        weekMonth.push(_finMonth);
                        var _finYear = _finSemaine.format('YYYY');
                        weekYear.push(_finYear);
                        _finSemaine = _finSemaine.format('DD');
                        week.push(_finSemaine);
                    }
                    break;
                case 2:
                    for (var _i3 = 1; _i3 < 2; _i3++) {
                        var _debutSemaine = moment(copieMoment).subtract(_i3, 'days');
                        var _debutMonth = _debutSemaine.format('MM');
                        weekMonth.unshift(_debutMonth);
                        var _debutYear = _debutSemaine.format('YYYY');
                        weekYear.unshift(_debutYear);
                        _debutSemaine = _debutSemaine.format('DD');
                        week.unshift(_debutSemaine);
                    }
                    for (var _i4 = 0; _i4 < 6; _i4++) {
                        var _finSemaine2 = moment(copieMoment).add(_i4, 'days');
                        var _finMonth2 = _finSemaine2.format('MM');
                        weekMonth.push(_finMonth2);
                        var _finYear2 = _finSemaine2.format('YYYY');
                        weekYear.push(_finYear2);
                        _finSemaine2 = _finSemaine2.format('DD');
                        week.push(_finSemaine2);
                    }
                    break;
                case 3:
                    for (var _i5 = 1; _i5 < 3; _i5++) {
                        var _debutSemaine2 = moment(copieMoment).subtract(_i5, 'days');
                        var _debutMonth2 = _debutSemaine2.format('MM');
                        weekMonth.unshift(_debutMonth2);
                        var _debutYear2 = _debutSemaine2.format('YYYY');
                        weekYear.unshift(_debutYear2);
                        _debutSemaine2 = _debutSemaine2.format('DD');
                        week.unshift(_debutSemaine2);
                    }
                    for (var _i6 = 0; _i6 < 5; _i6++) {
                        var _finSemaine3 = moment(copieMoment).add(_i6, 'days');
                        var _finMonth3 = _finSemaine3.format('MM');
                        weekMonth.push(_finMonth3);
                        var _finYear3 = _finSemaine3.format('YYYY');
                        weekYear.push(_finYear3);
                        _finSemaine3 = _finSemaine3.format('DD');
                        week.push(_finSemaine3);
                    }
                    break;
                case 4:
                    for (var _i7 = 1; _i7 < 4; _i7++) {
                        var _debutSemaine3 = moment(copieMoment).subtract(_i7, 'days');
                        var _debutMonth3 = _debutSemaine3.format('MM');
                        weekMonth.unshift(_debutMonth3);
                        var _debutYear3 = _debutSemaine3.format('YYYY');
                        weekYear.unshift(_debutYear3);
                        _debutSemaine3 = _debutSemaine3.format('DD');
                        week.unshift(_debutSemaine3);
                    }
                    for (var _i8 = 0; _i8 < 4; _i8++) {
                        var _finSemaine4 = moment(copieMoment).add(_i8, 'days');
                        var _finMonth4 = _finSemaine4.format('MM');
                        weekMonth.push(_finMonth4);
                        var _finYear4 = _finSemaine4.format('YYYY');
                        weekYear.push(_finYear4);
                        _finSemaine4 = _finSemaine4.format('DD');
                        week.push(_finSemaine4);
                    }
                    break;
                case 5:
                    for (var _i9 = 1; _i9 < 5; _i9++) {
                        var _debutSemaine4 = moment(copieMoment).subtract(_i9, 'days');
                        var _debutMonth4 = _debutSemaine4.format('MM');
                        weekMonth.unshift(_debutMonth4);
                        var _debutYear4 = _debutSemaine4.format('YYYY');
                        weekYear.unshift(_debutYear4);
                        _debutSemaine4 = _debutSemaine4.format("DD");
                        week.unshift(_debutSemaine4);
                    }
                    for (var _i10 = 0; _i10 < 3; _i10++) {
                        var _finSemaine5 = moment(copieMoment).add(_i10, 'days');
                        var _finMonth5 = _finSemaine5.format('MM');
                        weekMonth.push(_finMonth5);
                        var _finYear5 = _finSemaine5.format('YYYY');
                        weekYear.push(_finYear5);
                        _finSemaine5 = _finSemaine5.format('DD');
                        week.push(_finSemaine5);
                    }
                    break;
                case 6:
                    for (var _i11 = 1; _i11 < 6; _i11++) {
                        var _debutSemaine5 = moment(copieMoment).subtract(_i11, 'days');
                        var _debutMonth5 = _debutSemaine5.format('MM');
                        weekMonth.unshift(_debutMonth5);
                        var _debutYear5 = _debutSemaine5.format('YYYY');
                        weekYear.unshift(_debutYear5);
                        _debutSemaine5 = _debutSemaine5.format('DD');
                        week.unshift(_debutSemaine5);
                    }
                    for (var _i12 = 0; _i12 < 2; _i12++) {
                        var _finSemaine6 = moment(copieMoment).add(_i12, 'days');
                        var _finMonth6 = _finSemaine6.format('MM');
                        weekMonth.push(_finMonth6);
                        var _finYear6 = _finSemaine6.format('YYYY');
                        weekYear.push(_finYear6);
                        _finSemaine6 = _finSemaine6.format('DD');
                        week.push(_finSemaine6);
                    }
                    break;
                case 7:
                    for (var _i13 = 1; _i13 < 7; _i13++) {
                        var _debutSemaine6 = moment(copieMoment).subtract(_i13, 'days');
                        var _debutMonth6 = _debutSemaine6.format('MM');
                        weekMonth.unshift(_debutMonth6);
                        var _debutYear6 = _debutSemaine6.format('YYYY');
                        weekYear.unshift(_debutYear6);
                        _debutSemaine6 = _debutSemaine6.format('DD');
                        week.unshift(_debutSemaine6);
                    }
                    break;
                default:
                    alert('Oups, il ya un pb avec le switch ligne 240');
            }
            var currentWeek = week.map(function (day) {
                return React.createElement(
                    "td",
                    { key: day * 15.68, className: "daysNb" },
                    day
                );
            });
            var currentMonth = weekMonth.map(function (month) {
                return React.createElement(
                    "td",
                    { className: "hidden" },
                    month
                );
            });
            var currentYear = weekYear.map(function (year) {
                return React.createElement(
                    "td",
                    { className: "hidden" },
                    year
                );
            });

            return React.createElement(
                "div",
                { className: "calendarContainer" },
                React.createElement(
                    "div",
                    { className: "weekNav leftWeekNav " },
                    React.createElement(
                        "button",
                        { onClick: function onClick(e) {
                                _this2.prevWeek();
                            }, id: "leftNavBtn", className: "weekNavBtn" },
                        " \u27E8 "
                    )
                ),
                React.createElement(
                    "main",
                    { className: "calendar" },
                    React.createElement(
                        "section",
                        { className: "calendarHeader" },
                        React.createElement(
                            "div",
                            { className: "monthDisplay" },
                            this.month().toUpperCase() + " " + this.year()
                        ),
                        React.createElement(
                            "div",
                            { className: "monthNav" },
                            React.createElement(
                                "p",
                                { onClick: function onClick(e) {
                                        _this2.prevMonth();
                                    }, className: "prev monthNavBtn" },
                                " \xA0\xA0< "
                            ),
                            React.createElement(
                                "p",
                                { onClick: function onClick(e) {
                                        _this2.nextMonth();
                                    }, className: "next monthNavBtn" },
                                " \xA0> "
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "weekDisplay" },
                        React.createElement(
                            "table",
                            { className: "daysOfWeek" },
                            React.createElement(
                                "thead",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    weekDays
                                )
                            ),
                            React.createElement(
                                "tbody",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    currentYear
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    currentWeek
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    currentMonth
                                ),
                                React.createElement(DailyEvents, { datas: this.state.dailyEvents, currentWeek: currentWeek, dateContext: this.state.dateContext, currentMonth: currentMonth, currentYear: weekYear })
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "weekNav rightWeekNav" },
                    React.createElement(
                        "button",
                        { onClick: function onClick(e) {
                                _this2.nextWeek();
                            }, id: "rightNavBtn", className: "weekNavBtn" },
                        " \u27E9 "
                    )
                )
            );
        }
    }]);

    return WeeklyEventsDisplay;
}(React.Component);

var DailyEvents = function (_React$Component2) {
    _inherits(DailyEvents, _React$Component2);

    function DailyEvents() {
        _classCallCheck(this, DailyEvents);

        return _possibleConstructorReturn(this, (DailyEvents.__proto__ || Object.getPrototypeOf(DailyEvents)).apply(this, arguments));
    }

    _createClass(DailyEvents, [{
        key: "render",
        value: function render() {
            var events = this.props.datas;
            var currentWeek = this.props.currentWeek;
            console.log("currentWeek", currentWeek);
            var currentMonth = this.props.currentMonth;
            var currentYear = this.props.currentYear;

            var year1 = currentYear[0];
            var month1 = [currentMonth[0].props.children];
            var jour1 = [currentWeek[0].props.children];

            events.forEach(function (event) {
                if (event.eventDate === event.eventEnd && event.eventDate === year1 + "-" + month1 + "-" + jour1[0]) {
                    jour1.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                } else if (event.eventDate != event.eventEnd) {
                    if (moment(event.eventDate).isSameOrBefore(year1 + "-" + month1 + "-" + jour1[0]) && moment(year1 + "-" + month1 + "-" + jour1[0]).isBefore(event.eventEnd)) {
                        switch (event.eventRec) {
                            case 'Tous les jours':
                                jour1.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Tous les jours hors Week-end':
                                jour1.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Une fois par semaine':
                                if (moment(event.eventDate).format('ddd') === 'lun') {
                                    jour1.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                }
                                break;
                        }
                    }
                }
            });
            jour1.shift();
            jour1.sort();
            var jour1Display = jour1.map(function (evt) {
                return React.createElement(
                    "li",
                    { key: evt },
                    " ",
                    React.createElement(
                        "span",
                        { className: "hourSpan" },
                        evt.slice(0, 6)
                    ),
                    evt.slice(7),
                    " "
                );
            });
            var year2 = currentYear[1];
            var month2 = [currentMonth[1].props.children];
            var jour2 = [currentWeek[1].props.children];
            events.forEach(function (event) {
                if (event.eventDate === event.eventEnd && event.eventDate === year2 + "-" + month2 + "-" + jour2[0]) {
                    jour2.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                } else if (event.eventDate != event.eventEnd) {
                    if (moment(event.eventDate).isSameOrBefore(year2 + "-" + month2 + "-" + jour2[0]) && moment(year2 + "-" + month2 + "-" + jour2[0]).isBefore(event.eventEnd)) {
                        switch (event.eventRec) {
                            case 'Tous les jours':
                                jour2.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Tous les jours hors Week-end':
                                jour2.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Une fois par semaine':
                                if (moment(event.eventDate).format('ddd') === 'mar') {
                                    jour2.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                }
                                break;
                        }
                    }
                }
            });
            jour2.shift();
            jour2.sort();
            var jour2Display = jour2.map(function (evt) {
                return React.createElement(
                    "li",
                    { key: evt },
                    " ",
                    React.createElement(
                        "span",
                        { className: "hourSpan" },
                        evt.slice(0, 6)
                    ),
                    evt.slice(7),
                    " "
                );
            });
            var year3 = currentYear[2];
            var month3 = [currentMonth[2].props.children];
            var jour3 = [currentWeek[2].props.children];
            events.forEach(function (event) {
                if (event.eventDate === event.eventEnd && event.eventDate === year3 + "-" + month3 + "-" + jour3[0]) {
                    jour3.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                } else if (event.eventDate != event.eventEnd) {
                    if (moment(event.eventDate).isSameOrBefore(year3 + "-" + month3 + "-" + jour3[0]) && moment(year3 + "-" + month3 + "-" + jour3[0]).isBefore(event.eventEnd)) {
                        switch (event.eventRec) {
                            case 'Tous les jours':
                                jour3.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Tous les jours hors Week-end':
                                jour3.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Une fois par semaine':
                                if (moment(event.eventDate).format('ddd') === 'mer') {
                                    jour3.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                }
                                break;
                        }
                    }
                }
            });
            jour3.shift();
            jour3.sort();
            var jour3Display = jour3.map(function (evt) {
                return React.createElement(
                    "li",
                    { key: evt },
                    " ",
                    React.createElement(
                        "span",
                        { className: "hourSpan" },
                        evt.slice(0, 6)
                    ),
                    evt.slice(7),
                    " "
                );
            });
            var year4 = currentYear[3];
            var month4 = [currentMonth[3].props.children];
            var jour4 = [currentWeek[3].props.children];
            events.forEach(function (event) {
                if (event.eventDate === event.eventEnd && event.eventDate === year4 + "-" + month4 + "-" + jour4[0]) {
                    jour4.push(event.eventTime.replace(":", "h") + "  " + event.eventName);
                } else if (event.eventDate != event.eventEnd) {
                    if (moment(event.eventDate).isSameOrBefore(year4 + "-" + month4 + "-" + jour4[0]) && moment(year4 + "-" + month4 + "-" + jour4[0]).isBefore(event.eventEnd)) {
                        switch (event.eventRec) {
                            case 'Tous les jours':
                                jour4.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Tous les jours hors Week-end':
                                jour4.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Une fois par semaine':
                                if (moment(event.eventDate).format('ddd') === 'jeu') {
                                    jour4.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                }
                                break;
                        }
                    }
                }
            });
            jour4.shift();
            jour4.sort();
            var jour4Display = jour4.map(function (evt) {
                return React.createElement(
                    "li",
                    { key: evt },
                    " ",
                    React.createElement(
                        "span",
                        { className: "hourSpan" },
                        evt.slice(0, 6)
                    ),
                    evt.slice(7),
                    " "
                );
            });
            var year5 = currentYear[4];
            var month5 = [currentMonth[4].props.children];
            var jour5 = [currentWeek[4].props.children];
            events.forEach(function (event) {
                if (event.eventDate === event.eventEnd && event.eventDate === year5 + "-" + month5 + "-" + jour5[0]) {
                    jour5.push(event.eventTime.replace(":", "h") + "  " + event.eventName);
                } else if (event.eventDate != event.eventEnd) {
                    if (moment(event.eventDate).isSameOrBefore(year5 + "-" + month5 + "-" + jour5[0]) && moment(year5 + "-" + month5 + "-" + jour5[0]).isBefore(event.eventEnd)) {
                        switch (event.eventRec) {
                            case 'Tous les jours':
                                jour5.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Tous les jours hors Week-end':
                                jour5.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Une fois par semaine':
                                if (moment(event.eventDate).format('ddd') === 'ven') {
                                    jour5.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                }
                                break;
                        }
                    }
                }
            });
            jour5.shift();
            jour5.sort();
            var jour5Display = jour5.map(function (evt) {
                return React.createElement(
                    "li",
                    { key: evt },
                    " ",
                    React.createElement(
                        "span",
                        { className: "hourSpan" },
                        evt.slice(0, 6)
                    ),
                    evt.slice(7),
                    " "
                );
            });
            var year6 = currentYear[5];
            var month6 = [currentMonth[5].props.children];
            var jour6 = [currentWeek[5].props.children];
            events.forEach(function (event) {
                if (event.eventDate === event.eventEnd && event.eventDate === year6 + "-" + month6 + "-" + jour6[0]) {
                    jour6.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                } else if (event.eventDate != event.eventEnd) {
                    if (moment(event.eventDate).isSameOrBefore(year6 + "-" + month6 + "-" + jour6[0]) && moment(year6 + "-" + month6 + "-" + jour6[0]).isBefore(event.eventEnd)) {
                        switch (event.eventRec) {
                            case 'Tous les jours':
                                jour6.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Uniquement les week-end':
                                jour6.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Une fois par semaine':
                                if (moment(event.eventDate).format('ddd') === 'sam') {
                                    jour6.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                }
                                break;
                        }
                    }
                }
            });
            jour6.shift();
            jour6.sort();
            var jour6Display = jour6.map(function (evt) {
                return React.createElement(
                    "li",
                    { key: evt },
                    " ",
                    React.createElement(
                        "span",
                        { className: "hourSpan" },
                        evt.slice(0, 6)
                    ),
                    evt.slice(7),
                    " "
                );
            });
            var year7 = currentYear[6];
            var month7 = [currentMonth[6].props.children];
            var jour7 = [currentWeek[6].props.children];
            events.forEach(function (event) {
                if (event.eventDate === event.eventEnd && event.eventDate === year7 + "-" + month7 + "-" + jour7[0]) {
                    jour7.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                } else if (event.eventDate != event.eventEnd) {
                    if (moment(event.eventDate).isSameOrBefore(year7 + "-" + month7 + "-" + jour7[0]) && moment(year7 + "-" + month7 + "-" + jour7[0]).isBefore(event.eventEnd)) {
                        switch (event.eventRec) {
                            case 'Tous les jours':
                                jour7.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Uniquement les week-end':
                                jour7.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                break;
                            case 'Une fois par semaine':
                                if (moment(event.eventDate).format('ddd') === 'dim') {
                                    jour7.push(event.eventTime.replace(':', 'h') + "  " + event.eventName);
                                }
                                break;
                        }
                    }
                }
            });
            jour7.shift();
            jour7.sort();
            var jour7Display = jour7.map(function (evt) {
                return React.createElement(
                    "li",
                    { key: evt },
                    " ",
                    React.createElement(
                        "span",
                        { className: "hourSpan" },
                        evt.slice(0, 6)
                    ),
                    evt.slice(7),
                    " "
                );
            });
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    jour1Display
                ),
                React.createElement(
                    "td",
                    null,
                    jour2Display
                ),
                React.createElement(
                    "td",
                    null,
                    jour3Display
                ),
                React.createElement(
                    "td",
                    null,
                    jour4Display
                ),
                React.createElement(
                    "td",
                    null,
                    jour5Display
                ),
                React.createElement(
                    "td",
                    null,
                    jour6Display
                ),
                React.createElement(
                    "td",
                    null,
                    jour7Display
                )
            );
        }
    }]);

    return DailyEvents;
}(React.Component);

jQuery(document).ready(function () {
    var domContainer = document.getElementsByClassName('events-calendar-root');
    [].forEach.call(domContainer, function (element) {
        var datas = JSON.parse(jQuery(element).attr('datas'));
        ReactDOM.render(React.createElement(WeeklyEventsDisplay, { "datas": datas }), element);
    });
});