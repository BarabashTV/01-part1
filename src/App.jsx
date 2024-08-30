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
      <Footer />
    </>
  );
};

export default App;
