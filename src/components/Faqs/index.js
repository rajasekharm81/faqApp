import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {itemsList: []}

  appendingItemNumber = id => {
    const {itemsList} = this.state

    if (itemsList.includes(id)) {
      const newList = itemsList.filter(each => each !== id)
      this.setState({itemsList: newList})
    } else {
      this.setState({itemsList: [...itemsList, id]})
    }
  }

  render() {
    const {faqsList} = this.props
    const {itemsList} = this.state
    return (
      <div className="mainContainer">
        <div className="Card">
          <h1>FAQs</h1>
          {faqsList.map(each => (
            <FaqItem
              appendFn={this.appendingItemNumber}
              check={itemsList.includes(each.id)}
              id={each.id}
              key={each.id}
              item={each}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Faqs
