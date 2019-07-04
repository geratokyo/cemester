import * as React from 'react'; 
import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars';
import * as Rebound from 'rebound';


export interface SpringScrollProps extends ScrollbarProps{
    className?:string;
}

export interface SpringScrollState{

}

export class SpringScroll extends React.Component<SpringScrollProps, SpringScrollState>{
    springSystem;
    spring;
    scrollbars:Scrollbars;
    constructor(props, ...rest) {
        super(props, ...rest);
        this.handleSpringUpdate = this.handleSpringUpdate.bind(this);
    }

    componentDidMount() {
        this.springSystem = new Rebound.SpringSystem();
        this.spring = this.springSystem.createSpring();
        this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
    }

    componentWillUnmount() {
        this.springSystem.deregisterSpring(this.spring);
        this.springSystem.removeAllListeners();
        this.springSystem = undefined;
        this.spring.destroy();
        this.spring = undefined;
    }
    

    getScrollTop() {
        return this.scrollbars.getScrollTop();
    }

    getScrollHeight() {
        return this.scrollbars.getScrollHeight();
    }


    scrollTop(top) {
        const { scrollbars } = this.refs;
        top -= 70;
        const scrollTop = this.scrollbars.getScrollTop();
        this.spring.setCurrentValue(scrollTop).setAtRest();
        this.spring.setEndValue(top);
    }

    handleSpringUpdate(spring) {
        const { scrollbars } = this.refs;
        const val = spring.getCurrentValue();
        this.scrollbars.scrollTop(val);
    }

    render() {
        return (
            <Scrollbars
                {...this.props}
                ref={e => this.scrollbars = e}/>
        );
    }
}
