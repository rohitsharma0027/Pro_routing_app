import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id:'q1', author:'Rohit Sharma', text:'Learning React is fun!'},
    { id:'q2', author:'Mohit Sharma', text:'Time is Money'},
    { id:'q3', author:'Darshan Sharma', text:'Humbleness is key to success'},
]

const AllQuotes = () =>
{
   return(
       <QuoteList quotes={DUMMY_QUOTES}/>
   )
}

export default AllQuotes;