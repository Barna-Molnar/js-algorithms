import { FunctionComponent, useState } from 'react';


const CeaserCipher: FunctionComponent = () => {

    const [input, setInput] = useState('second')
    const [number, setNumber] = useState(0)
    const [encodedString, setEncodedString] = useState('')

    const ceaserCipher = (str: string, num: number) => {
        const abcLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const moveIndexWith = num % abcLetters.length; // TODO: Explain to P why it is like that !
        const lowerCaseString = str.toLowerCase().split('');
        let newString = '';

        // Exercise => convert it to a for loop + refactor 
        lowerCaseString.forEach((letter, index) => {

            // Exercise => cover any other special char here as well !
            if (letter === ' ') {
                newString += letter
                return;

            }
            const indexOfCurrentLetter = abcLetters.indexOf(letter)
            const newIndex = indexOfCurrentLetter + moveIndexWith > 25
                ? indexOfCurrentLetter + moveIndexWith - abcLetters.length
                : indexOfCurrentLetter + moveIndexWith;

            if (letter.toUpperCase() === str[index]) {
                newString += abcLetters[newIndex].toUpperCase()
            } else {
                newString += abcLetters[newIndex]
            }
        });

        return newString
    }

    return (
        <div className='flex-column'>
            <h1>Ceaser cipher</h1>
            <input
                type="string"
                onChange={(e: React.BaseSyntheticEvent) => { setInput(e.target.value) }}
                placeholder='please pass in a text'
            />
            <input
                type="number"
                onChange={(e: React.BaseSyntheticEvent) => { setNumber(e.target.value) }}
                placeholder='please pass in a number'
            />
            <button
                className='button-check'
                onClick={() => {
                    console.log({ input });
                    console.log({ number });
                    setEncodedString(ceaserCipher(input, number))
                }}
            >
                Encode
            </button>
            <div className='result'>{encodedString}</div>

        </div>
    );
};


export default CeaserCipher;