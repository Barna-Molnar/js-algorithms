import { FunctionComponent, useState } from 'react';




const IsPalindrone: FunctionComponent = () => {

    const [input, setInput] = useState('');
    const [isPalindrone, setisPalindrone] = useState(false);

    const onCheckText = (input: string) => {

        const lowerCaseInput = input.toLowerCase();
        const charArr = lowerCaseInput.split('');
        const validLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');


        const letterArray: string[] = []

        charArr.forEach(char => {
            if (validLetters.indexOf(char) > -1) letterArray.push(char)
        })

        // TODO: Refactor with P.
        if (letterArray.join('') === letterArray.reverse().join('')) {

            setisPalindrone(true)
            // return true
        } else {

            setisPalindrone(false)
            // return false
        }

    };

    return (
        <div className='flex-column'>
            <h1>Is Palindrone ?</h1>
            <input type="text" onChange={(e: React.BaseSyntheticEvent) => { setInput(e.target.value) }} />
            <button
                className='button-check'
                onClick={() => { 
                    console.log('first')
                    onCheckText(input);
                 }}
            >
                Check
            </button>
            <h3>{String(isPalindrone)}</h3>
        </div>
    );
};



export default IsPalindrone;