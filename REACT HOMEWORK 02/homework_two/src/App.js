import Card from "./components/Card/Card";
import { Academies } from "./components/Academies/Academies";
import Counter from "./components/Counter/Counter";

function App() {
  const academies = [
    {
      id: "1",
      name: "Seavus",
      description: "Seavus Education & Development Center",
    },
    {
      id: "2",
      name: "Breinster",
      description: "This is the description for Academy 2",
    },
    {
      id: "3",
      name: "Seavus",
      description: "This is the description for Academy 3",
    },
  ];
  return (
    <div className="App">
      <div className="card-section">
        <Card
          title="I love Cars"
          heading="Golf IV"
          content="The Volkswagen Golf Mk4 (or VW Type 1J) is a compact car, the fourth generation of the Volkswagen Golf and the successor to the Volkswagen Golf Mk3. Launched in October 1997 for the 1998 model year, it was the best selling car in Europe in 2001 (though it slipped to second place, behind the Peugeot 206, in 2002)"
          img="https://images.prismic.io/shacarlacca/ZDcyOTAyYjktODQ5Ni00OWVkLWIwY2YtN2Q1NmM5YTJhYzg1__10.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C900&w=1200&h=1200"
        />
        <Card
          title="I love Cars"
          heading="Peugeot 206"
          content="The 206 is the best-selling Peugeot model of all time with 8,358,217 cars sold by 2012. As of July 2021, the car remained to be produced under license in Iran by IKCO. As the result, the 206 was counted as the thirtieth most long-lived single generation car by Autocar magazine"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/2002_Peugeot_206_LX_1.4_Front.jpg/420px-2002_Peugeot_206_LX_1.4_Front.jpg"
        />
        <Card
          title="I love Cars"
          heading="BMW E90"
          content="The fifth generation of the BMW 3 Series range of compact executive cars is designated under the model codes E90 (saloon), E91 (estate, marketed as 'Touring'), E92 (coupé) and E93 (convertible). The model was introduced in December 2004, and produced by BMW until October 2013 and is often collectively referred to as the E90 or E9x."
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2005-2008_BMW_320i_%28E90%29_sedan_%282011-07-17%29_01.jpg/420px-2005-2008_BMW_320i_%28E90%29_sedan_%282011-07-17%29_01.jpg"
        />
        <Card
          title="I love Cars"
          heading="Golf V GTI"
          content="The Mk5 had revised suspension changes and chassis tuning and increased cargo volume, corresponding to a minor increase in size over the outgoing model. Its cargo volume is roughly 0.7 cubic feet (20 L) greater"
          img="https://media.pazar3.mk/Image/277a9b77-54ee-49ba-9af9-533d3b39f7a8/20220804/false/false/1280/960/golf-5-gti.jpeg?noLogo=true"
        />
        <Card
          title="I love Cars"
          heading="Peugeot 406"
          content="The Peugeot 406 is a large family car that was produced by French automaker Peugeot between 1995 and 2004. Available in saloon, estate and coupé bodystyles with a choice of petrol or turbodiesel engines. "
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU57lq-_6IfRd3-jFiU8_xWzIaVnEksbyL6w&usqp=CAU"
        />
      </div>

      <Academies academies={academies} name="Top Academes in Macedonia:" />

      <Counter />
    </div>
  );
}

export default App;
