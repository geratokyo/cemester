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
                                    <AnchorLink href="#tipps">test</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink href="#karte">karte</AnchorLink>
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
                "offset": 0
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
                            "className": "generic__subtitle"
                        },
                        "content": "<h2> Subtitle </h2>",
                        "key": "t-subtitle",
                        "parent": "t-col",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__copy"
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
            },
            {
                "attributes": {
                    "className": "generic__image"
                },
                "content": {
                    "altText": "",
                    "imgSrc": "img/tipps.jpg"
                },
                "key": "t-img",
                "parent": "t-div",
                "type": "Image"
            }],
            "content": "",
            "key": "t-div",
            "parent": "tipps",
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
                            "className": "generic__copy"
                        },
                        "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
                        "key": "t-copy-1",
                        "parent": "t-col-1",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__list"
                        },
                        "content": "<ul>\n<li><p>two</p></li>\n<li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n</ul>",
                        "key": "t-list",
                        "parent": "t-col-1",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__copy"
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
            },
            {
                "attributes": {
                    "className": "generic__image"
                },
                "content": {
                    "altText": "",
                    "imgSrc": "img/tipps-2.jpg"
                },
                "key": "t-img-1",
                "parent": "t-div-1",
                "type": "Image"
            }],
            "content": "",
            "key": "t-div-1",
            "parent": "tipps",
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
                            "className": "generic__copy"
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
            },
            {
                "attributes": {
                    "className": "generic__image"
                },
                "content": {
                    "altText": "",
                    "imgSrc": "img/tipps-3.jpg"
                },
                "key": "t-img-2",
                "parent": "t-div-2",
                "type": "Image"
            }],
            "content": "",
            "key": "t-div-2",
            "parent": "tipps",
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
                            "className": "generic__copy"
                        },
                        "content": "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>",
                        "key": "t-copy-4",
                        "parent": "t-col-3",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__list"
                        },
                        "content": "<ul>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n<li><p>two</p></li>\n</ul>",
                        "key": "t-list-2",
                        "parent": "t-col-3",
                        "type": "Text"
                    },
                    {
                        "attributes": {
                            "className": "generic__copy"
                        },
                        "content": "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
                        "key": "t-copy-5",
                        "parent": "t-col-3",
                        "type": "Text"
                    },
                    {
                        "content": "",
                        "key": "t-hr-3",
                        "parent": "t-col-3",
                        "type": "Hr"
                    }],
                    "content": "",
                    "key": "t-col-3",
                    "parent": "t-con-3",
                    "type": "DivComponent"
                }],
                "content": "",
                "key": "t-con-3",
                "parent": "t-div-3",
                "type": "Container"
            },
            {
                "attributes": {
                    "className": "generic__image"
                },
                "content": {
                    "altText": "",
                    "imgSrc": "img/tipps-4.jpg"
                },
                "key": "t-img-3",
                "parent": "t-div-3",
                "type": "Image"
            }],
            "content": "",
            "key": "t-div-3",
            "parent": "tipps",
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
                            "className": "generic__copy"
                        },
                        "content": "<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>\n<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally </p>",
                        "key": "t-copy-7",
                        "parent": "t-col-4",
                        "type": "Text"
                    },
                    {
                        "content": "",
                        "key": "t-hr-4",
                        "parent": "t-col-4",
                        "type": "Hr"
                    }],
                    "content": "",
                    "key": "t-col-4",
                    "parent": "t-con-4",
                    "type": "DivComponent"
                }],
                "content": "",
                "key": "t-con-4",
                "parent": "t-div-4",
                "type": "Container"
            },
            {
                "attributes": {
                    "className": "generic__image"
                },
                "content": {
                    "altText": "",
                    "imgSrc": "img/tipps-5.jpg"
                },
                "key": "t-img-4",
                "parent": "t-div-4",
                "type": "Image"
            }],
            "content": "",
            "key": "t-div-4",
            "parent": "tipps",
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
                            "className": "generic__copy"
                        },
                        "content": "<p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p>",
                        "key": "t-copy-6",
                        "parent": "t-col-5",
                        "type": "Text"
                    },
                    {
                        "content": "",
                        "key": "t-hr-5",
                        "parent": "t-col-5",
                        "type": "Hr"
                    }],
                    "content": "",
                    "key": "t-col-5",
                    "parent": "t-con-5",
                    "type": "DivComponent"
                }],
                "content": "",
                "key": "t-con-5",
                "parent": "t-div-5",
                "type": "Container"
            }],
            "content": "",
            "key": "t-div-5",
            "parent": "tipps",
            "type": "DivComponent"
        }],
        "content": "",
        "key": "tipps",
        "parent": "page",
        "type": "Section"
    },
    {
        "children": [{
            "children": [{
                "attributes": {
                    "className": "col s12"
                },
                "children": [{
                    "attributes": {
                        "className": "generic__title"
                    },
                    "content": "<h1>Second</h1>",
                    "key": "k-title",
                    "parent": "k-col",
                    "type": "Text"
                },
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>",
                    "key": "k-text",
                    "parent": "k-col",
                    "type": "Text"
                },
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p>",
                    "key": "k-text-1",
                    "parent": "k-col",
                    "type": "Text"
                },
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>",
                    "key": "k-text-2",
                    "parent": "k-col",
                    "type": "Text"
                },
                {
                    "content": "MAP",
                    "key": "k-custom",
                    "parent": "k-col",
                    "type": "Text"
                }],
                "content": "",
                "key": "k-col",
                "parent": "k-con",
                "type": "DivComponent"
            }],
            "content": "",
            "key": "k-con",
            "parent": "karte",
            "type": "Container"
        }],
        "content": "",
        "key": "karte",
        "parent": "page",
        "type": "Section"
    },
    {
        "children": [{
            "children": [{
                "attributes": {
                    "className": "col s12"
                },
                "children": [{
                    "attributes": {
                        "className": "generic__title"
                    },
                    "content": "<h1>Third</h1>",
                    "key": "l-title",
                    "parent": "l-col",
                    "type": "Text"
                },
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>",
                    "key": "l-text",
                    "parent": "l-col",
                    "type": "Text"
                },
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
                    "key": "l-text-1",
                    "parent": "l-col",
                    "type": "Text"
                },
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
                    "key": "l-text-2",
                    "parent": "l-col",
                    "type": "Text"
                },
                {
                    "children": [{
                        "content": "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains",
                        "key": "l-accordion-1-1",
                        "parent": "l-accordion-1",
                        "type": "Text"
                    }],
                    "content": "Gesundheitliche Folgen",
                    "key": "l-accordion-1",
                    "parent": "l-col",
                    "type": "Text"
                },
                {
                    "children": [{
                        "content": "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains",
                        "key": "l-accordion-2-1",
                        "parent": "l-accordion-2",
                        "type": "Text"
                    }],
                    "content": "Ökologische Folgen",
                    "key": "l-accordion-2",
                    "parent": "l-col",
                    "type": "Text"
                },
                {
                    "children": [{
                        "content": "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
                        "key": "l-accordion-3-1",
                        "parent": "l-accordion-3",
                        "type": "Text"
                    }],
                    "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
                    "key": "l-accordion-3",
                    "parent": "l-col",
                    "type": "Text"
                }],
                "content": "",
                "key": "l-col",
                "parent": "l-con",
                "type": "DivComponent"
            }],
            "content": "",
            "key": "l-con",
            "parent": "lichtverschmutzung",
            "type": "Container"
        }],
        "content": "",
        "key": "lichtverschmutzung",
        "parent": "page",
        "type": "Section"
    }],
    "content": "",
    "key": "page",
    "parent": "",
    "type": "SinglePage"
}]