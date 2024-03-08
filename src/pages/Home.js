import  { useCollection } from '../hooks/useCollection'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useAuthContext } from '../hooks/useAuthContext'



export default function Home() {

    const { user } = useAuthContext()
    const { documents: books, error} = useCollection(
        "books",
        ["uid", '==', user.uid],
        ["createdAt", "desc"]
    )
    

    return (
        <div className="App">
            {error && <p>{error}</p>}
        {books && <BookList books={books} />}
        <BookForm uid={user.uid}/>
        </div>
    );
}
