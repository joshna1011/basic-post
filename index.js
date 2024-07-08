document.getElementById('postForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    });
    
    const result = await response.json();
    
    document.getElementById('responseContainer').innerHTML = `
        <h2>Response</h2>
        <pre>${JSON.stringify(result, null, 2)}</pre>
    `;
    document.getElementById('postForm').reset()
});
