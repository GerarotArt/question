import React,{ useState , useEffect } from "react"
import {Breadcrumb} from "./components/breadcrumb"

export default function Questionone() {
    const [valueText , setValueText] = useState({
        number : '',
        method : ''
    })
    const [calculator , setCalculator] = useState('true')

    const chackInputNumber = (e) => {
        var number = e.target.value.replace(/[^0-9\.\-]+/g, '');
        setValueText({
            ...valueText,
            number : number
        })
    }

    const chackInputMath = (e) => {
        var math = Math.round(e.target.value)
        if(math < 0){
            math = 1;
        }
        setValueText({
            ...valueText,
            number : math
        })
    }

    const checkSelect = (e) => {
        setValueText({
            ...valueText,
            method : e.target.value
        })
    }

    const checkMethod = () => {
        var val = ''
        if(valueText.method == 'isPrime'){
            val = isPrime()
        }else{
            val = isFibonacci()
        }
        setCalculator(val)
    }

    const isPrime = () => {
        var num = valueText.number
        let isPrime = 'true';
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = 'false';
                break;
            }
        }
        return isPrime;
    }

    const isFibonacci = () => {
        var num = valueText.number
        if (isSquare(5*(num*num)-4) || isSquare(5*(num*num)+4)) {
           return 'true';
        } else { return 'false'; }
    }

    const  isSquare = (x) => {
        let s = parseInt(Math.sqrt(x));
        return (s * s == x);
    };
    


    useEffect(()=>{
        checkMethod()
    },[valueText])
    return(
        <>
        <Breadcrumb page="Question1"/>
        <div className="container-fluid">
            <div className="boxbig">
                <div className="boxone">
                    <input type="text" name="number" value={valueText.number} className="form-control"  onChange={(e) => chackInputNumber(e)} onBlur={(e) => chackInputMath(e)} />
                </div>
                <div className="boxtwo col-sm">
                    <select 
                    className="form-control col-sm-6" 
                    name="method" 
                    onChange={(e) => checkSelect(e)}
                    >
                        <option value="">เลือกการคำนวณข้อมูล</option>
                        <option value="isPrime">isPrime</option>
                        <option value="isFibonacci">isFibonacci</option>

                    </select>
                </div>
                <div className="boxthree">
                    <p>{calculator}</p>
                </div>
            </div>
        </div>
        </>
    )
}