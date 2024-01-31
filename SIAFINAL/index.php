<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <form action="" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <button type="submit">Login</button>
        </form>

        <?php
        // Check if form is submitted
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Get input values
            $username = $_POST["username"];
            $password = $_POST["password"];

            // Make API request to login
            $api_url = "http://your-api-domain/api/login.php";  // Replace with your actual API endpoint
            $data = array("username" => $username, "password" => $password);
            $options = array(
                'http' => array(
                    'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                    'method'  => 'POST',
                    'content' => http_build_query($data),
                ),
            );
            $context  = stream_context_create($options);
            $result = file_get_contents($api_url, false, $context);

            // Handle API response
            if ($result === FALSE) {
                // Handle error
                echo "Error connecting to API.";
            } else {
                // Process API response (e.g., display a message)
                echo $result;
            }
        }
        ?>
    </div>
</body>
</html>
