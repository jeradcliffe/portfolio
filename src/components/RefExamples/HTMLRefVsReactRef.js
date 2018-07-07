import React from 'react';

class Person extends React.Component {
state = {
    sayHello: false,
};
sayHello()
{
    this.setState({
        sayHello: true,
    });
}
render()
{
    if (this.state.sayHello) {
        return <div {...this.props}>Hello</div>;
    }

    return <div {...this.props}>'I am a person, I think..'</div>;
}
}

class HTMLRefVsReactRef extends React.Component {
    setPersonRef = ref => {
        this.personRef = ref;

        // When the ref changes it will firstly be set to null
        if (this.personRef) {
            // personRef is an instance of the Person class
            this.personRef.sayHello();
        }
    };
    setDivRef = ref => {
        this.divRef = ref;

        if (this.divRef) {
            // div ref is a HTMLElement
            this.divRef.style.backgroundColor = 'lightgreen';
        }
    };

    render() {
        return (
            <React.Fragment>
                <Person ref={this.setPersonRef}/>
                <div ref={this.setDivRef}>hi there</div>
            </React.Fragment>
        );
    }
}

export default HTMLRefVsReactRef;
