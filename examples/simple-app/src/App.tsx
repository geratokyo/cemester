import React from 'react';
import './App.css';
import { Cemester,ScrollAnimationHOC } from 'cemester';
import { SplashSlider } from './SplashSlider';
const App: React.FC = () => {
    return (
        <div className="App">
            <a href="#tipps">test</a>
            <Cemester
                content={CONTENT}
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
                            "animateIn":"zoomIn",
                            "offset":0
                        },
                        "content": "<h1>Guidelines</h1>",
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
                        "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
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
                        "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
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
                        "content": "<p>Lorem ipsum dolor sit amet </p>",
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
                        "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
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
                        "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
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
                    "content": "<h1>Karte</h1>",
                    "key": "k-title",
                    "parent": "k-col",
                    "type": "Text"
                }, 
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
                    "key": "k-text",
                    "parent": "k-col",
                    "type": "Text"
                }, 
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
                    "key": "k-text-1",
                    "parent": "k-col",
                    "type": "Text"
                }, 
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit:</p>",
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
                    "content": "<h1>Lichtverschmutzung</h1>",
                    "key": "l-title",
                    "parent": "l-col",
                    "type": "Text"
                }, 
                {
                    "attributes": {
                        "className": "generic__copy"
                    },
                    "content": "<p>Unsere Nächte werden immer heller, sodass es in den meisten Städten Deutschlands mittlerweile unmöglich ist, nachts noch Sterne zu beobachten. \r\n\r\nSchuld daran ist die sogenannte Lichtverschmutzung, die vom Menschen verursachte Erhellung des Himmels durch künstliches Licht. Weltweit steigt die Lichtverschmutzung pro Jahr um 2-3%, in Europa sogar um ca. 6%. \r\n\r\nDie Ursache ist die übermäßige Beleuchtung, sei es durch Straßenbeleuchtung, Werbeplakate oder der Beleuchtung von Gebäuden. So entstehen Lichtglocken, deren Ausbreitung auf Grund des Streueffektes des Lichtes bis zu 100 Kilometer weit reichen können, über den Städten. \r\n\r\nEine klare Gesetzgebung zur Verringerung der Lichtverschmutzung, welche alle oben genannten Beleuchtungsarten reguliert, gibt es in Deutschland nicht. Vor allem durch die Behauptung der LED-Technik in den vergangenen Jahren ist das Problem noch weiter zugenommen. LED-Lampen gelten zwar als energieeffizient, leuchten aber viel heller als eine herkömmliche Glühbirne und das für weniger Geld. Deswegen wird oft ein viel helleres Licht installiert, als eigentlich notwendig wäre. \r\n\r\nDie Lichtverschmutzung hat nicht nur Folgen auf die Möglichkeit, Sterne mit dem bloßen Auge zu beobachten. Die potentiellen Folgen für unsere Gesundheit sowie die Auswirkung auf unsere Umwelt und Tierwelt sind verheerend. \r\n</p>",
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
                        "content": "Obwohl künstliches Licht viele Vorteile mit sich bringt, hat es auch einen deutlichen Nachteil: Immer seltener befinden wir uns in vollständiger Dunkelheit. Und das bringt das Gleichgewicht zwischen Helligkeit und Dunkelheit, das seit 3 Milliarden Jahren das Leben auf unserem Planeten bestimmt, durcheinander. \r\n\r\nWenn man die Zeitspanne, während der wir natürlichem und künstlichem Licht ausgesetzt sind, zusammenrechnet, wird deutlich, dass der Anteil, in dem wir uns in völliger Dunkelheit befinden, immer geringer wird. Dies kann unter anderem dazu führen, dass unsere innere Uhr, die unseren Wach- und Schlafrhythmus regelt, gestört wird.\r\n\r\nZusätzlich kann der hohe Blaulichtanteil von Kunstlicht (Smartphones, Laptops, usw.) die Ausschüttung von dem Hormon Melatonin, das für die Steuerung des Wach- und Schlafrhythmusses zuständig ist, hemmen und so störend auf den Schlaf wirken. Dies wirkt sich wiederum negativ auf die Reparaturmechanismen aus, die der Körper nachts durchführt und kann langfristig ernsthafte gesundheitliche Folgen haben. \r\n",
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
                        "content": "Lichtverschmutzung hat auch direkte Auswirkungen auf die Biodiversität, denn künstliche Beleuchtung in der Nacht wirkt vor allem für viele Tierarten störend. \r\n\r\nEin Beispiel sind Insekten: Sie machen die Hälfte aller Tierarten aus und nehmen innerhalb unsere Ökosystems viele wichtige Aufgaben wahr. Nichtsdestotrotz bewirkt das künstliche Licht, dass unzählige Insektenarten massenhaft aussterben, weil sie beispielsweise die ganze Nacht um eine Straßenlaterne schwirren und dann vor Erschöpfung sterben. \r\n\r\nDoch auch andere Tierarten, wie Wirbel- und Säugetiere sowie Mikroorganismen sind von den Auswirkungen der Lichtverschmutzung betroffen. Fledermäuse, die häufig ihre Nester in alten Kirchtürmen bauen, realisieren bei einer 24-Stunden-Beleuchtung nicht mehr, dass es irgendwann Nacht ist, um auf die Jagd ihrer Beute zu gehen. Als Konsequenz verenden sie in ihren Unterschlüpfen.\r\n",
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
                        "content": "Eine Verringerung der Lichtverschmutzung wäre einfach zu verwirklichen, wenn jeder bewusster und verantwortungsvoller mit der Nutzung von Licht umgehen würde. Wir haben einige einfache Schritte aufgelistet, die auch Sie in Ihrem Alltag umsetzen können, um weniger Licht zu erzeugen:\r\n\r\n•\tAußenlicht nur nach unten strahlen lassen: Durch ein geeignetes Gehäuse kann man das Licht an die zu beleuchtende Stelle scheinen lassen. Die Beleuchtung zur Seite oder nach oben, beispielsweise das Beleuchten von Außenwänden oder Bäumen, sollte vermieden werden. \r\n•\tGlühbirnen mit gelblichem bis warmweißem Licht vorziehen: Das Lichtspektrum dieser Glühbirnen (2200 bis 2700 Kelvin – maximal 3000 Kelvin) weist viele Vorteile auf: Es verfügt über einen weniger störenden Streueffekt, hemmt die Melatonin-Produktion am geringsten und ist außerdem schonend für Insekten.\r\n•\tBlaulichtfilter einschalten: Vor allem bei der Nutzung von Laptops und Smartphones zu später Stunde ist es wichtig, den Blaulichtanteil zu minimieren.\r\n•\tAuf unnötige Beleuchtungen aufmerksam machen: Sprechen Sie Ihre Nachbarn oder die Gemeinde an, falls Ihnen in Ihrer Umgebung überflüssige Beleuchtung auffällt.\r\n\r\nWeitere Informationen finden sie auf https://www.abenteuer-sterne.de/lichtverschmutzung/. \r\n",
                        "key": "l-accordion-3-1",
                        "parent": "l-accordion-3",
                        "type": "Text"
                    }],
                    "content": "Was können wir tun, um die Lichtverschmutzung zu minimieren?",
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