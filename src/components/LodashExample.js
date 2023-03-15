import join from 'lodash/join';

function LodashExample() {
    const element = document.createElement('div');

    element.innerHTML = join(['Hello Fábio', 'webpack'], ' ');

    return element;
}

export default LodashExample;
