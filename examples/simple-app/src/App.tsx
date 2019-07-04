import React from 'react';
import './App.css';
import {Cemester} from 'cemester'; 
const App: React.FC = () => {
    return (
        <div className="App">
            <Cemester 
                content={CONTENT} 
            />
        </div>
    );
}

export default App;



const CONTENT = [ {
      "animation" : "",
      "children" : [ {
        "animation" : "",
        "children" : [ {
          "animation" : "",
          "className" : "",
          "content" : "{\"type\":\"image-swapper\"}",
          "key" : "s-slider",
          "parent" : "splash",
          "type" : "SplashSlider"
        } ],
        "className" : "splash",
        "content" : "Sterne beobachten mit dem bloßen Auge... ist dies in Deutschland noch möglich? Wir haben uns mit dem Thema Lichtverschmutzung auseinandergesetzt und untersucht, wie diese uns daran hindert, Himmelsobjekte wie Sternschnuppen oder Meteoritenschauer mit dem bloßen Auge betrachten zu können. \r\n\r\nEntdecken Sie auf unserer interaktiven Karte die besten Standorte zur Sternbeobachtung in Deutschland und werden Sie mit unseren Tipps selbst zum Profi im Sternebeobachten. \r\n",
        "key" : "splash",
        "parent" : "page",
        "type" : "Section"
      }, {
        "animation" : "",
        "children" : [ {
          "animation" : "",
          "children" : [ {
            "animation" : "",
            "children" : [ {
              "animation" : "",
              "className" : "col s12",
              "content" : "",
              "key" : "t-col",
              "parent" : "t-con",
              "type" : "DivComponent"
            } ],
            "className" : "",
            "content" : "",
            "key" : "t-con",
            "parent" : "t-div",
            "type" : "Container"
          } ],
          "className" : "",
          "content" : "",
          "key" : "t-div",
          "parent" : "tipps",
          "type" : "DivComponent"
        } ],
        "className" : "",
        "content" : "",
        "key" : "tipps",
        "parent" : "page",
        "type" : "Section"
      } ],
      "className" : "",
      "content" : "",
      "key" : "page",
      "parent" : "",
      "type" : "SinglePage"
    } ]
  
  