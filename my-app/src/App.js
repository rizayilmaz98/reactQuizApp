import "./App.css";
import {useState} from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import Result from "./components/Result/Result"
function App() {
  const question = [
    {
      id:1,
      question: "1959'dan beri düzenlenen, lise öğrencilerinin yarıştığı Uluslararası Matematik Olimpiyatı'nda 1991 ve 2010'da kopya çektiği şüphesiyle diskalifiye edilen ülke hangisidir?" ,
      answerQuestion : [
        {choice: "Kuzey Kore"},
        {choice: "Hindistan"},
        {choice: "Venezuela"},
        {choice: "Pakistan"},
      ],
      trueChoice:"Kuzey Kore"
    },
    {
      id:2,
      question: "Hangisi sırasında Atatürk 40'lı yaşlarının başındaydı?" ,
      answerQuestion : [
        {choice: "Trablusgarp Savaşı"},
        {choice: "I. Balkan Savaşı"},
        {choice: "Cumhuriyetin ilanı"},
        {choice: "Hatay'ın Türkiye'ye katılması"},
      ],
      trueChoice:"Cumhuriyetin ilanı"
    },
    {
      id:3,
      question: "Nobel ödüllü yazar Tagore'un, hikayesi 19. yüzyılda Birleşik Krallık yönetimindeki Hindistan'ın Kalküta şehrinde geçen ve başkarakteriyle aynı adı taşıyan romanının adı nedir?" ,
      answerQuestion : [
        {choice: "Arog"},
        {choice: "Gora"},
        {choice: "Agora"},
        {choice: "Tagore"},
      ],
      trueChoice:"Gora"
    },
    {
      id:4,
      question: "İbn Haldun'un bir eserinin adı da olan 'mukaddime' kelimesi ne anlama gelir?" ,
      answerQuestion : [
        {choice: "Çeviri"},
        {choice: "Ön söz"},
        {choice: "Kaynakça"},
        {choice: "Dipnot"},
      ],
      trueChoice:"Ön söz"
    },
  ]
  const [count,setCount] = useState(0);
  const [trueAnswer, setTrueAnswer] = useState(0);
  console.log(trueAnswer);
  return (
    <div className="App">
      {count<4 ? <QuestionCard count={count} trueAnswer={trueAnswer} setTrueAnswer={setTrueAnswer} question={question[count].question} answerQuestion={question[count].answerQuestion} onClick={()=>{setCount(count+1)}} questionNumber={question[count].id} trueChoice={question[count].trueChoice}/> : <Result trueAnswer={trueAnswer}/> }
      
      
    </div>
  );
}

export default App;
