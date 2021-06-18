function htmlquery(membersArr) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>Team Tracker</title>
</head>
<body>
    <header class='header'>
        <h1>My Team</h1>
        <div>${membersArr[0].name}</div>
    </header>
    
</body>
</html>`
}

module.exports = htmlquery;