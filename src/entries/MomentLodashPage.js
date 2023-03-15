import MomentLodashExample from '../components/MomentLodashExample';

document.currentScript
    .parentNode
    .insertBefore(
        MomentLodashExample(),
        document.currentScript,
    );
