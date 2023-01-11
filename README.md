# ExtendScript Recursive Property Looper
(*For After Effects*)

When developing for After-Effects it is often the case that we want to loop through all sub properties of a layer or a group, perhaps to find a specific property, to check if it exists, or to gather all properties of a certain type.

With this class ( `PropertyTreeLooper` ) you can do just that.



## Usage

1. Include the script in your project as a file and import it:
```jsx
$.evalFile(File("../*PATH_TO*/PropertyTreeLooper.jsx").fsName); // include the PropertyTreeLooper class
```
or simply [copy and paste the class into your script](./src/PropertyTreeLooper.jsx)


2. Create a new instance of the class:
```jsx
var looper = new PropertyTreeLooper();
```

3. set a callback for everytime a property of any kind is found:
```jsx
looper.onAny = function(prop) {
    // do something with the property
}
```

4. Execute the loop with a layer or a group as the argument:
```jsx
    looper.loop(layer);
```




### Callbacks

In the example above we used the `onAny` callback, but there are also callbacks for more specific use cases:
```jsx
    looper.onAny
     // called when any property is found

    looper.onPropertyFound
    // called when a property is found (specifically a property, not a group or a layer)

    looper.onGroupFound
    // called when a property group is found

```

See more examples in the [examples folder](./examples).



### Optimizations
If you know that the property you are looking for has been changed by the user, you can set `looper.skipUnmodified` to `true`. Skipping such properties and groups has the potential to speed up the loop significantly, which is especially useful when looping through all properties of a large number of layers.



