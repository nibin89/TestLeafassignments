
/* Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
to assess score ranges */

let Gradecalculation = (score) => {

    switch( true) {

        case (score >= 80 && score <=100):
            return "Grade A"
            break;
        case (score < 80 && score >=60):
            return "Grade B"
            break; 
        case (score <= 60 && score >=30):
            return "Grade C"
            break;
        case (score >=0  && score < 30):
                return "FAIL"
                break;

        default:
            return "Out of range,not valid"
            break;

    }
}

console.log(Gradecalculation(101))