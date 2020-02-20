/**
 * BLOCK: weekly-events-display
**/

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element;

registerBlockType( 'cgb/block-events-slider', {
	title: __( 'CCN-Events-Slider' ),
	icon: 'calendar', 
	category: 'common',
	attributes: {
		dailyEvents:{
			type:'string',
			source: 'attribute',
			selector: '.events-calendar-root',
			attribute: 'datas',
		},
	},
	keywords: [
		__( 'events-slider — CGB Block' ),
		__( 'calendar' ),
	],
	edit:  class EventsForm extends Component {
		constructor(props){
			super(...props);
			if ((props.attributes.dailyEvents) && typeof(props.attributes.dailyEvents)==='string') {
				this.state.dailyEvents = JSON.parse(props.attributes.dailyEvents);
				this.state.dailyEvents.sort((a,b) => (a.eventDate+a.eventTime > b.eventDate+b.eventTime) ? 1 : -1);
			}
		}
		state={
			dateContext: moment(),
			today: moment(),
			dailyEvents: [],
			visibility: 'hidden',
			btnSuppr: {visibility:'visible'},
			btnModify:{visibility:'visible'},
			btnAjouter:{visibility:'visible'},
		};		
		//méthode pour la supression d'un événement
		handleDelete = (eventId) => {
    		//On commence par faire une copie de notre tableau des évènements
			const copieDailyEvents = this.state.dailyEvents.slice();
			//On cherche cherche l'index qui correspond au client sur lequel on a cliqué
			const index = copieDailyEvents.findIndex(dailyEvent => dailyEvent.eventId === eventId);
			// On modifie la copie de notre tableau en supprimant l'événement grâce à son index
			copieDailyEvents.splice(index, 1);
			// On remplace le tableau du state par notre nouveau tableau
			this.setState({dailyEvents: copieDailyEvents});
			this.props.setAttributes({dailyEvents: copieDailyEvents});
		}
		//méthode pour la soumission du formulaire
		handleSubmit = (event) => {
			event.preventDefault();
			//Pour générer un id unique sur un élément, on peut utiliser les dates.
			const eventId = new Date().getTime();
			const eventName = event.currentTarget.eventName.value.toUpperCase();
			const eventDate = event.currentTarget.eventDate.value;
			let eventRec = event.currentTarget.recurrence.value;
			const eventTime = event.currentTarget.eventTime.value;
			const eventEnd = event.currentTarget.eventEndDate.value;
			if (eventName.length <= 1){
				alert("merci de donner un nom à votre activité");
				return;
			} else if (eventDate === "") {
				alert("merci de sélectionner la date de votre activité");
				return;
			} else if (eventTime === "") {
				alert("merci de sélectionner l'heure de votre activité");
				return;

			} else if ((eventRec != "aucune") && (eventEnd === "")) {
				alert("Pour les événements récurrents, merci de sélectionner la date de fin de l'activité");
				return;
			} else {
				const newEvent = {};
				newEvent.eventId = eventId;
				newEvent.eventName = eventName;
				newEvent.eventDate = eventDate;

				if (eventRec === "aucune"){
					newEvent.eventEnd = eventDate;
				} else if (eventRec!="aucune"){
					newEvent.eventEnd= eventEnd;
				}
				newEvent.eventTime = eventTime;
				newEvent.eventRec = eventRec;
				//Je fais une copie de mon tableau dailyEvents
				let copieDailyEvents = this.state.dailyEvents.slice();
				// Je rajoute le nouvel événement dans la copie du tableau dailyEvents
				copieDailyEvents.push(newEvent);
				//Je crée une fonction pour trier mon tableau par date
				copieDailyEvents.sort((a,b) => (a.eventDate+a.eventTime > b.eventDate+b.eventTime) ? 1 : -1);
				// Je met à jour le state avec le tableau d'événements triés par date
				this.setState({dailyEvents: copieDailyEvents});
				this.props.setAttributes({dailyEvents: copieDailyEvents});
			} 
		};
		//Méthode pour modifier un événement
		handleModify =(eventId) =>{
			//On commence par faire une copie de notre tableau des évènements
			const copieDailyEvents = this.state.dailyEvents.slice();
			//On cherche cherche l'index qui correspond au client sur lequel on a cliqué
			const index = copieDailyEvents.findIndex(dailyEvent => dailyEvent.eventId === eventId);
			//Je récupère l'événement qui correspond à l'index
			const eventWithId =  copieDailyEvents[index];

			let parent = event.srcElement.parentNode;
			let hide ={visibility:'hidden'};
			let show = {visibility:'visible'};
			this.setState({btnSuppr: hide, btnModify: hide, btnAjouter:hide});

			if (eventWithId.eventDate != eventWithId.eventEnd){
				parent.childNodes[0].innerHTML = '<select name="recurrence" id="modifiedRecurrence"><option value="TLJ">Tous les jours</option><option value="TLJHWE">Tous les jours Hors Week-end</option><option value="WE"> Uniquement les Week-end </option><option value="hebdo">Hebdomadaire (1X par semaine)</option></select>'
				let recInput = parent.childNodes[0].childNodes[0];
				recInput.style.width = "auto";
				recInput.style.fontWeight= 'normal';

				let optionInput = recInput.childNodes;
				optionInput.forEach(function(option){
					if ((option.value === "TLJ")&&(eventWithId.eventRec === "Tous les jours")){
						option.setAttribute("selected", "selected");
					}else if((option.value === "TLJHWE")&&(eventWithId.eventRec === "Tous les jours hors Week-end") ){
						option.setAttribute("selected", "selected");
					}else if((option.value === "WE")&&(eventWithId.eventRec === "Uniquement les week-end")){
						option.setAttribute("selected", "selected");
					}else if((option.value === "hebdo")&&(eventWithId.eventRec === "Une fois par semaine") ){
						option.setAttribute("selected", "selected");
					}
				});
				
				parent.childNodes[2].innerHTML = '<input type="date" id="modifiedEventDate"  />';
				let dateInput = parent.childNodes[2].childNodes[0];
				dateInput.value = eventWithId.eventDate;
				dateInput.style.width = 'auto';
				dateInput.style.fontWeight = 'normal';

				parent.childNodes[4].innerHTML ='<input type="date" id="modifiedEndDate"></input>';
				let endInput = parent.childNodes[4].childNodes[0];
				endInput.value= eventWithId.eventEnd;
				endInput.style.width = 'auto';
				endInput.style.fontWeight = 'normal';

				parent.childNodes[6].innerHTML ='<input type="time" id="modifiedEventTime"></input>';
				let timeInput = parent.childNodes[6].childNodes[0];
				timeInput.value = eventWithId.eventTime;
				timeInput.style.width = 'auto';
				timeInput.style.fontWeight = 'normal';

				parent.childNodes[8].innerHTML = '<input type="text" id="modifiedEventName"/>';
				let nameInput = parent.childNodes[8].childNodes[0];
				nameInput.value = eventWithId.eventName;
				nameInput.style.width = 'auto';
				nameInput.style.fontWeight = 'normal';

				let button = document.createElement('button');
				parent.append(button);
				let btnInput = parent.childNodes[12];
				btnInput.className="btnValider";
				btnInput.innerText="Valider";

				btnInput.onclick = () => { 
					const replacementEvent = {};
					replacementEvent.eventId = eventWithId.eventId;
					replacementEvent.eventName = nameInput.value.toUpperCase();
					replacementEvent.eventDate = dateInput.value;
					replacementEvent.eventTime = timeInput.value;
					replacementEvent.eventEnd = endInput.value;
					replacementEvent.eventRec = recInput.value;
					switch(replacementEvent.eventRec){
						case 'TLJ':
							replacementEvent.eventRec = 'Tous les jours';
							break;
						case 'TLJHWE':
							replacementEvent.eventRec= 'Tous les jours hors Week-end';
							break;
						case 'WE':
							replacementEvent.eventRec = 'Uniquement les week-end';
						case 'hebdo':
							replacementEvent.eventrec = 'Une fois par semaine';
							break;
					}
					copieDailyEvents.splice(index, 1,replacementEvent);
					parent.childNodes[0].innerHTML = replacementEvent.eventRec;
					parent.childNodes[2].innerHTML = replacementEvent.eventDate.split("-").reverse().join("-");
					parent.childNodes[4].innerHTML = replacementEvent.eventEnd.split("-").reverse().join("-");
					parent.childNodes[6].innerHTML = replacementEvent.eventTime;
					parent.childNodes[8].innerHTML = replacementEvent.eventName;
					parent.removeChild(parent.childNodes[12]);
					copieDailyEvents.sort((a,b) => (a.eventDate+a.eventTime > b.eventDate+b.eventTime) ? 1 : -1);
					this.setState({dailyEvents: copieDailyEvents, btnSuppr:show, btnModify:show, btnAjouter:show});
					this.props.setAttributes({dailyEvents: copieDailyEvents});
				}
			}else if(eventWithId.eventDate === eventWithId.eventEnd){
				parent.childNodes[1].innerHTML = '<input type="date" id="modifiedEventDate"  />';
				let dateInput = parent.childNodes[1].childNodes[0];
				dateInput.value = eventWithId.eventDate;
				dateInput.style.width = 'auto';
				dateInput.style.fontWeight = 'normal';

				parent.childNodes[3].innerHTML ='<input type="time" id="modifiedEventTime"></input>';
				let timeInput = parent.childNodes[3].childNodes[0];
				timeInput.value = eventWithId.eventTime;
				timeInput.style.width = 'auto';
				timeInput.style.fontWeight = 'normal';

				parent.childNodes[5].innerHTML = '<input type="text" id="modifiedEventName"/>';
				let nameInput = parent.childNodes[5].childNodes[0];
				nameInput.value =  eventWithId.eventName;
				nameInput.style.width = 'auto';
				nameInput.style.fontWeight = 'normal';

				let button = document.createElement('button');
				parent.append(button);
				let btnInput = parent.childNodes[9];
				btnInput.className="btnValider";
				btnInput.innerText="Valider";
				btnInput.onclick = () => { 
					const replacementEvent = {};
					replacementEvent.eventId = eventWithId.eventId;
					replacementEvent.eventName = nameInput.value.toUpperCase();
					replacementEvent.eventDate = dateInput.value;
					replacementEvent.eventTime = timeInput.value;
					replacementEvent.eventEnd = replacementEvent.eventDate;
					replacementEvent.eventRec = eventWithId.eventRec;
					copieDailyEvents.splice(index, 1,replacementEvent);
					parent.childNodes[1].innerHTML = replacementEvent.eventDate.split("-").reverse().join("-");
					parent.childNodes[3].innerHTML = replacementEvent.eventTime;
					parent.childNodes[5].innerHTML = replacementEvent.eventName;
					parent.removeChild(parent.childNodes[9]);
					copieDailyEvents.sort((a,b) => (a.eventDate+a.eventTime > b.eventDate+b.eventTime) ? 1 : -1);
					this.setState({dailyEvents: copieDailyEvents, btnSuppr:show, btnModify:show, btnAjouter:show});
					this.props.setAttributes({dailyEvents: copieDailyEvents});
				};
			}
		}
		//méthode pour ajouter une date de fin dans le formulaire
		handleChange = () =>{
			const eventEndDateDisplay = event.target.value;
			if (eventEndDateDisplay === 'aucune'){
				this.setState({visibility:'hidden'});	
			} else {
				this.setState({visibility:'visible'});
			}
		}
		//méthode pour afficher tous les événements uniques
		displayUniqueEvents = () => {
			let dailyEvents = this.state.dailyEvents.slice();
			if (dailyEvents.length>0){
				let copieDailyEvents= dailyEvents.slice();
				//Je supprime tous les événements uniques trop anciens dont la date est dépassée
				for (var i=0; i<copieDailyEvents.length; i++){
					if(copieDailyEvents[i].eventRec === 'aucune'){	
						let eventDate = copieDailyEvents[i].eventDate;
						let lastWeek = moment().subtract(7,'days').format("YYYY-MM-DD");
						if(moment(eventDate).isBefore(lastWeek)){
							copieDailyEvents.splice(i, 1);
							dailyEvents= copieDailyEvents;
							this.setState({dailyEvents: dailyEvents});
							this.props.setAttributes({dailyEvents: dailyEvents});
						}
					} 
				}
				//j'affiche tous les événements uniques
				let newCopieDailyEvents = this.state.dailyEvents.slice();
				let uniqueDailyEvents = [];
				for (let i=0; i<newCopieDailyEvents.length; i++){
					if(newCopieDailyEvents[i].eventRec=== "aucune"){
						uniqueDailyEvents.push(newCopieDailyEvents[i]);
					}
				}
				
				if (uniqueDailyEvents.length <= 0) {
					return <li>Il n' y a aucun événement unique pour les mois à venir dans la base de données</li>
				}else{
					return(
						uniqueDailyEvents.map(dailyEvent => (
							<li className="myEvents">
								{"Le "}
								<span className="spanBold">
								{dailyEvent.eventDate.split("-").reverse().join("-")}
								</span>
								{" à "}
								<span className="spanBold">
								{dailyEvent.eventTime.replace(":",'H')}
								</span>
								{" : "}
								<span className="spanBold">
								{dailyEvent.eventName}
								</span>
								{" "}
								<button className="btnSuppr"  style={this.state.btnSuppr} onClick={() => { if (window.confirm('Veuillez confirmer la supression de cet événement?'))this.handleDelete(dailyEvent.eventId)}}> Supprimer </button>
								<button className="btnModify" style={this.state.btnModify} onClick={() => this.handleModify(dailyEvent.eventId)}> Modifier </button>	
							</li>
						))
					)
				}
			} else if(dailyEvents.length<=0){
				return <li>Il n' y a aucun événement unique pour les mois à venir dans la base de données</li>
			}
		}
		//Méthode pour afficher tous les événements récurrents
		displayRecEvents = () => {
			let dailyEvents = this.state.dailyEvents.slice();
			if (dailyEvents.length>0){
				let newCopieDailyEvents = this.state.dailyEvents.slice();
				let recDailyEvents = [];
				for (let i=0; i<newCopieDailyEvents.length; i++){
					if((newCopieDailyEvents[i].eventRec === 'TLJ') || (newCopieDailyEvents[i].eventRec ==='Tous les jours')){
						newCopieDailyEvents[i].eventRec = 'Tous les jours';
						recDailyEvents.push(newCopieDailyEvents[i]);
					}else if((newCopieDailyEvents[i].eventRec === 'TLJHWE') || (newCopieDailyEvents[i].eventRec ==='Tous les jours hors Week-end')){
						newCopieDailyEvents[i].eventRec = 'Tous les jours hors Week-end';
						recDailyEvents.push(newCopieDailyEvents[i]);
					}else if((newCopieDailyEvents[i].eventRec === 'WE') || (newCopieDailyEvents[i].eventRec ==='Uniquement les week-end')){
						newCopieDailyEvents[i].eventRec = 'Uniquement les week-end';
						recDailyEvents.push(newCopieDailyEvents[i]);
					} else if ((newCopieDailyEvents[i].eventRec === 'hebdo') || (newCopieDailyEvents[i].eventRec ==='Une fois par semaine')){
						newCopieDailyEvents[i].eventRec = 'Une fois par semaine';
						recDailyEvents.push(newCopieDailyEvents[i]);
					} 
				}
				if (recDailyEvents.length <= 0){
					return <li>Il n' y a aucun événement récurrent pour les mois à venir dans la base de données</li>
				} else {
					return(
						recDailyEvents.map(recDailyEvent => (
							<li className="myRecEvents">
								<span className="spanBold">
								{recDailyEvent.eventRec}
								</span>
								{", du "}
								<span className="spanBold">
								{recDailyEvent.eventDate.split("-").reverse().join("-")}
								</span>
								{" au "}
								<span className="spanBold">
								{recDailyEvent.eventEnd.split("-").reverse().join("-")}
								</span>
								{" à "}
								<span className="spanBold">
								{recDailyEvent.eventTime.replace(":",'H')}
								</span>
								{" : "}
								<span className="spanBold">
								{recDailyEvent.eventName}
								</span>
								{" "}
								<button  className={"btnSuppr"+ " " +this.state.btnSuppr.visibility} onClick={() => { if (window.confirm('Veuillez confirmer la supression de cet événement?'))this.handleDelete(recDailyEvent.eventId)}}> Supprimer </button>
								<button  className={"btnModify"+" "+this.state.btnModify.visibility} onClick={() => this.handleModify(recDailyEvent.eventId)}> Modifier </button>
							</li>
						))
					)
				}
			} else if(dailyEvents.length<=0){
				return(
					<li>Il n' y a aucun événement récurrent pour les mois à venir dans la base de données</li>
				)
			}	
		}

		render() {
			const title = 'Liste des activités'
			return(
				<div className="rootDiv">
					<fieldset className="fieldListeEvents">
						<legend>
							<h5 className="titreListeEvents"> {title} </h5>
						</legend>
						<p>Evénements uniques</p>
						<ul className="listeEvents" id="listeEvents"> 
							{this.displayUniqueEvents()}
						</ul>
						<p>Evénements récurrents</p>
						<ul className="listeRecEvents" id="listeRecEvents">
							{this.displayRecEvents()}
						</ul>
					</fieldset>

					<form id="eventsForm" onSubmit={this.handleSubmit}>
						<fieldset className="fieldForm">
							<legend >Ajouter une activité : </legend>
							<div>
								<label for="eventName"> Nom de l'activité : </label>
								<input type="text" id="eventName" placeholder="Nom de l'activité" />
								<br></br>

								<label for="eventDate"> Sélectionnez la date de l'activité : </label>
								<input type="date" id="eventDate" min={this.state.today.format('YYYY-MM-DD')} />
								<br></br>

								<label for="eventTime"> Sélectionnez l'heure de l'activité : </label>
								<input type="time" id="eventTime"/>
								<br></br>
								
								<label for="recurrence">Récurrence de l'activité</label>
								<select name="recurrence" id="recurrence" onChange={()=>this.handleChange()}> 
									<option value="aucune">aucune (activité unique)</option>
									<option value="TLJ">Tous les jours</option>
									<option value="TLJHWE">Tous les jours Hors Week-end</option>
									<option value="WE"> Uniquement les Week-end </option>
									<option value="hebdo">Hebdomadaire (1X par semaine)</option>
								</select>
								<br></br>

								<label for="eventEndDate" className={this.state.visibility} >Sélectionnez la date de fin de l'activité :</label>
								<input type="date" id="eventEndDate" className={this.state.visibility} min={this.state.today.format('YYYY-MM-DD')}></input>

								<button className={"btnAjouter"+" "+this.state.btnAjouter.visibility}>Ajouter l'activité</button>
							</div>
						</fieldset>
					</form>
				</div>
			)
		}
	},

	save: ( props ) => { 
		let dailyEvents = props.attributes.dailyEvents;
		if (typeof(dailyEvents) !== "string" && typeof(dailyEvents) !== "undefined") {
			dailyEvents = JSON.stringify(props.attributes.dailyEvents);
		} else if (typeof(dailyEvents)=== 'undefined'){
			let data=[];
			dailyEvents = JSON.stringify(data);
		}
		return (
			<div>
				<div className="events-calendar-root"  id="events-calendar-root" datas={dailyEvents}> OUPS: l'application n'a pas chargée</div>
				
			</div>
		);
	},
});