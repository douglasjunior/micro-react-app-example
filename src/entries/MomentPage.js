import MomentExample from '../components/MomentExample';

document.currentScript
    .parentNode
    .insertBefore(
        MomentExample(),
        document.currentScript,
    );
