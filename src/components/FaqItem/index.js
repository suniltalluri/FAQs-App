import {useState} from 'react'

import './index.css'

const FaqsItem = props => {
  const [show, setShow] = useState(false)

  const {eachFaq} = props
  const {questionText, answerText} = eachFaq

  const plusOrMinusImg = show
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imgAlt = show ? 'minus' : 'plus'

  const onClickPlus = () => {
    setShow(!show)
  }

  return (
    <li className="List_item">
      <div className="FaqItem_card">
        <h1 className="questionText">{questionText}</h1>
        <button type="button" className="plusBtn">
          <img
            src={plusOrMinusImg}
            className="PlusImg"
            alt={imgAlt}
            // onClick={() => setShow(!show)}
            onClick={onClickPlus}
          />
        </button>
      </div>
      {show && <hr className="HLine" />}
      {show && <p className="answerText">{answerText}</p>}
    </li>
  )
}

export default FaqsItem
