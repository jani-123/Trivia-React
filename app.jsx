class Trivia extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ContaPregunta: 0,
			rptaSeleccionada: [],
			correctas: 0,
			trivial: props.preguntas,
			terminado: false
		};
	}
	Alternativas(alternativas) {
		return alternativas.map((value, index) => {
			return (
				<div>
					<button className='btn btn-lg' key={index} onClick={(e) => this.SiguienteFormulario(e)}>{value}</button>
				</div>
			);
		})
	}
	SiguienteFormulario(e) {
		this.setState({
			rptaSeleccionada: this.state.rptaSeleccionada.concat([e.target.textContent]),
			ContaPregunta: this.state.ContaPregunta + 1,
			terminado: true
		})
		if (this.state.trivial[this.state.ContaPregunta].respuestaCorrecta == e.target.textContent) {
			console.log("rptacorerer", this.state.trivial[this.state.ContaPregunta].respuestaCorrecta);
			this.setState({
				correctas: this.state.correctas + 1
			})
		}
		console.log(this.state.rptaSeleccionada);
		console.log(this.state.correctas);
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-md-12 Preguntas" id="Cuestionario1">
						<div>
							{this.state.ContaPregunta !== this.state.trivial.length && <img src={this.state.trivial[this.state.ContaPregunta].imagen} />}
							{this.state.ContaPregunta === this.state.trivial.length && <img src="img/camion.jpg" />}
						</div>
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-ValueNow="70" aria-ValueMin="0" aria-ValueMax="100">
								<span className="sr-only">25% Complete</span>
							</div>
						</div>
						<div className="cajaPregunta" id="cajadePreguntas">
							<div>
								{this.state.ContaPregunta !== this.state.trivial.length && <h3>{this.state.trivial[this.state.ContaPregunta].preguntas}</h3>}
								{this.state.ContaPregunta === this.state.trivial.length && <h3>Here</h3>}
							</div>
							<div id="botonesRespuestas" className="btnRespuestas">
								<div>
									{this.state.ContaPregunta !== this.state.trivial.length && this.Alternativas(this.state.trivial[this.state.ContaPregunta].alternativas)}
									{this.state.ContaPregunta === this.state.trivial.length && <h3>Here</h3>}
								</div>
							</div>
							<div className="redes">
								<i className="fa fa-twitter-square fa-2x" aria-Hidden="true"></i>
								<i className="fa fa-facebook-square fa-2x" aria-Hidden="true"></i>
								<i className="fa fa-linkedin-square fa-2x" aria-Hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const Cuestionario = [
	{
		preguntas: "Which is the oldest airline in the world?",
		alternativas: ['Avianca', 'KLM', 'Qantas'],
		imagen: "img/avion.jpg",
		respuestaCorrecta: 'KLM',
	},
	{
		preguntas: 'Which is the largest port in the world?',
		alternativas: ['Port of Shanghai', 'Port of Singapore', ' Port of Rotterdam'],
		imagen: "img/buque.png",
		respuestaCorrecta: 'Port of Shanghai',
	},
	{
		preguntas: 'What is the longest distance cycling backwards?',
		alternativas: ['89.30 km', '675.10 km', '337.60 km'],
		imagen: "img/bicicleta.png",
		respuestaCorrecta: '337.60 km',
	},
	{
		preguntas: 'What is the highest speed ever reached by a school bus?',
		alternativas: ['590 km/h', '320 km/h', '245 km/h'],
		imagen: "img/bus.png",
		respuestaCorrecta: '590 km/h',
	},
	{
		preguntas: 'What is the longest car trip on one tank of gas?',
		alternativas: ['2617 km', '3568 km', '1732 km'],
		imagen: "img/auto.png",
		respuestaCorrecta: '2617 km',
	},
];
ReactDOM.render(
	<Trivia preguntas={Cuestionario} />,
	document.getElementById("container")
);
