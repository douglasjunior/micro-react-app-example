import moment from 'moment';

function MomentExample() {
    const element = document.createElement('div');

    element.innerHTML = `Hello moment: ${moment().toString()}`;

    return element;
}

export default MomentExample;
