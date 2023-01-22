import React, { useState } from "react";
import "./QuestionCard.css";
function QuestionCard(props) {
  const [answerClass, setAnswerClass] = useState("");
  return (
    <>
      <div className="card">
        <div className="left-side">
          <h1 className="left-side-title">
            Soru {props.questionNumber} / <span className="questionFull">4</span>
          </h1>
          <p className="left-side-question">{props.question}</p>
        </div>
        <div className="right-side">
          <ul>
            {props.answerQuestion.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    if (item.choice === props.trueChoice) {
                      setAnswerClass("bg-true");
                      props.setTrueAnswer(props.trueAnswer + 1);
                      setTimeout(() => {
                        props.onClick();
                        setAnswerClass("bg-default")
                      }, 1000);
                    }
                    if (item.choice !== props.trueChoice) {
                      setAnswerClass("bg-false");
                      setTimeout(() => {
                        props.onClick();
                        setAnswerClass("bg-default")
                      }, 1000);
                    }
                  }}
                  className={answerClass}
                  key={index}
                >
                  {item.choice}
                </li>
              );
            })}
          </ul>
        </div>
        
      </div>
    </>
  );
}

export default QuestionCard;
