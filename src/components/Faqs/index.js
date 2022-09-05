import {Component} from 'react'
import FaqsItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="page_container">
        <div className="FAQS_card">
          <h1 className="FAQS_card_heading">FAQS</h1>
          <ul className="ulOrderFaqsList">
            {faqsList.map(eachFaq => (
              <FaqsItem key={eachFaq.id} eachFaq={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
