# Cemester Content Manager Library

Cemester is a library that let's you create website content and manage it by converting a JSON file into components. 

- [Installation](#installation) 
- [Interfaces](#interfaces)
- How to use Cemester
    - [Data Structure](#data-structure)
    - [JSON example](#json-example)
- [Examples](#examples)
- Contributing

## Installation
To install Cemester to your project run: 
```
npm i cemester --save
```

## Interfaces
### iPageProps
|Name|Type|Description|
|-----|------|---|
|className|```?string```|Classname of the parent element|
|content|```iCmsItem[]```|This is a tree structure of the content of the page|
|url|```string``` , ```(()=>string)```|This represents the current url|
|customComponents|```(item:iCmsItem)=>React.ReactNode```|A callback function that should be passed to determine the custom components of the campaign|
|screenThreshold|```?number```|This is the percentage after which a section is going to be considered in view|



### iCmsItem
The interface that the JSON with the tree structure should follow
|Name|Type|Description|
|-----|------|---|
|key|```string```|distict element identifier|
|type|```string```|type of the component that should be rendered for the node|
|parent|```?string```| distict element identifier of the parent element|
|content|```?any``` , ```iImage``` , ```iCustomContent```|the content of the current node to be rendered in a component|
|className|```?string```|the className that should be given to the current node's HTML tag|
|animation|```?string```|the className for the animations to be added on a current HTML tag| 
|children|```?iCmsItem[]```|Child elements of the current node|



### iImage
|Name|Type|Description|
|-----|------|---|
|altText|```?string```|Image alt text|
|imgSrc|```string```| Image source url|



### iCustomContent
|Name|Type|Description|
|-----|------|---|
|type|```string```|type of the custom component to be rendered|
|data|```any```|this is the data or the props to be passed to the custom component|



### iCmsProps
|Name|Type|Description|
|-----|------|---|
|cmsOptions|```?iCmsComponentOptions```|This is the base props interface for all the props of the other elements to extend|


### iCmsComponentOptions
|Name|Type|Description|
|-----|------|---|
|isInView|```?boolean``` |True if the element is in the viewport of the browser|

### iCmsAttributes
extends [iScrollAnimation](#iScrollAnimation)

|Name|Type|Description|
|-----|------|---|
|className|```?string``` |the className that should be given to the current node's HTML tag|

### iScrollAnimation

|Name|Type|Description|
|-----|-----|---------|
|offset|```?number```|The "viewport" is by default 150 pixels from the top and bottom of the screen. When part of an element is within the "viewport", animateIn is triggered. When no part of the element is in the "viewport", animateOut is triggered. This size of the "viewport" can be overridden by setting the offset property.|
|animateIn|```?string```|Any css animation defined against a class, be it from animate.css or an animation that you have created yourself. The Animation triggers when the element enters the "viewport" (see offset property for more details on this).|
|animateOut|```?string```|Any css animation defined against a class, be it from animate.css or an animation that you have created yourself. The Animation triggers when the element is leaving the "viewport" (see offset property for more details on this).|
|duration|```?number```|Animation duration in seconds.|
|initiallyVisible|```?boolean```|Whether the element should be visible to begin with or not.|
|delay|```?number```|How long to delay the animation for (in milliseconds) once it enters or leaves the view.|
|animateOnce|```?boolean```|Whether the element should only animate once or not.|
|style|```? React.CSSProperties```|A style object can be assigned to any ScrollAnimation component and will be passed to the rendered dom element. Its probably best to avoid manually setting animationDuration or opacity as the component will modify those attributes.|
|scrollableParentSelector|```?string```|By default the code checks to see if the element is visible within the window. This can be changed to any other parent element of the ScrollAnimation by adding a css selector pointing to the parent that you wish to use.|
|animatePreScroll|```?boolean```|By default if a ScrollAnimation is in view as soon as a page loads, then the animation will begin. If you don't want the animation to being until the user scrolls, then set this to false.|
|afterAnimatedIn|```?(e:any)=>void```|Callback function to run once the animateIn animation has completed. Receives the visibility of the element at time of execution.|
|afterAnimatedOut|```?(e:any)=>void```|Callback function to run once the animateOut animation has completed. Receives the visibility of the element at time of execution. |

----
## How to use Cemester

### Data Structure

Cemester will convert a json file into HTML Dom elements. By recursively going through a nested tree structure Cemester will lay down the appropriate components. All the tree data structure should start with one of the following types. 

- __SinglePage__ : If the parent JSON object type is set to SinglePage then all the sections will be rendered in one view
- __SingleSectionPage__ : If the parent JSON object type is set to SingleSectionPage then only one section will be rendered on the view based on the url key. 

These two components can only have type:"Section" as their children. Theses section are basically what split your content sections. Sections should be able to stand on their own.  

```
            SinglePage
            /         \
        Section(1)    Section(2)
        /      \        /       \
     el(1)    el(2)   el(3)     el(4)
       ⋮        ⋮       ⋮          ⋮


        SingleSectionPage
            /         \
        Section(1)    Section(2)
        /      \        /       \
     el(1)    el(2)   el(3)     el(4)
       ⋮        ⋮       ⋮          ⋮
```

Your JSON should implement the [iCmsItem](#iCmsItem) interface. Below is an example of a SingleSection JSON with one section

----

### JSON example
```JSON
[{
    "key":"page", 
    "content":"", 
    "parent":"", 
    "type":"SinglePage", 
    "attributes":{
        "className":""
    }, 
    "children":[
        {
            "key":"section1", 
            "content":"", 
            "parent":"", 
            "type":"Section", 
            "attributes":{
                "className":"section-1"
            }
        }
    ]
}]
```

----
### Examples

You can find some examples and use cases in the following repositories
- [Animation Example](https://github.com/geratokyo/cemester/tree/master/examples/animation)
- [Fixed header Example](https://github.com/geratokyo/cemester/tree/master/examples/fixed-header)
- [Progress Bar Example](https://github.com/geratokyo/cemester/tree/master/examples/progress-bar)
- [Simple App Example](https://github.com/geratokyo/cemester/tree/master/examples/simple-app)