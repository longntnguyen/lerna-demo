import { createElement } from 'react';

var styles = {};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var buttonStyle = {
  padding: '10px 50px'
};
var Button = function Button(props) {
  return createElement("button", {
    className: 'btn btn-default',
    style: buttonStyle,
    onClick: props.handleClick
  }, "Long", props.children);
};
Button.defaultProps = {
  onClick: function onClick() {},
  label: ''
};

export { Button, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
