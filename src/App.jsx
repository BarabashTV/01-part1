import { useState } from "react";

const Hello = ({ name, age, town }) => {
  /*const name = props.name;
  const age = props.age;
  const town = props.town;*/
  /*const { name, age, town } = props;*/

  const bornYear = () => new Date().getFullYear() - age;
  return (
    <>
      <p>
        Hello {name} from {town}. You are {age} years old.
      </p>
      <p>So you are probably born {bornYear()}</p>
    </>
  );
};

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const History = (props) => {
  if (props.allClicks.lenght === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Ystavat = ({ friends }) => {
  return (
    <>
      <section>
        <h2>Älä renderoi olioita</h2>
        <p>
          Ensimmäinen ystävä {friends[0].name} from {friends[0].town} on{" "}
          {friends[0].age} vuotta vanha.
        </p>
        <p>
          Toinen ystävä {friends[1].name} from {friends[1].town} on{" "}
          {friends[1].age} vuotta vanha.
        </p>
      </section>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <footer>
        <hr />
        greeting app created by
        <a href="https://github.com/BarabashTV"> Tatiana Barabash</a>
      </footer>
    </>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const nimi = "Pekka";
  const ika = 10;
  const town = "Vantaa";
  const friends = [
    { name: "Leevi", age: 4, town: "Rovaniemi" },
    { name: "Venla", age: 10, town: "Karjaa" },
  ];
  const props = {
    name: "Maya",
    age: 36,
    town: "Oulu",
  };
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  /*const handleClick = () => {
    console.log("clicked");
  };*/
  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };
  setTimeout(() => setCounter(counter + 1), 1000);
  console.log("rendering...", counter);

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  /*const [total, setTotal] = useState(0);*/

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  /*const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 });*/

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
    /*const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);*/
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
    /*const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);*/
  };

  const [value, setValue] = useState(10);

  /*const hello = (who) => () => {
    console.log("hello", who);
  };*/

  const setToValue = (newValue) => {
    console.log("value now", newValue); //распечатайте новое значение на консоли
    setValue(newValue);
  };
  return (
    <>
      <section>
        <p>Hello world, it is {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
      </section>
      <section className="greetings">
        <hr />
        <h1>Greetings</h1>
        <Hello name="Heikki" town="Helsinki" age="15" />
        <Hello name="Maija" town="Oulu" age={26 + 10} />
        <Hello name={nimi} town={town} age={ika} />
      </section>
      <hr />
      <Ystavat friends={friends} />
      <hr />
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
      <hr />
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
      <div>
        <Display value={value} />
        <Button handleClick={() => setToValue(1000)} text="thousand" />
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" />
      </div>
      <Footer />
    </>
  );
};

export default App;

/*<p>{allClicks.join(" ")}</p>
<p>total {total}</p>*/
