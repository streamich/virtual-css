import {create} from 'nano-css';
import {addon as addonCSSOM} from 'nano-css/addon/cssom';
import {addon as addonVCSSOM} from 'nano-css/addon/vcssom';

const nano = create();
addonCSSOM(nano);
addonVCSSOM(nano);

export {
    nano,
};
