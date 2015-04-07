var Accordion = React.createClass({

  render: function() {
    return (
      <section id={this.props.identifier}>
          <h2><a href={this.props.hash}>{this.props.identifier}</a></h2>
          <p>{this.props.copy}</p>
      </section>
    );

  }

});

React.render(
  <div className="accordion vertical">
    <Accordion identifier="about" hash="#about" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada. Curabitur facilisis rhoncus eros eget placerat. Aliquam semper mauris sit amet justo tempor nec lacinia magna molestie. Etiam placerat congue dolor vitae adipiscing. Aliquam ac erat lorem, ut iaculis justo. Etiam mattis dignissim gravida. Aliquam nec justo ante, non semper mi. Nulla consectetur interdum massa, vel porta enim vulputate sed. Maecenas elit quam, egestas eget placerat non, fringilla vel eros. Nam vehicula elementum nulla sed consequat. Phasellus eu erat enim. Praesent at magna non massa dapibus scelerisque in eu lorem." />
    <Accordion identifier="services" hash="#services" copy="Services content" />
    <Accordion identifier="blog" hash="#blog" copy="blogging content." />
    <Accordion identifier="portfolio" hash="#portfolio" copy="portfolio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada." />
    <Accordion identifier="contact" hash="#contact" copy="portfolio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada." />

  </div>, document.getElementById('accordian')
);
