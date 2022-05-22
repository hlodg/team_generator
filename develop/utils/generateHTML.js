
function generateHTML(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <title>My Team</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo center">My Team</a>
            </div>
          </nav>
    
        <div class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-content">
                <h1>Manager ${answers.name}</h1>
                  <ul>
                    <li>Id: ${answers.id}</li>
                    <li>Email: ${answers.email}</li>
                    <li>Office Number: ${answers.officeNumber}</li>
                  </ul>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
    </body>
    </html>`
}

module.exports = generateHTML