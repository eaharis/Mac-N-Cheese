import React, { Component, useContext } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import "react-shepherd/dist/css/"

const steps = [
    {
        id: 'intro',
        attachTo: '.first-element bottom',
        beforeShowPromise: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    window.scrollTo(0, 0);
                    resolve();
                }, 500);
            });
        },
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Exit',
                type: 'cancel'
            },
            {
                classes: 'shepherd-button-primary',
                text: 'Back',
                type: 'back'
            },
            {
                classes: 'shepherd-button-primary',
                text: 'Next',
                type: 'next'
            }
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        highlightClass: 'highlight',
        scrollTo: false,
        cancelIcon: {
            enabled: true,
        },
        title: 'Welcome to React-Shepherd!',
        text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
        when: {
            show: () => {
                console.log('show step');
            },
            hide: () => {
                console.log('hide step');
            }
        }
    },
    // ...
];

const tourOptions = {
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        }
    },
    useModalOverlay: true
};

function Button() {
    const tour = useContext(ShepherdTourContext);

    return (
        <button className="button dark" onClick={tour.start}>
            Start Tour
        </button>
    );
}

class Test extends Component {
    render() {
        return (
            <div>
                <ShepherdTour steps={steps} tourOptions={tourOptions}>
                    <Button />
                </ShepherdTour>
            </div>
        );
    }
}

export default Test;