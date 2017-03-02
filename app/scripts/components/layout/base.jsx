var React = require('react');

function BaseLayout(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = {
  BaseLayout
}
