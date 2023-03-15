import lodashComp from './LodashExample';
import momentComp from './MomentExample';

export default function MomentLodashExample() {
    const component = document.createElement('div');
    component.appendChild(lodashComp());
    component.appendChild(momentComp());
    return component;
}
