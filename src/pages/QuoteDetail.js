import { useParams, Route } from "react-router";
import {Link} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () =>
{
    const params = useParams();

    const DUMMY_QUOTES = [
        { id:'q1', author:'Rohit Sharma', text:'Learning React is fun!'},
        { id:'q2', author:'Mohit Sharma', text:'Time is Money'},
        { id:'q3', author:'Darshan Sharma', text:'Humbleness is key to success'},
    ]

    const quote = DUMMY_QUOTES.find(quote=>quote.id === params.quoteId)

    if(!quote)
    {
        return <>No Quote Found!</>
    }

   return (
       <>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
            <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
        </div>
        </Route>

        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments/>
        </Route>
       </>
   )
}

export default QuoteDetail;