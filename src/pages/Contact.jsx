import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <Container className="py-4" style={{ width: "50%" }}>
        <h2 className="mb-3">Pagina Contact</h2>







<>
      <h2 className="py-4">Página de inicio de sesión</h2>
      <p>Por favor, ingrese sus credenciales para acceder a su cuenta.</p>

      <form>
        <fieldset>
          <legend>Legend</legend>

          <div className="row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                defaultValue="email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div>
            <label htmlFor="exampleInputPassword1" className="form-label mt-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="exampleSelect1" className="form-label mt-4">
              Example select
            </label>
            <select className="form-select" id="exampleSelect1" defaultValue="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <label htmlFor="exampleDisabledSelect1" className="form-label mt-4">
              Example disabled select
            </label>
            <select className="form-select" id="exampleDisabledSelect1" disabled defaultValue="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <label htmlFor="exampleSelect2" className="form-label mt-4">
              Example multiple select
            </label>
            <select multiple className="form-select" id="exampleSelect2" defaultValue={["1"]}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <label htmlFor="exampleTextarea" className="form-label mt-4">
              Example textarea
            </label>
            <textarea className="form-control" id="exampleTextarea" rows={3} />
          </div>

          <div>
            <label htmlFor="formFile" className="form-label mt-4">
              Default file input example
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>

          <fieldset>
            <legend className="mt-4">Radio buttons</legend>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios1"
                value="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="optionsRadios1">
                Option one is this and that—be sure to include why it's great
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="optionsRadios2">
                Option two can be something else and selecting it will deselect option one
              </label>
            </div>

            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="optionsRadios"
                id="optionsRadios3"
                value="option3"
                disabled
              />
              <label className="form-check-label" htmlFor="optionsRadios3">
                Option three is disabled
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="mt-4">Checkboxes</legend>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Default checkbox
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Checked checkbox
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="mt-4">Switches</legend>

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Default switch checkbox input
              </label>
            </div>

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                Checked switch checkbox input
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="mt-4">Ranges</legend>

            <label htmlFor="customRange1" className="form-label">
              Example range
            </label>
            <input type="range" className="form-range" id="customRange1" />

            <label htmlFor="disabledRange" className="form-label">
              Disabled range
            </label>
            <input type="range" className="form-range" id="disabledRange" disabled />

            <label htmlFor="customRange3" className="form-label">
              Example range
            </label>
            <input type="range" className="form-range" min={0} max={5} step={0.5} id="customRange3" />
          </fieldset>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>














      </Container>
    </>
  );
};

export default Contact;
