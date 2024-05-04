import QuoteList from "../componentRouter/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'm1', author: 'Ali', text: 'to improve is to change.'},
    {id: 'd1', author: 'mohammed', text: 'summer is a bitch.'},
    {id: 'k1', author: 'safar', text: 'i can not believe that my bro cheated on me.'},
]
const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes;