class Trivia extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ContaPregunta: 0,
			rptaSeleccionada: [],
			correctas: 0,
			trivial: props.preguntas
		};
	}
	Alternativas(alternativas) {
		return alternativas.map((value, index) => {
			return (
				<div className="btnRespuestas">
					<button className='btn btn-lg' key={index} onClick={(e) => this.SiguienteFormulario(e)}>{value}</button>
				</div>
			);
		})
	}
	SiguienteFormulario(e) {
		this.setState({
			rptaSeleccionada: this.state.rptaSeleccionada.concat([e.target.textContent]),
			ContaPregunta: this.state.ContaPregunta + 1
		})
		if (this.state.trivial[this.state.ContaPregunta].respuestaCorrecta == e.target.textContent) {
			this.setState({
				correctas: this.state.correctas + 1
			})
		}
	}
	MuestraRespuestas() {
		return (
			<div>
				<div className="respuestasEchas">
					{
						this.state.rptaSeleccionada.map((e, i) => {
							if (e == this.state.trivial[i].respuestaCorrecta) {
								return <p className="correcto">{i + 1}. {this.state.trivial[i].preguntas}<strong>{e}</strong></p>
							} else {
								return <p className="incorrecto">{i + 1}. {this.state.trivial[i].preguntas}<strong><strike>{e}</strike> {this.state.trivial[i].respuestaCorrecta}</strong></p>
							}
						})
					}
				</div>
				<div className="btnSubmit">
					<button className="btn btn-sm" onClick={() => this.Reiniciar()}>Submit</button>
				</div>
			</div>
		)
	}
	Reiniciar() {
		this.setState({
			ContaPregunta: 0,
			rptaSeleccionada: [],
			correctas: 0,
		});
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-md-12 Preguntas">
						<div >
							{this.state.ContaPregunta !== this.state.trivial.length && <img src={this.state.trivial[this.state.ContaPregunta].imagen} />}
							{this.state.ContaPregunta === this.state.trivial.length && <img src="img/camion.jpg" />}
						</div>
						<div className="progress">
							<div className="progress-bar" role="progressbar" aria-ValueNow="70" aria-ValueMin="0" aria-ValueMax="100" style={{ width: this.state.rptaSeleccionada.length * 20 + '%', height: '20px' }}>
							</div>
						</div>
						<div className="cajaPregunta">
							<div>
								{this.state.ContaPregunta !== this.state.trivial.length && <h3>{this.state.trivial[this.state.ContaPregunta].preguntas}</h3>}
								{this.state.ContaPregunta === this.state.trivial.length && <h3>{this.state.correctas} out of {this.state.trivial.length} correct</h3>}
							</div>
							<div className="btnRespuestas">
								<div>
									{this.state.ContaPregunta !== this.state.trivial.length && this.Alternativas(this.state.trivial[this.state.ContaPregunta].alternativas)}
									{this.state.ContaPregunta === this.state.trivial.length && this.MuestraRespuestas()}
								</div>
							</div>
							<div className="redes">
								<span className="social social-facebook"></span>
								<span className="social social-linked-in"></span>
								<span className="social social-twitter"></span>
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
