const articleStyle = {
  minHeight: '200px',
};
const containerStyle = {
  overflow: 'hidden',
  padding: '0 !important',
  display: 'block',
  padding: '56.25% 0 0 0 !important',
  position: 'relative',
  width: '100%',
  height: 0,
  '& img': {
    position: 'absolute',
    boxShadow: '0 10px 14px rgba(0,0,0,.2)',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    width: '100%',
  },
};
const stackStyle = {
  display: 'flex',
  alignItems: 'left',
  padding: '0 8px',
};
const buttonStyle = {
  paddingTop: '5px',
  justifyContent: 'left',
  width: 'fit-content',
};

export {
  articleStyle,
  containerStyle,
  stackStyle,
  buttonStyle
}