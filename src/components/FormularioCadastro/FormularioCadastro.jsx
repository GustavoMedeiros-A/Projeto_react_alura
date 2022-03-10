import React, { Component } from "react";
import "./estilo_form.css";
class FormularioCadastro extends Component {
  

  constructor(props){
    super(props);
    this.titulo=""; 
    this.texto="";
    this.categoria = "Sem categoria";
  }


  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value; // Atribuição, pois ja foi declaração previamente
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value; 
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
    
  }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this._criarNota.bind(this)}>
        
        
        <select 
        onChange={this._handleMudancaCategoria.bind(this)}
        className="form-cadastro-input">
          <option>Sem categoria</option>

          {this.props.categorias.map((categoria) => {
            return <option>{categoria}</option> 
          })}   
        </select>

        
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} // Usando o bind - Associação
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;