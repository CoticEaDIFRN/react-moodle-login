import React, {Component} from 'react';

class Proitec extends Component {
  render() {
    return (
      <div className="App" style={this.props.estado}>
        <div id="mainProitec">
          <form method="post" action="https://ead.ifrn.edu.br/ava/proitec2018/login/index.php" role="form">
              <div className="group">
                  <h2>PROITEC</h2>
              </div>
              <div className="group">
                  <input id="text" type="text" className="form-control" required type="text" name="username" onBlur={(event) => this.props.blurText(event)} /><span className="highlight"></span><span className="bar"></span>
                  <label>Matrícula</label>
              </div>
              <div className="group">
                  <input id="password" className="form-control" type="password" name="password" onBlur={(event) => this.props.blurPassword(event)} /><span className="highlight"></span><span className="bar"></span>
                  <label>Senha</label>
              </div>
              <div className="group">
                  <a href="https://suap.ifrn.edu.br/comum/solicitar_trocar_senha/">esqueci minha senha</a>
                  <br />
              </div>
              <button type="submit" className="button buttonGreen">ACESSAR O MOODLE
                  <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
              </button>
              <div id="instanciaMoodleResponsive">
                <hr width="80%" />
                <ul>
                    <li><a onClick={this.props.academicoBtn}>Acadêmico</a></li>
                    <li><a onClick={this.props.presencialBtn}>Presencial</a></li>
                </ul>
              </div>
          </form>
          <div id="instanciaMoodle">
              <p><img id="logo" src="https://ead.ifrn.edu.br/ava/proitec2018/theme/boost_proitec/pix/proitec-logo.png" alt="Logo IFRN EaD" /></p>
              <hr width="80%" />
              <ul>
                  <li><a onClick={this.props.academicoBtn}>Acadêmico</a></li>
                  <li><a onClick={this.props.presencialBtn}>Presencial</a></li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Proitec;