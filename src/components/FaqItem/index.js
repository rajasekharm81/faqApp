import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  sendId = () => {
    const {id, appendFn} = this.props
    appendFn(id)
  }

  render() {
    const {item, check} = this.props

    const icon = check
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = check ? 'minus' : 'plus'
    return (
      <div className="faqItemContainer">
        <div className="itemContainer">
          <h3>{item.questionText}</h3>
          <button onClick={this.sendId} className="toggleButton" type="button">
            <img src={icon} alt={altText} />
          </button>
        </div>
        {check && (
          <div className="answerContainer">
            <hr />
            <p>{item.answerText}</p>
          </div>
        )}
      </div>
    )
  }
}

export default FaqItem
