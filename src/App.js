import logo from './logo.svg';
import './App.css';
import Marquee from "react-fast-marquee";
import 'antd/dist/antd.min.css';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
const Questoins = {
  0: {
    useEffect: () => {
      let img = document.getElementById('img')

      function mousemove(e) {
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        // let bgWebKit = `circle(100px at ${x}px ${y}px)`;
        let bgWebKit = `circle(100px at ${x}px ${y}px)`;
        img.style.clipPath = bgWebKit
      }
      document.body.addEventListener('mousemove', mousemove)
      return () => { document.body.removeEventListener('mousemove', mousemove) }
    },
    quest: "Какое домашнее животное подходит вам?",
    decorator: <>
      <div id='img' className='image' />
      <div className='bgimage' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Я хочу узнать!": {
        next: "1",
        props: { className: "colorful-4 defaultAnswer" }
      }
    }
  },
  1: {
    useEffect: () => { },
    quest: "Питомец должен быть большим, средним или маленьким?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Большой": {
        next: "2",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Средний": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer middle" }
      },
      "Маленький": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer small" }
      }
    }
  },
  2: {
    useEffect: () => { },
    quest: "Готовы ли вы постоянно убираться по всей квартире за ним?",
    decorator: null,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer" }
      },
      "Нет": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer" }
      },
    }
  },
}
function App() {
  const CarouselRef = useRef(null)
  const [currentQuest, setCurrentQuest] = useState(Questoins.first)
  const goTo = (next) => {
    CarouselRef.current.goTo(next, false)
  }
  return (
    <Carousel
      accessibility={false}
      arrows={false}
      dots={false}
      effect='fade'
      ref={CarouselRef}>
      {/* <Quest {...currentQuest} goTo={goTo} /> */}
      {
        Object.keys(Questoins).map((value) => {
          let answer = Questoins[value]
          return <Quest key={value}{...answer} goTo={goTo} />
          // return <a {...answer.props} onClick={props.goTo(answer.next)}>value</a>
        }
        )
      }
    </Carousel>
  );
}
function Quest(props) {
  useEffect(props.useEffect)
  return (
    <div {...props.mainContainerProps}>
      {props.decorator ?
        props.decorator
        : null}
      <div {...props.questContainerProps}>
        <p style={{ zIndex: 100 }}>{props.quest}</p>
        <div {...props.answersContainerProps}>
          {
            Object.keys(props.answers).map((value) => {
              let answer = props.answers[value]
              return <a key={value} {...answer.props} onClick={() => props.goTo(answer.next)}>{value}</a>
            }
            )
          }
        </div>
      </div>
    </div>
  )


}
export default App;
