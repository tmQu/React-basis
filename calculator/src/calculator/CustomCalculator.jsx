import {
    useState,
    useRef,
    useEffect
  } from "react"; 

import './css/CustomCalculator.css';




function CustomCalculator()
{
    // 2 numbers
    const [prevNum, setPrevNum] = useState("");
    const [curNum, setCurNum] = useState("");
    const [newNumber, setNewNumber] = useState(true);
    const [newCalculation, setNewCalculation] = useState(true);

    const [operator, setOperator] = useState("");

    const inputNum = (e) => {
      // Check if it is already a float number
      console.log('inputNum', e.target.innerText)
      if (e.target.innerText === ",") {
          if (curNum.includes(".")) 
            return;
      }
      console.log(curNum);
      var num;
      if (e.target.innerText === ',')
        if (curNum == '')
          num = '0.'
        else 
          num = '.'
      else
        num = e.target.innerText
      if (newNumber === true){
        setCurNum(num) 
        setNewNumber(false);
      }
      else{
         setCurNum(curNum + num);
      }
      console.log('curnum',   curNum);
    }


    const inputOperator = (e) => {

      document.querySelectorAll('.operator').forEach((element) => {
        element.classList.remove('active');
      })

      var op;
      switch(e.target.id)
      {
        case 'add':
          op = "+";
          break;
        case 'minus':
          op = "-";
          break;
        case 'multiply':
          op = "x";
          break;
        case 'divide':
          op = "/";
          break;
        default:
          return;
      }

      if (operator && newCalculation === false)
      {
        // operator is already set

        // if the user not input the second number
        if (newNumber === true) 
        {
          // set to the new oeperator
          setOperator(op);  
        }
        else{
         // do the prev calculation
          calculate();
          setOperator(op);
          setNewCalculation(false);
        }
        e.target.classList.add('active');
        return;
      }

      //save the curNum to prevNum (frist number)
      if (newNumber === false)
      {
        setPrevNum(curNum);
        // reset for second number
        setNewNumber(true);
      }
      setNewCalculation(false);


      setOperator(op);
      e.target.classList.add('active');
    }


    const reset = () => {
      setPrevNum("");
      setCurNum("");
      setNewNumber(true);
      setOperator("");
      document.querySelectorAll('.operator').forEach((element) => {
        element.classList.remove('active');
      })
    };
    const clearCurrentInput = () => {
      if(newNumber === true)
        return;
      setNewNumber(true);
      setCurNum("0");
    }

    const calculate = () => {
      document.querySelectorAll('.operator').forEach((element) => {
        element.classList.remove('active');
      })
      var res;
      console.log(prevNum, 'op', curNum)
      var firtNum = prevNum === '' ? '0' : prevNum;
      var secNum = curNum === '' ? '0' : curNum;

      switch(operator)
      {
        case '+':
          res = String(parseFloat(firtNum) + parseFloat(secNum));
          break;
        case '-':
          res = String(parseFloat(firtNum) - parseFloat(secNum));
          break;
        case 'x':
          res = String(parseFloat(firtNum) * parseFloat(secNum));
          break;
        case '/':
          res = String(parseFloat(firtNum) / parseFloat(curNum));
          break;
        default:
          return;
      }
      setPrevNum(res);
      setNewNumber(true);
      setNewCalculation(true);
    }

    useEffect(() => {
      console.log('useEffect');
      const handleKeyPress = (e) => {
        e.preventDefault()

        console.log('key click',e.key);
        if (e.key === 'Enter')
        {
          console.log('enter');
          document.getElementById('calculate').click();

        }
        else if (e.key === 'Escape')
          document.getElementById('reset-input').click();
        else if (e.key === 'Backspace')
        {
          reset();
        }
        else if (e.key === ',' || e.key === '.')
        {
          document.getElementById('dot').click();
        }
        else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
        {
          switch(e.key)
          {
            case '+':
              document.getElementById('add').click();
              break;
            case '-':
              document.getElementById('minus').click();
              break;
            case '*':
              document.getElementById('multiply').click();
              break;
            case '/':
              document.getElementById('divide').click();
              break;
            default:
              return;
          }
        }
        else if (e.key >= '0' && e.key <= '9')
        {
          document.querySelectorAll('.wrapper .btn').forEach((element) => {
            if (element.innerText === e.key)
            {
              console.log('num ', curNum)
              element.click();
              console.log('click',element.innerText)
            }
            
          })
        }
      }
      document.addEventListener('keyup', handleKeyPress)
      return () => {
        console.log('remove');
        document.removeEventListener('keyup', handleKeyPress);
      }
    }, []);

    return (
      <div className="container">
        <div className="instruction">
          <hr></hr>
          Keyboard shortcuts
          <ul>
            <li>AC (reset result) <span>Backspace</span></li>
            <li>C (reset input) <span>esc</span></li>
            <li>Number  <span>1 to 9</span></li>
            <li>dot  <span>.</span></li>
            <li>Operator  <span>(+ - * /)</span></li>
            <li>=  <span>Enter</span></li>


          </ul>
        </div>
        <div className="calculator">
          <div className="screen">
            { !newNumber ? (curNum) : (prevNum == "" ? '0' : prevNum)}
          </div>
          <div className="wrapper">
            <div className='btn reset-btn reset-result' onClick={reset}>
              AC
            </div>
            <div className='btn reset-btn' id='reset-input' onClick={clearCurrentInput}>
              C
            </div>
            <div className='btn operator operator' id="divide" onClick={inputOperator}>
              &divide;
            </div>
            <div className='btn' onClick={inputNum}>
              7
            </div>
            <div className='btn' onClick={inputNum}>
              8
            </div>
            <div className='btn' onClick={inputNum}>
              9
            </div>
            <div className='btn operator operator' onClick={inputOperator} id="multiply">
              &times;
            </div>
            <div className='btn' onClick={inputNum}>
              4
            </div>
            <div className='btn' onClick={inputNum}>
              5
            </div>
            <div className='btn' onClick={inputNum}>
              6
            </div>
            <div className='btn operator operator' id="add" onClick={inputOperator}>
              +
            </div>
            <div className='btn' onClick={inputNum}>
              1
            </div>
            <div className='btn' onClick={inputNum}>
              2
            </div>
            <div className='btn' onClick={inputNum}>
              3
            </div>
            <div className='btn operator operator' id="minus" onClick={inputOperator}>
              -
            </div>
            <div className='btn zero' onClick={inputNum}>
              0
            </div>
            <div className='btn' onClick={inputNum} id='dot'>
              ,
            </div>
            <div className='btn' onClick={calculate} id='calculate'>
              =
            </div>
          </div>
        </div>
        {/* this div is used to center the calculator div */}
        <div className="instruction" style={{opacity: '0'}}></div>
      </div>
      
    )

}

export default CustomCalculator;