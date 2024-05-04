import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../componentRouter/comments/Comments";
import HighlightedQuote from "../componentRouter/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'm1', author: 'Ali', text: 'to improve is to change.'},
    {id: 'd1', author: 'mohammed', text: 'summer is a bitch.'},
    {id: 'k1', author: 'safar', text: 'i can not believe that my bro cheated on me.'},
]
const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    console.log(match)
    const quoteData = DUMMY_QUOTES.find(q => q.id === params.quoteId)
    return (
        <Fragment>
            <HighlightedQuote author={quoteData.author} text={quoteData.text}/>
            <Route path={`${match.path}`} exact={true}>
                <div className={'centered'}>
                    <Link className={'btn--flat'} to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;