import { Domashno } from "./components/Domashno";
import { Comments } from "./components/Comments";
import { Car } from "./components/Car";

let user1 = { ime: "Ivan", prezime: "Ivanov", adresa: "Skopje", godini: 22 };
let user2 = { ime: "Petar", prezime: "Perov", adresa: "Gostivar", godini: 33 };
let user3 = { ime: "Dime", prezime: "Dimov", adresa: "Skopje", godini: 15 };
let user4 = { ime: "Sime", prezime: "Simeonov", adresa: "Debar", godini: 16 };

let comments = [
  { id: 0, author: "Filip", content: "Comment 1" },
  { id: 1, author: "Simona", content: "Comment 2" },
  { id: 2, author: "Ivana", content: "Comment 3" },
];

let registracija = [
  { grad: { naselba: "N1", ulica: "Ul.1" }, oznaka: "SK-0000-AB" },
  { grad: { naselba: "N2", ulica: "Ul.2" }, oznaka: "GV-0000-AB" },
  { grad: { naselba: "N3", ulica: "Ul.3" }, oznaka: "TE-0000-AB" },
];

let cars = [
  { brand: "Ford", model: "Fiesta", year: 2008, plates: registracija[0] },
  { brand: "Opel", model: "Astra", year: 2015, plates: registracija[1] },
  { brand: "VW", model: "Polo", year: 2020, plates: registracija[2] },
];


export function App() {
  return (
    <div id="app">
      <Car vozila={cars} />
      <Domashno
        korisnik1={user1}
        korisnik2={user2}
        korisnik3={user3}
        korisnik4={user4}
      />
      <Comments listOfComments={comments} datum={"26/09/2023"} />
    </div>
  );
}
