import { Container } from 'react-bootstrap';
import Contact from './Contact';

export default function LoginPage() {
  return (
    <>
      <Container className="py-4">
        <h2 className="mb-3">Página de inicio de sesión</h2>
        <p>Por favor, ingrese sus credenciales para acceder a su cuenta.</p>

        <div className="card col-sm-4 mx-auto p-4">
          <form>
            <div className="row">
              <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                Email
              </label>
              <div className="col-sm-9">
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
              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
