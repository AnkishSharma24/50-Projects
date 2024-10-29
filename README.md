# Extension 
Auto Rename Tag
Bracket Pair colorizer
Prettier Code formatter
Live Preview
Using CDN link from Cdnjs.com font-awesome
Google Fonts - Roboto 400

# Progress Steps

-> While using before in below code we have to use content for it to show the changes .
.progress-container::before{
    content: "";
}


# Rotating Navigation
- li + li what it does is apply css just after main li to the child
nav ul li + li{
    margin-left: 15px;
}

- same as above here li + li becomes the parent
nav ul li + li + li{
    margin-left: 30px;
}

- What below code does it adds .circle to .container.show-nav when the changes are made for eventListeners.

.container.show-nav .circle{
transform: rotate(-70deg);
}
