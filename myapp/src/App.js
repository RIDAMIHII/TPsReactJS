import logo from './logo.svg';
import './App.css';
import Article from './component/Article';
import ButtonComponent from './component/ButtonComponent';
import Home from './component/Home';

function App() {

  const  handleClick = () => {
    alert("Click de composant parent");
  };

  return (
    <div className="App">


      <Home/>
      {/* <h1>Comprendre les proprietés</h1>

      <ButtonComponent disabled={false} onClick={handleClick} type="reset" id={10}>
        Click me ...
      </ButtonComponent>

      <br /><br />

      <ButtonComponent disabled={false} onClick={handleClick} type="reset" id={10}>
        Submit ...
      </ButtonComponent>



      <Article id={1} auteur="Rida" titre="React">

        <p>
          <strong>First</strong> ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis accusantium in dolorum rerum corporis, cumque exercitationem molestias? Nemo accusantium corrupti,
          mollitia repellat consectetur illo cumque doloremque,
          aliquam eos deleniti delectus.
        </p>

      </Article>

      <Article id={2} auteur="Walid" titre="Heelloo">
        <p>
        <strong>Second</strong> ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis accusantium in dolorum rerum corporis, cumque exercitationem molestias? Nemo accusantium corrupti,
          mollitia repellat consectetur illo cumque doloremque,
          aliquam eos deleniti delectus.
        </p>

      </Article> */}

      {/* {
        Article()
      } */}


    </div>
  );
}

export default App;
