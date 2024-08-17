import { FunctionComponent, useState } from 'react';

// export interface Props { };

const FizzBuzz: FunctionComponent = () => {

    const [fizzBuzzResult, setFizzBuzzResult] = useState<Array<string>>([])

    function fizzbuzz(num: number) {
        const result: string[] = [];
        for (let index = 1; index <= num; index++) {
            if ((index % 3 === 0 && index % 5 === 0)) result.push('FizzBuzz')
            else if (index % 3 === 0) result.push('Fizz')
            else if (index % 5 === 0) result.push('Buzz')
            else result.push(String(index))
        }
        setFizzBuzzResult(result)
    }
    const handleOnChangeInput = (event: React.BaseSyntheticEvent) => {
        fizzbuzz(Number(event.target.value))
    }

    return (
        <div>
            <h1>FizzBuzz</h1>
            <input type="string" onChange={handleOnChangeInput} placeholder='please pass in a number' />

            {fizzBuzzResult.map(item => <div>{item}</div>)}

        </div>
    );
};


export default FizzBuzz;