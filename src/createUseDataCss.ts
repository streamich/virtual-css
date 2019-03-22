let counter = 0;
const nextName = (pfx: string = 'v-css-') =>
    pfx + (counter++).toString(36);

// By default generate class name selectors.
const getSelector = (name: string) => `[data-${name}]`;

const createUseDataCss = (useCss) => {
    const useDataCss = (css: object) => {
        const name = useCss(css, nextName, getSelector);
        return {[`data-${name}`]: ''};
    };
    return useDataCss;
};

export default createUseDataCss;
