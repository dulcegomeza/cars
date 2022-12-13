import { useContext, useEffect, useState } from 'react';
import ModelContext from '../../context/ModelContext';
import { UserContext } from "../../context/UserContext";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Pagination from 'react-bootstrap/Pagination';
import './styles-cars.css';

function Cars() {
  let items = [];
  const { user, verifyingToken } = useContext(UserContext);

  const { models, total, total_pages, getModels, addModelToCart } = useContext(ModelContext);
  const [limit, setLimit] = useState(9);


  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  useEffect(() => {
    getModels(1, limit);
  }, [limit, getModels]);


  const loadPage = (number) => {
    console.log(number);
    getModels(number, limit);
  }

  for (let number = 1; number <= total_pages; number++) {
    items.push(
      <Pagination.Item onClick={() => loadPage(number)} key={number} >
        {number}
      </Pagination.Item>,
    );
  }


  return (
    <>
      <div className="album py-5 bg-light animate__animated animate__fadeIn">
        <div className="container">
          <div className="row mb-2">
            <ButtonToolbar
              className="justify-content-end mb-4"
              aria-label="Toolbar with Button groups"
            >

              <h5 className='p-2'>{total} resultados</h5>
              <ButtonGroup aria-label="First group">
                <Button onClick={() => setLimit(9)} variant="secondary">9</Button>{' '}
                <Button onClick={() => setLimit(18)} variant="secondary">18</Button>{' '}
                <Button onClick={() => setLimit(32)} variant="secondary">32</Button>{' '}
                <Button onClick={() => setLimit(100)} variant="secondary">100</Button>
              </ButtonGroup>
            </ButtonToolbar>

            {models.map((model) => (
              <div className="col-md-6 col-lg-4 mb-2" key={model.uid}>
                <div className="card shadow-sm">
                  <img
                    src={model.imgs[0]}
                    className="d-block w-100"
                    alt={model.model}
                  />
                  <div className="card-body">
                    <h3>{model.model}</h3>
                    <p className="card-text fw-bold">  <span class="badge text-bg-secondary">{model.brand.name}</span> $ {model.price}</p>
                    <p className="card-text"> {model.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    {user.uid ?
                      <div className="btn-group">
                        <button type="button" onClick={() => addModelToCart(model.uid)} className="btn btn-sm btn-outline-secondary">Agregar</button>
                      </div>:<></>}
                    </div>
                  </div>
                </div>
              </div>

            ))}

            <Pagination className='justify-content-center mt-2'>{items}</Pagination>
          </div>
        </div>
      </div>

    </>



  )
}

export default Cars

