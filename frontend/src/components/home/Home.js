import image1 from '../../media/image1.png';
// Imports de elementos de bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import {Link} from "react-router-dom";

function Home() {
  return (
      <div style={{background:"#dee2e6",padding: "10px"}}>
      <Card style={{ width: '50%', alignItems:"center", justifyContent:"center", textAlign:"center", margin:"auto"}}>
      {/* <img src={image1} className="image" alt="image" /> */}
      <Card.Body>
      <Card.Img width={"50%"} height={"50%"} variant="top" src={image1} />
          <hr></hr>
          <Card.Title><h2>Bienvenido</h2></Card.Title>
          <Card.Text>
          Te invitamos a experimentar la nueva sensación de AppOfNotes que te permitirá crear notas, 
          que te servirán como recordatorio, para asistir a un evento o realizar alguna tarea de la vida cotidiana. 
          </Card.Text>
          <Button variant="primary" href='/register'>Comenzar</Button>
          {/* <Link to={"/register"}>Comenzar</Link> */}
          <hr></hr>
      </Card.Body>
      </Card>
      </div>
  );
}

export default Home;
