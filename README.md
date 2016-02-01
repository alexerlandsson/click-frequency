# Click Frequency
This JavaScript will trigger a function if the click frequency is not high enough.

<h2>Quick Start</h2>
**1. Assign the function clickFunction() to element that should be clicked.**

```javascript
  clickFunction();
```

**2. Change minClickSpeed to the time (in milliseconds) the timout should wait until trigger the clickTooSlow() function.**

```javascript
  var minClickSpeed = 1000;
```

**3. Put your code that should be triggered if click frequency is too low inside the clickTooSlow() function.**

```javascript
  function clickTooSlow() {
    //Put your code here...
  }
```

<h2>When should I use this?</h2>
I wrote this script when building a "clicker game" where the user had to click the screen in a certain speed to not loose any points. This is where I am using it, but I am sure you can come up with another reason to use this script in your project.
