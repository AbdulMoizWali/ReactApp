import { useState } from "react";
import Button from "../../Components/button";
import Input from "../../Components/input";
import Input1 from "../../Components/input1";
import { questions, AllQuestions } from "../../QuizQuestions";


export function Lab10() {
    const [Question, SetQuestion] = useState(questions);
    const [indexNumber, SetIndexNumber] = useState(0);
    const [marks, SetMarks] = useState(0);
    const [result, SetResult] = useState(false);

    const checkAns = (userSelected, correctAns) => {
        if (userSelected == correctAns) {
            SetMarks(marks + 1);
        }
        if (indexNumber == Question.length - 1) {
            SetResult(true);
        }

        SetIndexNumber(indexNumber + 1);
    }

    return (
        // AllQuestions.map((Q, i) => {
        //     return <div key={i}>
        //         <p>{Q}</p>
        //         {
        //             questions[i].options.map((opt, j) => {
        //                 return (
        //                     <input key={j} type="radio" name={Q} value={opt} />
        //                 )
        //             })
        //         }
        //     </div>
        // })

        <div>
            {
                result ? (<h1> Your Marks is: {marks}</h1 >) : (
                    <div>

                        <div key={indexNumber}>
                            {Question[indexNumber].question}
                        </div>
                        {
                            Question[indexNumber].options.map((opt, i) => {
                                return <button key={i} onClick={() => checkAns(opt, Question[indexNumber].answer)}> {opt}</button>
                            })
                        }
                    </div >

                )
            }
        </div>
    )
}


