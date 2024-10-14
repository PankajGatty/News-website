import React, { useEffect, useState } from 'react';
import Card from './Card';
import southwoodLogo from './southwood.jpeg';


const Newsapp = () => {
    const API_KEY="56be06bb57494300a97f36ef11bb1586";
    
    // State for search query (API call) and input value (search bar)
    const [search, setSearch] = useState("india");
    const [inputValue, setInputValue] = useState("");  // New state for the input field
    const [newsData, setNewsData]=useState(null);

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }

    useEffect(() => {
        getData();
    }, [search]);  // Fetch news every time `search` state changes
    
    const handleInput = (e) => {
        setInputValue(e.target.value);  // Update the input field value
    }

    const handleSearch = () => {
        setSearch(inputValue);  // When the search button is clicked, update the search state
    }

    const userInput = (category) => {
        setSearch(category);  // Set the search query based on category
        setInputValue("");    // Clear the input field when a category is selected
    }

    return (
        <div>
            <nav>
            <div className="title">
            <img src={southwoodLogo} alt="Southwood Talkies Logo" className="logo" />
                    {/* <h1 className="gradient-text">Southwood Talkies</h1> */}
                </div>
                <ul>
                    <a>All News</a>
                    <a>Trending</a>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={inputValue} onChange={handleInput}/>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay updated with trendy news</p>
            </div>

            <div className='categoryBtn'>
                <button onClick={() => userInput("sports")}>Sports</button>
                <button onClick={() => userInput("politics")}>Politics</button>
                <button onClick={() => userInput("entertainment")}>Entertainment</button>
                <button onClick={() => userInput("health")}>Health</button>
                <button onClick={() => userInput("fitness")}>Fitness</button>
            </div>

            <div>
                {newsData ? <Card data={newsData}/> : null} 
            </div>
        </div>
    )
}

export default Newsapp;
