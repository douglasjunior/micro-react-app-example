import LodashExample from '../components/LodashExample';

document.currentScript
    .parentNode
    .insertBefore(
        LodashExample(),
        document.currentScript,
    );
