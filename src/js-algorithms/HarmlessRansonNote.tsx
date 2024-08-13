import { FunctionComponent, useState } from 'react';

// export interface Props { };

// NOTE: test NOTE text
//  this is a secret note for you from a secret admirer

// NOTE: test Magazine text
// puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited

const HarmlessRansonNote: FunctionComponent = () => {

    const [isPossibleToWrite, setIsPossibleToWrite] = useState<boolean | string>('there is nothing to check... please enter note and magazin text')
    const [noteText, setNoteText] = useState('')
    const [magazineText, setMagazineText] = useState('')

    const onCheckMagazinText = () => {
        let result = true;
        const noteArray = noteText.split(' ');
        const magazineArray = magazineText.split(' ');

        // Create hashTable
        const magazinHashTable: Record<string, number> = {}
        magazineArray.forEach(word => {
            if (!magazinHashTable[word]) magazinHashTable[word] = 0;
            magazinHashTable[word]++
        })

        noteArray.forEach(word => {
            if (magazinHashTable[word]) {
                magazinHashTable[word]-- // if exist than decrement
                if (magazinHashTable[word] < 0) result = false // if number of available existent less then 0 set to false 
            }
            else result = false
        })

        setIsPossibleToWrite(result)
    }

    return (
        <div className='flex-column'>
            <input type="string" onChange={(e: React.BaseSyntheticEvent) => { setNoteText(e.target.value) }} placeholder='please pass in a Note text' />
            <input type="string" onChange={(e: React.BaseSyntheticEvent) => { setMagazineText(e.target.value) }} placeholder='please pass in a Magazin Text' />
            <button
                className='button-check'
                onClick={onCheckMagazinText}
            >
                Check
            </button>
            <div className='result'>{String(isPossibleToWrite)}</div>
        </div>
    );
};


export default HarmlessRansonNote;