function AboutMe() {
    const city = "Hingham";
    const state = 'MA';
    const visitedLocations = ['Arizona', 'Vermont', 'New York']
    return(
        <div>
            <p>Home town:  {city}, {state}</p>
            <ul>
                <li>{visitedLocations[0]}</li>
                <li>{visitedLocations[1]}</li>
                <li>{visitedLocations[2]}</li>
            </ul>
        </div>
    )
}

export default AboutMe;