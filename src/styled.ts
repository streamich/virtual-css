export const styled = useCss => h => tag => ({as = tag, css = {}, className = '', ...rest}) => {
  const extraClass = useCss(css);
  rest.className = className ? className + ' ' + extraClass : extraClass;
  return h(as, rest);
};

export default styled;
