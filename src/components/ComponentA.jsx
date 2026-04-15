function ComponentA() {
    const info = [
        {id: 1, name: 'Adrian', age: 30},
        {id: 2, name: 'Roselyn', age: 30},
        {id: 3, name: 'Neslie', age: 28},
    ]
    return ( 
        <div>
            {info.map(item => (
                <div key={item.id} style={{backgroundColor: 'red'}}>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                </div>
            ))}
        </div>
     );
}

export default ComponentA;