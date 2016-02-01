# Click Frequency
This JavaScript will trigger a function if the click frequency is not high enough.

<h2>How to use?</h2>
<ul>
  <li>Assign the function clickFunction() to element that should be clicked.</li>
</ul>

```javascript
  clickFunction();
```

<ul>
  <li>Change minClickSpeed to the time (in milliseconds) the timout should wait until trigger the clickTooSlow() function</li>
</ul>

```javascript
  var minClickSpeed = 1000;
```

<ul>
  <li>Put your script in clickTooSlow()</li>
</ul>

```javascript
  function clickTooSlow() {
    //Put your code here...
  }
```

<h2>When to use?</h2>
I wrote this script when building a "clicker game" where the user had to click the screen in a certain speed to not loose any points. This is where I am using it, but I am sure you can come up with another reason to use this script in your project.
