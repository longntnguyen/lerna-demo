var React = require('react');

var styles = {"test":"_3ybTi"};

var buttonStyle = {
  padding: '10px 50px'
};
var Button = function Button(props) {
  return React.createElement("button", {
    className: 'btn btn-default',
    style: buttonStyle,
    onClick: props.handleClick
  }, "Long", props.children);
};
Button.defaultProps = {
  onClick: function onClick() {},
  label: ''
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.Button = Button;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
