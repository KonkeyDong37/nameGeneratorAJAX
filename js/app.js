document.querySelector('#generate-names').addEventListener('submit', loadNames);




// Execute the function to query the API
function loadNames(e) {
    e.preventDefault();
    

    // Read the valuesfrom the form and create the variables
    const origin = document.getElementById('country').value,
          genre = document.getElementById('genre').value,
          amount = document.getElementById('quantity').value;

    // Build the URL
    let url = 'http://uinames.com/api/?';

    // Read the origin and append to the irl
    if(origin !== '') {
        url += `region=${origin}&`;
    }

    // Read the genre and append to the irl
    if(genre !== '') {
        url += `gender=${genre}&`;
    }

    // Read the amount and append to the irl
    if(amount !== '') {
        url += `amount=${amount}&`;
    }

    // Ajax call
    const xhr = new XMLHttpRequest();

    //Open the connection
    xhr.open('GET', url, true);

    // Execute the function
    xhr.onload = function() {
        if(this.status === 200) {
            const names = JSON.parse( this.responseText );

            // Insert into html

            let html = '<h2>Generated Names</h2>';
            html += '<ul class="list">';

            names.forEach(item => {
                html += `
                    <li>${item.name}</li>
                `
            });

            html += '</ul>'

            document.querySelector('#result').innerHTML = html;
        
        }
    }

    // Send the request
    xhr.send();
    
}