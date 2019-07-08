import React from 'react';
import './App.css';
import { Cemester, ScrollAnimationHOC } from 'cemester';
import { SplashSlider } from './SplashSlider';
import AnchorLink from './AnchorLink';

class App extends React.Component<any, any>{
    cemesterEl:any;

    render() {
        return (
            <div className="App"
                ref={e => this.cemesterEl = e}
            >
                <Cemester
                    content={CONTENT}
                    header={
                        <header>
                            <ul>
                                <li>
                                    <AnchorLink href="#first">First</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#second">Second</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#third">Third</AnchorLink>
                                </li>
                            </ul>
                        </header>
                    }
                    customComponents={(e) => {
                        switch (e.type) {
                            case "Hr":
                                return <hr />
                            case "SplashSlider":
                                let C = ScrollAnimationHOC(SplashSlider);
                                return <C item={e} />
                            default:
                                break;
                        }
                        return null
                    }}
                />
            </div>
        );
    }
}

export default App;


const CONTENT = [{
    "children": [{
        "attributes": {
            "className": "splash",
        },
        "children": [{
            "content": "{\"type\":\"image-swapper\"}",
            "key": "s-slider",
            "parent": "splash",
            "type": "SplashSlider",
            "attributes": {
                "className": "splash",
                "animateIn": "zoomIn",
                "offset": 0,
                "animateOnce":true
            },
        }],
        "content": "",
        "key": "splash",
        "parent": "page",
        "type": "Section"
    },
    {
        "attributes": {
            "className": "splash",
        },
        "children": [{
            "children": [{
                "children": [{
                    "attributes": {
                        "className": "col s12"
                    },
                    "children": [{
                        "attributes": {
                            "className": "generic__title",
                            "animateIn": "zoomIn",
                            "offset": 0
                        },
                        "content": "<h1>First</h1>",
                        "key": "t-title",
                        "parent": "t-col",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__subtitle",
                            "animateIn": "zoomIn",
                            "offset": 100,
                            "animateOut": "zoomOut"
                        },
                        "content": "<h2> Subtitle </h2>",
                        "key": "t-subtitle",
                        "parent": "t-col",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__copy",
                            "animateIn": "slideInLeft",
                            "offset": 150,
                            "animateOut": "slideOutRight"
                        },
                        "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad provident consequatur molestias enim deleniti voluptatem id ipsam omnis, modi fugit, beatae quod tempore itaque eaque obcaecati magnam impedit vero! Soluta!</p>",
                        "key": "t-copy",
                        "parent": "t-col",
                        "type": "Text"
                    },
                    {
                        "content": "",
                        "key": "t-hr",
                        "parent": "t-col",
                        "type": "Hr"
                    }],
                    "content": "",
                    "key": "t-col",
                    "parent": "t-con",
                    "type": "DivComponent"
                }],
                "content": "",
                "key": "t-con",
                "parent": "t-div",
                "type": "Container"
            }],
            "content": "",
            "key": "t-div",
            "parent": "first",
            "type": "DivComponent"
        },
        {
            "children": [{
                "children": [{
                    "attributes": {
                        "className": "col s12"
                    },
                    "children": [{
                        "attributes": {
                            "className": "generic__copy",
                            "animateIn": "bounce",
                            "offset": 100,
                            "animateOut": "zoomOut"
                        },
                        "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
                        "key": "t-copy-1",
                        "parent": "t-col-1",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__list",
                            "animateIn": "fadeIn",
                            "offset": 200,
                            "animateOut": "fadeOut",
                            "duration":0.5
                        },
                        "content": "<ul>\n<li><p>two</p></li>\n<li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n</ul>",
                        "key": "t-list",
                        "parent": "t-col-1",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__copy",
                            "animateIn": "fadeInUp",
                            "offset": 240,
                            "animateOut": "fadeOutDown",
                        },
                        "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>",
                        "key": "t-copy-2",
                        "parent": "t-col-1",
                        "type": "Text"
                    },
                    {
                        "content": "",
                        "key": "t-hr-1",
                        "parent": "t-col-1",
                        "type": "Hr"
                    }],
                    "content": "",
                    "key": "t-col-1",
                    "parent": "t-con-1",
                    "type": "DivComponent"
                }],
                "content": "",
                "key": "t-con-1",
                "parent": "t-div-1",
                "type": "Container"
            }],
            "content": "",
            "key": "t-div-1",
            "parent": "first",
            "type": "DivComponent"
        },
        {
            "children": [{
                "children": [{
                    "attributes": {
                        "className": "col s12"
                    },
                    "children": [{
                        "attributes": {
                            "className": "generic__copy",
                            "animateIn": "fadeInDown",
                            "offset": 200,
                            "animateOut": "fadeOutDown",
                            
                        },
                        "content": "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>",
                        "key": "t-copy-3",
                        "parent": "t-col-2",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__list"
                        },
                        "content": "<ul>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n</ul>",
                        "key": "t-list-1",
                        "parent": "t-col-2",
                        "type": "Text"
                    },
                    {
                        "content": "",
                        "key": "t-hr-2",
                        "parent": "t-col-2",
                        "type": "Hr"
                    }],
                    "content": "",
                    "key": "t-col-2",
                    "parent": "t-con-2",
                    "type": "DivComponent"
                }],
                "content": "",
                "key": "t-con-2",
                "parent": "t-div-2",
                "type": "Container"
            }],
            "content": "",
            "key": "t-div-2",
            "parent": "first",
            "type": "DivComponent"
        }],
        "content": "",
        "key": "first",
        "parent": "page",
        "type": "Section"
    }],
    "content": "",
    "key": "page",
    "parent": "",
    "type": "SinglePage"
}]