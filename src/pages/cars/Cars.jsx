import { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import ModelContext from '../../context/ModelContext';
import { UserContext } from "../../context/UserContext";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Pagination from 'react-bootstrap/Pagination';

function Cars() {
  let items = [];
  const { user, verifyingToken } = useContext(UserContext);

  const { models, total, total_pages, getModels, addModelCart } = useContext(ModelContext);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  useEffect(() => {
    getModels(1, limit);
  }, [limit, getModels]);


  const loadPage = (number) => {
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
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row mb-2">
            <ButtonToolbar
              className="justify-content-end mb-4"
              aria-label="Toolbar with Button groups"
            >

              <h5 className='p-2'>{total} resultados</h5>
              <ButtonGroup aria-label="First group">
                <Button onClick={() => setLimit(9)} variant="secondary">9</Button>{' '}
                <Button onClick={() => setLimit(15)} variant="secondary">15</Button>{' '}
                <Button onClick={() => setLimit(45)} variant="secondary">45</Button>{' '}
                <Button onClick={() => setLimit(100)} variant="secondary">100</Button>
              </ButtonGroup>
            </ButtonToolbar>

            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_654170-MLM50061959546_052022-O.jpg"
                  className="d-block w-100"
                  alt="Honda"
                />
                {/* <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

    </>



  )
}

export default Cars
