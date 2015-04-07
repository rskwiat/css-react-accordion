var Accordion = React.createClass({displayName: "Accordion",

  render: function() {
    return (
      React.createElement("section", {id: this.props.identifier}, 
          React.createElement("h2", null, React.createElement("a", {href: this.props.hash}, this.props.identifier)), 
          React.createElement("p", null, this.props.copy)
      )
    );

  }

});

React.render(
  React.createElement("div", {className: "accordion vertical"}, 
    React.createElement(Accordion, {identifier: "about", hash: "#about", copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada. Curabitur facilisis rhoncus eros eget placerat. Aliquam semper mauris sit amet justo tempor nec lacinia magna molestie. Etiam placerat congue dolor vitae adipiscing. Aliquam ac erat lorem, ut iaculis justo. Etiam mattis dignissim gravida. Aliquam nec justo ante, non semper mi. Nulla consectetur interdum massa, vel porta enim vulputate sed. Maecenas elit quam, egestas eget placerat non, fringilla vel eros. Nam vehicula elementum nulla sed consequat. Phasellus eu erat enim. Praesent at magna non massa dapibus scelerisque in eu lorem."}), 
    React.createElement(Accordion, {identifier: "services", hash: "#services", copy: "Services content"}), 
    React.createElement(Accordion, {identifier: "blog", hash: "#blog", copy: "blogging content."}), 
    React.createElement(Accordion, {identifier: "portfolio", hash: "#portfolio", copy: "portfolio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada."}), 
    React.createElement(Accordion, {identifier: "contact", hash: "#contact", copy: "portfolio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada."})

  ), document.getElementById('accordian')
);
