import {Hello} from './components/Hello';
import {Student} from './components/Student';
import { StudentClass } from './components/StudentClass';
import {Comments} from './components/Comments';
import { FruitList } from './components/FruitList';

var ime = "Nikola";
var prezime = "Nikoloski";
var age = 27;
var student = {
  name: "Ivan",
  address:"Skopje",
  college:"UKIM",
  index: 141088
}
var hasComments = true;
var listaNaOvosje = ["apple","orange","banana"];
export function App (){
  return(
    <div>
      <FruitList listaNaOvosje={listaNaOvosje}/>
      <hr/>
      <Hello name="Filip" lastName = "Dzukovski"/>
      <h1>Some Content</h1>
      <Hello name = {ime} lastName = {prezime} age={age}/>
      <hr/>
      <Student student={student}/>
      <hr/>
      <StudentClass student={student} />
      <hr/>
      <Comments hasComments={hasComments} longComment = {false}/>
    </div>
  )
}