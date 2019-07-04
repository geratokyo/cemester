# Cemester Content Manager Library

Cemester is a library that let's you create website content and manage it by converting a JSON file into components. 

- [Installation](#installation) 
- [Interfaces](#interfaces)
- How to use Cemester
    - Cemester Syntax
    - SinglePage and SingleSectionPage
    - JSON example
    - use cases

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
|header|```?React.ReactNode```|This is the component that will appear at the top before the content Also used for a SinglePage type to control the fixed elements|
|content|```iCmsItem[]```|This is a tree structure of the content of the page|
|url|```string``` , ```(()=>string)```|This represents the current url|
|customComponents|```(item:iCmsItem)=>React.ReactNode```|A callback function that should be passed to determine the custom components of the campaign|
|screenThreshold|```?number```|This is the percentage after which a section is going to be considered in view|

----

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

----

### iImage
|Name|Type|Description|
|-----|------|---|
|altText|```?string```|Image alt text|
|imgSrc|```string```| Image source url|

---

### iCustomContent
|Name|Type|Description|
|-----|------|---|
|type|```string```|type of the custom component to be rendered|
|data|```any```|this is the data or the props to be passed to the custom component|

---

### iCmsProps
|Name|Type|Description|
|-----|------|---|
|cmsOptions|```?iCmsComponentOptions```|This is the base props interface for all the props of the other elements to extend|

----

### iCmsComponentOptions
|Name|Type|Description|
|-----|------|---|
|isInView|```?boolean``` |True if the element is in the viewport of the browser|

