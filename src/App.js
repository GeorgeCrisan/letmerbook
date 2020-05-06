import React , {useState, useEffect} from 'react';
import Banner from './Components/Banner';
import SearchForm from './Components/SearchForm';
import BooksResults from './Components/BooksResults';
import axios from 'axios';

function App() {

  const [state, setState] = useState({searchTerms: "Atlas Shrugged",
     page: "0",
    maxResults: "6",
    typeText: "free-ebooks",
    type: false
  });
 
  

  useEffect(()=>{

    let generateUrl = ()=> {
      let statenow = state;
      let url = 'https://www.googleapis.com/books/v1/volumes?',
        qString = {
          q: statenow.searchTerms,
          maxResults: statenow.maxResults,
          startIndex: statenow.page,
          apikey: process.env.REACT_APP_API_KEY
        };
  
        for(let el in qString) {
            url += el === 'q' ? (el + '=' + qString[el]) : ('&' + el + '=' + qString[el]); 
        }
  
        return url;
    };

    let fetchBooks = ()=>{
      return axios.get(generateUrl());
    };

    fetchBooks().then((result)=>{
      let data = result.data;
      console.log(result);
      console.log(data);
    }).catch((error)=>{
      console.log('Error', error);
    });

 
  },[state]);

  return (
    <div className="App">
      <>  
        <Banner />
        <SearchForm setState={setState} />
        <BooksResults />
      </>
    </div>
  );
}

export default App;
