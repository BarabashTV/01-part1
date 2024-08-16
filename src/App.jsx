const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Hello {props.name} from {props.town}. You are {props.age} years old.
      </p>
    </>
  );
};

const Ystavat = ({ friends }) => {
  return (
    <>
      <section>
        <h2>Älä renderoi olioita</h2>
        <p>
          Ensimmäinen ystävä {friends[0].name} on {friends[0].age} vuotta vanha.
        </p>
        <p>
          Toinen ystävä {friends[1].name} on {friends[1].age} vuotta vanha.
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
  const friends = [
    { name: "Leevi", age: 4 },
    { name: "Venla", age: 10 },
  ];
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
        <Hello name={nimi} town="Juväskylä" age={ika} />
      </section>
      <hr />
      <Ystavat friends={friends} />

      <Footer />
    </>
  );
};

export default App;
