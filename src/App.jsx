import "./App.css";
import avatar from "./assets/images/doctor-avatar.svg";
import { Button } from "./components/button";
import { Calcular } from "./assets/functions/Calcular";

function App() {
  return (
    <>
      <div className="container">
        <section>
          <div className="row top">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h1 className="text-center fs-3">¿Qué es el IMC?</h1>
              <p className="text-center fs-3">
                El indice de masa muscular es un sistema que relaciona el peso
                con la altura para determinar si una persona tiene un peso
                saludable.
              </p>
              <div className="flex-col-center">
                <img className="avatar" src={avatar} alt="avatar" />
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <form id="form" className="form-control">
                <h2 className="text-center fs-3">Imcalculator</h2>
                <label className="my-2">Peso (Kilos)</label>
                <input
                  id="weight"
                  type="text"
                  className="form-control"
                  placeholder="Ej: 70"
                  autoFocus
                />
                <label className="my-2">Altura (Metros)</label>
                <input
                  id="hight"
                  type="text"
                  className="form-control"
                  placeholder="Ej: 1.70"
                />
                <div className="d-grid gap-2">
                  <Button function={Calcular} />
                </div>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 card">
              <div className="card-body">
                <h5 className="card-title fs-3">Resultado IMC</h5>
                <p className="card-text fs-5">Para los datos que ingresó.</p>
                <ul>
                  <li className="fs-5">
                    Peso : <span id="spanW" className="fs-5"></span>{" "}
                  </li>
                  <li className="fs-5">
                    Altura : <span id="spanH" className="fs-5"></span>
                  </li>
                </ul>

                <p id="spanImc" className="text-center fs-5"></p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-dark fs-5">IMC</th>
                    <th className="text-dark fs-5">Estado</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="fs-6">Por debajo de 18.5</td>
                    <td className="fs-6">Bajo de peso</td>
                  </tr>

                  <tr>
                    <td className="fs-6">18.5 - 24.9</td>
                    <td className="fs-6">Peso normal</td>
                  </tr>

                  <tr>
                    <td className="fs-6">25.0 - 29.9</td>
                    <td className="fs-6">Sobrepeso</td>
                  </tr>

                  <tr>
                    <td className="fs-6">30.0 - 34.9</td>
                    <td className="fs-6">Obesidad clase I</td>
                  </tr>

                  <tr>
                    <td className="fs-6">35.0 - 39.9</td>
                    <td className="fs-6">Obesidad clase II</td>
                  </tr>

                  <tr>
                    <td className="fs-6">Por encima de 40</td>
                    <td className="fs-6">Obesidad clase III</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <p className="text-center fs-5 my-3">Created by: Luis Torres</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
