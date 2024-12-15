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

# Scroll animation
Difference between nth-child & nth-of-type

1) nth-of-type

EXAMPLE
lets say we have list
<ul>
    <li>one</li>
    <li>two</li>  this get color
    <li>three</li>
    <li>four</li>
</ul>

-> li:nth-of-type(2){color: red;} -> this will change <li>two</li> in red color 

2) nth-child

EXAMPLE

-> li:nth-child(2){color: red;} -> this will change <li>two</li> in red color 

<ul>
    <p>I am first child</p>
    <li>one</li> this gets color red
    <li>two</li>
    <li>three</li>
    <li>four</li>
</ul>

Complex example

-> li:nth-child(2){color: red;} -> this will change <li>two</li> in red color 
<ul>
    <p>I am first child</p>
     <p>I am second child</p>
    <li>one</li> this gets color red NOTE: this is thied child & there is no second child as a list
    <li>two</li>
    <li>three</li>
    <li>four</li>
</ul>

NOTE:
he Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the
SYNTAX->getBoundingClientRect()

->he returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. Properties other than width and height are relative to the top-left of the viewport.