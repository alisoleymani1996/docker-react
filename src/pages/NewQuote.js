import {useHistory} from "react-router-dom";
import QuoteForm from "../componentRouter/quotes/QuoteForm";

const NewQuote = (props) => {
    const history = useHistory()
    const quoteAddHandler = (formData) => {

        console.log(formData)
        history.push('/quotes')
    }
    return (
        <QuoteForm onAddQuote={quoteAddHandler}/>
    )
}

export default NewQuote;