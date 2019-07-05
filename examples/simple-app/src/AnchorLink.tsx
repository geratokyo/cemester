import * as React from 'react';


class AnchorLink extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.smoothScroll = this.smoothScroll.bind(this)
    }

    componentDidMount() {
    }

    smoothScroll(e: React.SyntheticEvent<any>) {
        e.preventDefault()
        let offset = () => 0
        if (typeof this.props.offset !== 'undefined') {
            if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
                offset = this.props.offset
            } else {
                offset = () => parseInt(this.props.offset)
            }
        }
        const id = e.currentTarget.getAttribute('href').slice(1)
        const $anchor = document.getElementById(id);
        if ($anchor) {
            const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
            window.scroll({
                top: offsetTop - offset(),
                behavior: 'smooth'
            })
            setTimeout(()=>{
                window.location.href="#" + id;
            }, 700)
        }
        if (this.props.onClick) { this.props.onClick(e) }
    }

    
    render() {
        const { offset, href, ...rest } = this.props;
        return (
            <a href={href} {...rest} onClick={this.smoothScroll}>
                {
                    this.props.children
                }
            </a>
        )
    }
}

export default AnchorLink