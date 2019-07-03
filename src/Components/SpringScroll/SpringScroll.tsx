import * as React from 'react'; 
import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars';
import * as Rebound from 'rebound';


export interface SpringScrollProps extends ScrollbarProps{
    className?:string;
}

export interface SpringScrollState{

}

export class SpringScroll extends React.Component<SpringScrollProps, SpringScrollState>{
    springSystem
    spring
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
        return (this.refs.scrollbars as Scrollbars).getScrollTop();
    }

    getScrollHeight() {
        return (this.refs.scrollbars as Scrollbars).getScrollHeight();
    }


    scrollTop(top) {
        const { scrollbars } = this.refs;
        top -= 70;
        const scrollTop = (scrollbars as Scrollbars).getScrollTop();
        this.spring.setCurrentValue(scrollTop).setAtRest();
        this.spring.setEndValue(top);
    }

    handleSpringUpdate(spring) {
        const { scrollbars } = this.refs;
        const val = spring.getCurrentValue();
        (scrollbars as Scrollbars).scrollTop(val);
    }

    render() {
        return (
            <Scrollbars
                {...this.props}
                ref="scrollbars"/>
        );
    }
}
