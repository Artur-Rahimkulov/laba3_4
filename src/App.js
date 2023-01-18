import './App.css';
import './images.css';
import 'antd/dist/antd.min.css';
import { saveAs } from "file-saver";
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
const Questoins = {
  0: {
    useEffect: () => {
      let img = document.getElementById('img')
      let button1 = document.getElementById('img1')
      function mouseEnter(e) {
        img.style.clipPath = ''
        img.className = "Showhide Showhide0 "

        console.log(img.classList)
        document.body.removeEventListener('mousemove', mousemove)
        img.classList.toggle('Showhide-show')
      }
      function mouseLeave(e) {
        img.className = "image"
        console.log(img.classList)
        document.body.addEventListener('mousemove', mousemove)
      }
      button1.addEventListener('mouseenter', mouseEnter)
      button1.addEventListener('mouseleave', mouseLeave)
      function mousemove(e) {
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        // let bgWebKit = `circle(100px at ${x}px ${y}px)`;
        let bgWebKit = `circle(150px at ${x}px ${y}px)`;
        img.style.clipPath = bgWebKit
      }
      document.body.addEventListener('mousemove', mousemove)
      return () => { document.body.removeEventListener('mousemove', mousemove) }
    },
    quest: "Какой персонаж из очень странных дел Вам подходит?",
    decorator: <>
      <a style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 100 }} href='' onClick={() => saveAs('/laba2.jpg', 'Дерево решений Рахимкулов ПРО-328.png')}>Нажмите чтобы скачать дерево решений</a>
      <div id='img' className='image' />
      <div className='bgimage' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Я хочу узнать!": {
        next: "1",
        props: { className: "colorful-4  defaultAnswer", id: 'img1' }
      }
    }
  },
  1: {
    useEffect: () => {
      let img = document.getElementById('Showhide1')
      let button1 = document.getElementById('img2')
      let button2 = document.getElementById('img35')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img2')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img35')
        console.log(img.classList)
      }
      button1.addEventListener('mouseenter', mouseEnter)
      button1.addEventListener('mouseleave', mouseEnter)
      button2.addEventListener('mouseenter', mouseEnter2)
      button2.addEventListener('mouseleave', mouseEnter2)
      return () => {
        button1.removeEventListener('mouseenter', mouseEnter)
        button1.removeEventListener('mouseleave', mouseEnter)
        button2.removeEventListener('mouseenter', mouseEnter2)
        button2.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам меньше 30?",
    decorator: <>
      <div id='Showhide1' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "2",
        props: { className: "colorful-4  defaultAnswer", id: 'img2' }
      },
      "Нет": {
        next: "35",
        props: { className: "colorful-4  defaultAnswer", id: 'img35' }
      }
    }
  },
  2: {
    useEffect: () => {
      let img = document.getElementById('Showhide2')
      let img3 = document.getElementById('img3')
      let img14 = document.getElementById('img14')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img3')
        console.log(img.classList)
      }
      img3.addEventListener('mouseenter', mouseEnter)
      img3.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img14')
        console.log(img.classList)
      }
      img14.addEventListener('mouseenter', mouseEnter2)
      img14.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img3.removeEventListener('mouseenter', mouseEnter)
        img3.removeEventListener('mouseleave', mouseEnter)
        img14.removeEventListener('mouseenter', mouseEnter2)
        img14.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Снились ли вам в дестве монстры?",
    decorator: <>
      <div id='Showhide2' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "3",
        props: { className: "colorful-4  defaultAnswer", id: 'img3' }
      },
      "Нет": {
        next: "14",
        props: { className: "colorful-4  defaultAnswer", id: 'img14' }
      },
    }
  },
  3: {
    useEffect: () => {
      let img = document.getElementById('Showhide3')
      let img4 = document.getElementById('img4')
      let img9 = document.getElementById('img9')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img4')
        console.log(img.classList)
      }
      img4.addEventListener('mouseenter', mouseEnter)
      img4.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img9')
        console.log(img.classList)
      }
      img9.addEventListener('mouseenter', mouseEnter2)
      img9.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img4.removeEventListener('mouseenter', mouseEnter)
        img4.removeEventListener('mouseleave', mouseEnter)
        img9.removeEventListener('mouseenter', mouseEnter2)
        img9.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы любите хорошие или плохие концовки?",
    decorator: <>
      <div id='Showhide3' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Хорошие": {
        next: "4",
        props: { className: "colorful-4 defaultAnswer", id: 'img4' }
      },
      "Плохие": {
        next: "9",
        props: { className: "colorful-4 defaultAnswer", id: 'img9' }
      },
    }
  },
  4: {
    useEffect: () => {
      let img = document.getElementById('Showhide4')
      let img5 = document.getElementById('img5')
      let img8 = document.getElementById('img8')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img5')
        console.log(img.classList)
      }
      img5.addEventListener('mouseenter', mouseEnter)
      img5.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img8')
        console.log(img.classList)
      }
      img8.addEventListener('mouseenter', mouseEnter2)
      img8.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img5.removeEventListener('mouseenter', mouseEnter)
        img5.removeEventListener('mouseleave', mouseEnter)
        img8.removeEventListener('mouseenter', mouseEnter2)
        img8.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы бы хотели какие-либо суперспособности?",
    decorator: <>
      <div id='Showhide4' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "5",
        props: { className: "colorful-4 defaultAnswer", id: 'img5' }
      },
      "Нет": {
        next: "8",
        props: { className: "colorful-4 defaultAnswer", id: 'img8' }
      },
    }
  },
  5: {
    useEffect: () => {
      let img = document.getElementById('Showhide5')
      let img6 = document.getElementById('img6')
      let img7 = document.getElementById('img7')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img6')
        console.log(img.classList)
      }
      img6.addEventListener('mouseenter', mouseEnter)
      img6.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img7')
        console.log(img.classList)
      }
      img7.addEventListener('mouseenter', mouseEnter2)
      img7.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img6.removeEventListener('mouseenter', mouseEnter)
        img6.removeEventListener('mouseleave', mouseEnter)
        img7.removeEventListener('mouseenter', mouseEnter2)
        img7.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы часто посещаете врачей?",
    decorator: <>
      <div id='Showhide5' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "6",
        props: { className: "colorful-4 defaultAnswer", id: 'img6' }
      },
      "Нет": {
        next: "7",
        props: { className: "colorful-4 defaultAnswer", id: 'img7' }
      },
    }
  },
  6: {
    useEffect: () => {
      let img = document.getElementById('Showhide6')
      let imgEnd = document.getElementById('imgEnd6')
      let img0 = document.getElementById('img06')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      // img0.addEventListener('mouseenter', mouseEnter2)
      // img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Одиннадцать",
    desc: "Джейн Хоппер (Джейн Айвз при рождении) более известна как Одиннадцать (Оди/Дина) — главная героиня сериала, обладает чрезвычайно сильными экстрасенсорными способностями.",
    decorator: <>
      <div id='Showhide6End' className='Showhide-show imgEnd6 Showhide' />
      <div id='Showhide6' className='Showhide' />

    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd6' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img06' }
      },
    }
  },
  7: {
    useEffect: () => {
      let img = document.getElementById('Showhide7')
      let imgEnd = document.getElementById('imgEnd7')
      let img0 = document.getElementById('img07')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      // img0.addEventListener('mouseenter', mouseEnter2)
      // img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Уильям Байерс",
    desc: "Уильям Байерс — один из главных героев сериала «Очень странные дела». Лучший друг Майка Уилера, Лукаса Синклера и Дастина Хендерсона.",
    decorator: <>
      <div id='Showhide7End' className='Showhide-show imgEnd7 Showhide' />
      <div id='Showhide7' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd7' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img07' }
      },
    }
  },
  8: {
    useEffect: () => {
      let img = document.getElementById('Showhide8')
      let imgEnd = document.getElementById('imgEnd8')
      let img0 = document.getElementById('img08')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Макс Мэйфилд",
    desc: "Макс упорна и уверена в себе. Она плохо ладит со своим братом Билли. Из-за этого она не любит говорить о своем прошлом и с подозрением относится ко всем окружающим.",
    decorator: <>
      <div id='Showhide8End' className='Showhide-show imgEnd8 Showhide' />
      <div id='Showhide8' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd8' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img08' }
      },
    }
  },
  9: {
    useEffect: () => {
      let img = document.getElementById('Showhide9')
      let img10 = document.getElementById('img10')
      let img13 = document.getElementById('img13')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img10')
        console.log(img.classList)
      }
      img10.addEventListener('mouseenter', mouseEnter)
      img10.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img13')
        console.log(img.classList)
      }
      img13.addEventListener('mouseenter', mouseEnter2)
      img13.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img10.removeEventListener('mouseenter', mouseEnter)
        img10.removeEventListener('mouseleave', mouseEnter)
        img13.removeEventListener('mouseenter', mouseEnter2)
        img13.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы бы пожертвовали собой ради спасения других?",
    mainContainerProps: { className: "App" },
    decorator: <>
      <div id='Showhide9' className='Showhide' />
    </>,
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "10",
        props: { className: "colorful-4 defaultAnswer", id: 'img10' }
      },
      "Нет": {
        next: "13",
        props: { className: "colorful-4 defaultAnswer", id: 'img13' }
      },
    }
  },
  10: {
    useEffect: () => {
      let img = document.getElementById('Showhide10')
      let img11 = document.getElementById('img11')
      let img12 = document.getElementById('img12')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img11')
        console.log(img.classList)
      }
      img11.addEventListener('mouseenter', mouseEnter)
      img11.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img12')
        console.log(img.classList)
      }
      img12.addEventListener('mouseenter', mouseEnter2)
      img12.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img11.removeEventListener('mouseenter', mouseEnter)
        img11.removeEventListener('mouseleave', mouseEnter)
        img12.removeEventListener('mouseenter', mouseEnter2)
        img12.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "У вас были плохие отношения с близкими родственниками?",
    decorator: <>
      <div id='Showhide10' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "11",
        props: { className: "colorful-4 defaultAnswer", id: 'img11' }
      },
      "Нет": {
        next: "12",
        props: { className: "colorful-4 defaultAnswer", id: 'img12' }
      },
    }
  },
  11: {
    useEffect: () => {
      let img = document.getElementById('Showhide11')
      let imgEnd = document.getElementById('imgEnd11')
      let img0 = document.getElementById('img011')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Билли Харгроув",
    desc: "Билли Харгроув — старший сводный брат Макс Мэйфилд. Выступал второстепенным антагонистом во втором сезоне сериала.",
    decorator: <>
      <div id='Showhide11End' className='Showhide-show imgEnd11 Showhide' />
      <div id='Showhide11' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd11' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img011' }
      },
    }
  },
  12: {
    useEffect: () => {
      let img = document.getElementById('Showhide12')
      let imgEnd = document.getElementById('imgEnd12')
      let img0 = document.getElementById('img012')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Эдди Мансон",
    desc: 'Эдди Мансон — один из главных героев четвёртого сезона "Очень Странных Дел". Он является лидером Клуба Адского Пламени, официального клуба ПиД старшей школы Хоукинса.',
    decorator: <>
      <div id='Showhide12End' className='Showhide-show imgEnd12 Showhide' />

      <div id='Showhide12' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd12' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img012' }
      },
    }
  },
  13: {
    useEffect: () => {
      let img = document.getElementById('Showhide13')
      let imgEnd = document.getElementById('imgEnd13')
      let img0 = document.getElementById('img013')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Барбара Холланд",
    desc: 'Барбара Холланд — второстепенный персонаж первого сезона сериала Очень Странные Дела. Лучшая подруга Нэнси Уилер.',
    mainContainerProps: { className: "App" },
    decorator: <>
      <div id='Showhide13End' className='Showhide-show imgEnd13 Showhide' />
      <div id='Showhide13' className='Showhide' />
    </>,
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd13' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img013' }
      },
    }
  },
  14: {
    useEffect: () => {
      let img = document.getElementById('Showhide14')
      let img15 = document.getElementById('img15')
      let img19 = document.getElementById('img19')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img15')
        console.log(img.classList)
      }
      img15.addEventListener('mouseenter', mouseEnter)
      img15.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img19')
        console.log(img.classList)
      }
      img19.addEventListener('mouseenter', mouseEnter2)
      img19.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img15.removeEventListener('mouseenter', mouseEnter)
        img15.removeEventListener('mouseleave', mouseEnter)
        img19.removeEventListener('mouseenter', mouseEnter2)
        img19.removeEventListener('mouseleave', mouseEnter2)
      }
    },

    quest: "Вы любите играть в настольные игры?",
    decorator: <>
      <div id='Showhide14' className='Showhide' />
    </>,

    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "15",
        props: { className: "colorful-4 defaultAnswer", id: 'img15' }
      },
      "Нет": {
        next: "19",
        props: { className: "colorful-4 defaultAnswer", id: 'img19' }
      },
    }
  },
  15: {
    useEffect: () => {
      let img = document.getElementById('Showhide15')
      let img16 = document.getElementById('img16')
      let img17 = document.getElementById('img17')
      let img18 = document.getElementById('img18')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img16')
        console.log(img.classList)
      }
      img16.addEventListener('mouseenter', mouseEnter)
      img16.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img17')
        console.log(img.classList)
      }
      img17.addEventListener('mouseenter', mouseEnter2)
      img17.addEventListener('mouseleave', mouseEnter2)
      function mouseEnter3(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img18')
        console.log(img.classList)
      }
      img18.addEventListener('mouseenter', mouseEnter3)
      img18.addEventListener('mouseleave', mouseEnter3)
      return () => {
        img16.removeEventListener('mouseenter', mouseEnter)
        img16.removeEventListener('mouseleave', mouseEnter)
        img17.removeEventListener('mouseenter', mouseEnter2)
        img17.removeEventListener('mouseleave', mouseEnter2)
        img18.removeEventListener('mouseenter', mouseEnter3)
        img18.removeEventListener('mouseleave', mouseEnter3)
      }
    },

    quest: "Ваше главное качество",
    decorator: <>
      <div id='Showhide15' className='Showhide' />
    </>,

    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Сообразиельность": {
        next: "16",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img16' }
      },
      "Сплочение коллектива": {
        next: "17",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img17' }
      },
      "Отвага": {
        next: "18",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img18' }
      },
    }
  },
  16: {
    useEffect: () => {
      let img = document.getElementById('Showhide16')
      let imgEnd = document.getElementById('imgEnd16')
      let img0 = document.getElementById('img016')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Дастин Хендерсон",
    desc: 'Дастин Хендерсон— один из главных персонажей в сериале «Очень странные дела». Является лучшим другом Майка Уилера, Лукаса Синклера и Уилла Байерса.',
    decorator: <>
      <div id='Showhide16End' className='Showhide-show imgEnd16 Showhide' />

      <div id='Showhide16' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd16' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img016' }
      },
    }
  },
  17: {
    useEffect: () => {
      let img = document.getElementById('Showhide17')
      let imgEnd = document.getElementById('imgEnd17')
      let img0 = document.getElementById('img017')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Майк Уиллер",
    desc: 'Майк склонен к мечтам. То, с каким интересом и азартом он играл в «Подземелья и драконов», открывает его со стороны творческого мыслителя. Он весьма эмоционален, но готов довольно быстро принять серьёзное решение в сложных ситуациях.',
    decorator: <>
      <div id='Showhide17End' className='Showhide-show imgEnd17 Showhide' />

      <div id='Showhide17' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd17' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img017' }
      },
    }
  },
  18: {
    useEffect: () => {
      let img = document.getElementById('Showhide18')
      let imgEnd = document.getElementById('imgEnd18')
      let img0 = document.getElementById('img018')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Эрика Синклер",
    desc: 'Эрика Синклер - второстепенный персонаж второго сезона Очень странные дела, и одна из центральных персонажей третьего сезона. Младшая сестра Лукаса Синклера.',
    mainContainerProps: { className: "App" },
    decorator: <>
      <div id='Showhide18End' className='Showhide-show imgEnd18 Showhide' />

      <div id='Showhide18' className='Showhide' />
    </>,
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd18' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img018' }
      },
    }
  },
  19: {
    useEffect: () => {
      let img = document.getElementById('Showhide19')
      let img20 = document.getElementById('img20')
      let img27 = document.getElementById('img27')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img20')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img27')
        console.log(img.classList)
      }
      img20.addEventListener('mouseenter', mouseEnter)
      img20.addEventListener('mouseleave', mouseEnter)
      img27.addEventListener('mouseenter', mouseEnter2)
      img27.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img20.removeEventListener('mouseenter', mouseEnter)
        img20.removeEventListener('mouseleave', mouseEnter)
        img27.removeEventListener('mouseenter', mouseEnter2)
        img27.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Есть ли у вас работа?",
    decorator: <>
      <div id='Showhide19' className='Showhide' />
    </>,

    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "20",
        props: { className: "colorful-4 defaultAnswer", id: 'img20' }
      },
      "Нет": {
        next: "27",
        props: { className: "colorful-4 defaultAnswer", id: 'img27' }
      },
    }
  },
  20: {
    useEffect: () => {
      let img = document.getElementById('Showhide20')
      let img21 = document.getElementById('img21')
      let img24 = document.getElementById('img24')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img21')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img24')
        console.log(img.classList)
      }
      img21.addEventListener('mouseenter', mouseEnter)
      img21.addEventListener('mouseleave', mouseEnter)
      img24.addEventListener('mouseenter', mouseEnter2)
      img24.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img21.removeEventListener('mouseenter', mouseEnter)
        img21.removeEventListener('mouseleave', mouseEnter)
        img24.removeEventListener('mouseenter', mouseEnter2)
        img24.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Есть ли у вас безответная любовь?",
    decorator: <>
      <div id='Showhide20' className='Showhide' />
    </>,

    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "21",
        props: { className: "colorful-4 defaultAnswer", id: 'img21' }
      },
      "Нет": {
        next: "24",
        props: { className: "colorful-4 defaultAnswer", id: 'img24' }
      },
    }
  },
  21: {
    useEffect: () => {
      let img = document.getElementById('Showhide21')
      let img22 = document.getElementById('img22')
      let img23 = document.getElementById('img23')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img22')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img23')
        console.log(img.classList)
      }
      img22.addEventListener('mouseenter', mouseEnter)
      img22.addEventListener('mouseleave', mouseEnter)
      img23.addEventListener('mouseenter', mouseEnter2)
      img23.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img22.removeEventListener('mouseenter', mouseEnter)
        img22.removeEventListener('mouseleave', mouseEnter)
        img23.removeEventListener('mouseenter', mouseEnter2)
        img23.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы родом из малонаселенного города?",
    decorator: <>
      <div id='Showhide21' className='Showhide' />
    </>,

    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "22",
        props: { className: "colorful-4 defaultAnswer", id: 'img22' }
      },
      "Нет": {
        next: "23",
        props: { className: "colorful-4 defaultAnswer", id: 'img23' }
      },
    }
  },
  22: {
    useEffect: () => {
      let img = document.getElementById('Showhide22')
      let imgEnd = document.getElementById('imgEnd22')
      let img0 = document.getElementById('img022')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Стив Харрингтон",
    desc: 'Стив — ученик Старшей школы Хоукинса, который в прошлом любил проводить время в компании своих друзей-хулиганов. Встречался с Нэнси Уилер.',
    decorator: <>
      <div id='Showhide22End' className='Showhide-show imgEnd22 Showhide' />

      <div id='Showhide22' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd22' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img022' }
      },
    }
  },
  23: {
    useEffect: () => {
      let img = document.getElementById('Showhide23')
      let imgEnd = document.getElementById('imgEnd23')
      let img0 = document.getElementById('img023')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Робин Бакли",
    desc: 'Робин Бакли —  одна из главных персонажей третьего сезона сериала "Очень странные дела". Она работает со Стивом в кафе-мороженом "Scoops Ahoy", что находится в Старкорт Молле.',
    decorator: <>
      <div id='Showhide23End' className='Showhide-show imgEnd23 Showhide' />

      <div id='Showhide23' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd23' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img023' }
      },
    }
  },
  24: {
    useEffect: () => {
      let img = document.getElementById('Showhide24')
      let img25 = document.getElementById('img25')
      let img26 = document.getElementById('img26')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img25')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img26')
        console.log(img.classList)
      }
      img25.addEventListener('mouseenter', mouseEnter)
      img25.addEventListener('mouseleave', mouseEnter)
      img26.addEventListener('mouseenter', mouseEnter2)
      img26.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img25.removeEventListener('mouseenter', mouseEnter)
        img25.removeEventListener('mouseleave', mouseEnter)
        img26.removeEventListener('mouseenter', mouseEnter2)
        img26.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы упрямый человек?",
    decorator: <>
      <div id='Showhide24' className='Showhide' />
    </>,

    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "25",
        props: { className: "colorful-4 defaultAnswer", id: 'img25' }
      },
      "Нет": {
        next: "26",
        props: { className: "colorful-4 defaultAnswer", id: 'img26' }
      },
    }
  },
  25: {
    useEffect: () => {
      let img = document.getElementById('Showhide25')
      let imgEnd = document.getElementById('imgEnd25')
      let img0 = document.getElementById('img025')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Нэнси Уилер",
    desc: 'Нэнси Уилер — одна из главных героев сериала. Изначально её волновали только обычные подростковые проблемы, с которыми ей приходилось сталкиваться, но после исчезновения лучшей подруги её мир переворачивается.',
    decorator: <>
      <div id='Showhide26End' className='Showhide-show imgEnd25 Showhide' />

      <div id='Showhide25' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd25' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img025' }
      },
    }
  },
  26: {
    useEffect: () => {
      let img = document.getElementById('Showhide26')
      let imgEnd = document.getElementById('imgEnd26')
      let img0 = document.getElementById('img026')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Джонатан Байерс",
    desc: 'Джонатан — старший брат Уилла Байерса. В школе считался неудачником из-за нелюдимости.',
    decorator: <>
      <div id='Showhide26End' className='Showhide-show imgEnd26 Showhide' />

      <div id='Showhide26' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd26' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img026' }
      },
    }
  },
  27: {
    useEffect: () => {
      let img = document.getElementById('Showhide27')
      let img28 = document.getElementById('img28')
      let img31 = document.getElementById('img31')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img28')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img31')
        console.log(img.classList)
      }
      img28.addEventListener('mouseenter', mouseEnter)
      img28.addEventListener('mouseleave', mouseEnter)
      img31.addEventListener('mouseenter', mouseEnter2)
      img31.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img28.removeEventListener('mouseenter', mouseEnter)
        img28.removeEventListener('mouseleave', mouseEnter)
        img31.removeEventListener('mouseenter', mouseEnter2)
        img31.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы участник школьного спортивного клуба?",
    decorator: <>
      <div id='Showhide27' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "28",
        props: { className: "colorful-4 defaultAnswer", id: 'img28' }
      },
      "Нет": {
        next: "31",
        props: { className: "colorful-4 defaultAnswer", id: 'img31' }
      },
    }
  },
  28: {
    useEffect: () => {
      let img = document.getElementById('Showhide28')
      let img29 = document.getElementById('img29')
      let img30 = document.getElementById('img30')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img29')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img30')
        console.log(img.classList)
      }
      img29.addEventListener('mouseenter', mouseEnter)
      img29.addEventListener('mouseleave', mouseEnter)
      img30.addEventListener('mouseenter', mouseEnter2)
      img30.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img29.removeEventListener('mouseenter', mouseEnter)
        img29.removeEventListener('mouseleave', mouseEnter)
        img30.removeEventListener('mouseenter', mouseEnter2)
        img30.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы родом из малонаселенного города?",
    decorator: <>
      <div id='Showhide28' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "29",
        props: { className: "colorful-4 defaultAnswer", id: 'img29' }
      },
      "Нет": {
        next: "30",
        props: { className: "colorful-4 defaultAnswer", id: 'img30' }
      },
    }
  },
  29: {
    useEffect: () => {
      let img = document.getElementById('Showhide29')
      let imgEnd = document.getElementById('imgEnd29')
      let img0 = document.getElementById('img029')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Лукас Синклер",
    desc: 'Лукас Синклер — один из главных персонажей в сериале «Очень странные дела». Является лучшим другом Майка Уилера, Дастина Хендерсона и Уилла Байерса.',
    decorator: <>
      <div id='Showhide29End' className='Showhide-show imgEnd29 Showhide' />

      <div id='Showhide29' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd29' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img029' }
      },
    }
  },
  30: {
    useEffect: () => {
      let img = document.getElementById('Showhide30')
      let imgEnd = document.getElementById('imgEnd30')
      let img0 = document.getElementById('img030')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Джейсон Карвер",
    desc: 'Джейсон Карвер — второстепенный персонаж четвёртого сезона сериала «Очень странные дела». Богатый спортсмен, встречается с самой популярной девушкой в школе, его идеальный мир начинает рушиться, когда новое зло угрожает Хоукинсу.',
    decorator: <>
      <div id='Showhide30End' className='Showhide-show imgEnd30 Showhide' />

      <div id='Showhide30' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd30' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img030' }
      },
    }
  },
  31: {
    useEffect: () => {
      let img = document.getElementById('Showhide31')
      let img32 = document.getElementById('img32')
      let img33 = document.getElementById('img33')
      let img34 = document.getElementById('img34')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img32')
        console.log(img.classList)
      }
      img32.addEventListener('mouseenter', mouseEnter)
      img32.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img33')
        console.log(img.classList)
      }
      img33.addEventListener('mouseenter', mouseEnter2)
      img33.addEventListener('mouseleave', mouseEnter2)
      function mouseEnter3(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img34')
        console.log(img.classList)
      }
      img34.addEventListener('mouseenter', mouseEnter3)
      img34.addEventListener('mouseleave', mouseEnter3)
      return () => {
        img32.removeEventListener('mouseenter', mouseEnter)
        img32.removeEventListener('mouseleave', mouseEnter)
        img33.removeEventListener('mouseenter', mouseEnter2)
        img33.removeEventListener('mouseleave', mouseEnter2)
        img34.removeEventListener('mouseenter', mouseEnter3)
        img34.removeEventListener('mouseleave', mouseEnter3)
      }
    },
    quest: "Что вы бы предпочли делать в свободное время?",
    decorator: <>
      <div id='Showhide31' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Убивать": {
        next: "32",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img32' }
      },
      "Читать научную литературу": {
        next: "33",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img33' }
      },
      "Проводить время с друзьями": {
        next: "34",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img34' }
      },
    }
  },
  32: {
    useEffect: () => {
      let img = document.getElementById('Showhide32')
      let imgEnd = document.getElementById('imgEnd32')
      let img0 = document.getElementById('img032')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Д'Артаньян",
    desc: 'Д’Артаньян, сокращенно Дарт — существо с обратной стороны, которое некоторое время было питомцем Дастина Хендерсона. Дарт относится к тому же виду, что и Демогоргон, только в более молодой форме, для которой дети придумали обозначение «демопёс».',
    decorator: <>
      <div id='Showhide32End' className='Showhide-show imgEnd32 Showhide' />

      <div id='Showhide32' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd32' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img032' }
      },
    }
  },
  33: {
    useEffect: () => {
      let img = document.getElementById('Showhide33')
      let imgEnd = document.getElementById('imgEnd33')
      let img0 = document.getElementById('img033')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Сьюзи",
    decorator: <>
      <div id='Showhide33End' className='Showhide-show imgEnd33 Showhide' />

      <div id='Showhide33' className='Showhide' />
    </>,
    desc: 'Сьюзи — девушка Дастина, с которой он познакомился в отъезде.',
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd33' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img033' }
      },
    }
  },
  34: {
    useEffect: () => {
      let img = document.getElementById('Showhide34')
      let imgEnd = document.getElementById('imgEnd34')
      let img0 = document.getElementById('img034')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Кали",
    decorator: <>
      <div id='Showhide34End' className='Showhide-show imgEnd34 Showhide' />

      <div id='Showhide34' className='Showhide' />
    </>,
    desc: 'Как и Одиннадцать, в детстве Кали была подвергнута экспериментам Национальной лаборатории Хоукинса, в результате которых обрела способность заставлять людей видеть то, что она хочет.',
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd34' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img034' }
      },
    }
  },
  35: {
    useEffect: () => {
      let img = document.getElementById('Showhide35')
      let img36 = document.getElementById('img36')
      let img52 = document.getElementById('img52')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img36')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img52')
        console.log(img.classList)
      }
      img36.addEventListener('mouseenter', mouseEnter)
      img36.addEventListener('mouseleave', mouseEnter)
      img52.addEventListener('mouseenter', mouseEnter2)
      img52.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img36.removeEventListener('mouseenter', mouseEnter)
        img36.removeEventListener('mouseleave', mouseEnter)
        img52.removeEventListener('mouseenter', mouseEnter2)
        img52.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы за добро или зло?",
    decorator: <>
      <div id='Showhide35' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Добро": {
        next: "36",
        props: { className: "colorful-4 defaultAnswer", id: 'img36' }
      },
      "Зло": {
        next: "52",
        props: { className: "colorful-4 defaultAnswer", id: 'img52' }
      },
    }
  },
  36: {
    useEffect: () => {
      let img = document.getElementById('Showhide36')
      let img37 = document.getElementById('img37')
      let img40 = document.getElementById('img40')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img37')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img40')
        console.log(img.classList)
      }
      img37.addEventListener('mouseenter', mouseEnter)
      img37.addEventListener('mouseleave', mouseEnter)
      img40.addEventListener('mouseenter', mouseEnter2)
      img40.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img37.removeEventListener('mouseenter', mouseEnter)
        img37.removeEventListener('mouseleave', mouseEnter)
        img40.removeEventListener('mouseenter', mouseEnter2)
        img40.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "У вас есть дети?",
    decorator: <>
      <div id='Showhide36' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "37",
        props: { className: "colorful-4 defaultAnswer", id: 'img37' }
      },
      "Нет": {
        next: "40",
        props: { className: "colorful-4 defaultAnswer", id: 'img40' }
      },
    }
  },
  37: {
    useEffect: () => {
      let img = document.getElementById('Showhide37')
      let img38 = document.getElementById('img38')
      let img39 = document.getElementById('img39')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img38')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img39')
        console.log(img.classList)
      }
      img38.addEventListener('mouseenter', mouseEnter)
      img38.addEventListener('mouseleave', mouseEnter)
      img39.addEventListener('mouseenter', mouseEnter2)
      img39.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img38.removeEventListener('mouseenter', mouseEnter)
        img38.removeEventListener('mouseleave', mouseEnter)
        img39.removeEventListener('mouseenter', mouseEnter2)
        img39.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы были за границей?",
    decorator: <>
      <div id='Showhide37' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "38",
        props: { className: "colorful-4 defaultAnswer", id: 'img38' }
      },
      "Нет": {
        next: "39",
        props: { className: "colorful-4 defaultAnswer", id: 'img39' }
      },
    }
  },
  38: {
    useEffect: () => {
      let img = document.getElementById('Showhide38')
      let imgEnd = document.getElementById('imgEnd38')
      let img0 = document.getElementById('img038')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Джойс Байерс",
    desc: 'Джойс Байерс — мать Уилла и Джонатана Байерса. С отцом детей, Лонни, она давно в разводе из-за его алкоголизма и измен.',
    decorator: <>
      <div id='Showhide38End' className='Showhide-show imgEnd38 Showhide' />

      <div id='Showhide38' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd38' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img038' }
      },
    }
  },
  39: {
    useEffect: () => {
      let img = document.getElementById('Showhide39')
      let imgEnd = document.getElementById('imgEnd39')
      let img0 = document.getElementById('img039')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Тэд Уиллер",
    decorator: <>
      <div id='Showhide39End' className='Showhide-show imgEnd39 Showhide' />

      <div id='Showhide39' className='Showhide' />
    </>,
    desc: 'Тэд Уиллер — отец Майка, Нэнси и Холли, муж Карен.',
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd39' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img039' }
      },
    }
  },
  40: {
    useEffect: () => {
      let img = document.getElementById('Showhide40')
      let img41 = document.getElementById('img41')
      let img44 = document.getElementById('img44')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img41')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img44')
        console.log(img.classList)
      }
      img41.addEventListener('mouseenter', mouseEnter)
      img41.addEventListener('mouseleave', mouseEnter)
      img44.addEventListener('mouseenter', mouseEnter2)
      img44.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img41.removeEventListener('mouseenter', mouseEnter)
        img41.removeEventListener('mouseleave', mouseEnter)
        img44.removeEventListener('mouseenter', mouseEnter2)
        img44.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы из России?",
    decorator: <>
      <div id='Showhide40' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "41",
        props: { className: "colorful-4 defaultAnswer", id: 'img41' }
      },
      "Нет": {
        next: "44",
        props: { className: "colorful-4 defaultAnswer", id: 'img44' }
      },
    }
  },
  41: {
    useEffect: () => {
      let img = document.getElementById('Showhide41')
      let img42 = document.getElementById('img42')
      let img43 = document.getElementById('img43')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img42')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img43')
        console.log(img.classList)
      }
      img42.addEventListener('mouseenter', mouseEnter)
      img42.addEventListener('mouseleave', mouseEnter)
      img43.addEventListener('mouseenter', mouseEnter2)
      img43.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img42.removeEventListener('mouseenter', mouseEnter)
        img42.removeEventListener('mouseleave', mouseEnter)
        img43.removeEventListener('mouseenter', mouseEnter2)
        img43.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы учёный?",
    decorator: <>
      <div id='Showhide41' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "42",
        props: { className: "colorful-4 defaultAnswer", id: 'img42' }
      },
      "Нет": {
        next: "43",
        props: { className: "colorful-4 defaultAnswer", id: 'img43' }
      },
    }
  },
  42: {
    useEffect: () => {
      let img = document.getElementById('Showhide42')
      let imgEnd = document.getElementById('imgEnd42')
      let img0 = document.getElementById('img042')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Алексей",
    desc: `Алексей — второстепенный персонаж третьего сезона "Очень странные дела". Он был советским учёным, которого заставили работать над ключом под торговым центром Старкорт. После того, как его коллега не смог выполнить план, Алексею дали один год, чтобы правильно закончить работу.`,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    decorator: <>
      <div id='Showhide42End' className='Showhide-show imgEnd42 Showhide' />

      <div id='Showhide42' className='Showhide' />
    </>,
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd42' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img042' }
      },
    }
  },
  43: {
    useEffect: () => {
      let img = document.getElementById('Showhide43')
      let imgEnd = document.getElementById('imgEnd43')
      let img0 = document.getElementById('img043')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Дмитрий",
    desc: 'Дмитрий - российский тюремный охранник, описанный как "умный и обаятельный".',
    decorator: <>
      <div id='Showhide43End' className='Showhide-show imgEnd43 Showhide' />

      <div id='Showhide43' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd43' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img043' }
      },
    }
  },
  44: {
    useEffect: () => {
      let img = document.getElementById('Showhide44')
      let img45 = document.getElementById('img45')
      let img48 = document.getElementById('img48')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img45')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img48')
        console.log(img.classList)
      }
      img45.addEventListener('mouseenter', mouseEnter)
      img45.addEventListener('mouseleave', mouseEnter)
      img48.addEventListener('mouseenter', mouseEnter2)
      img48.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img45.removeEventListener('mouseenter', mouseEnter)
        img45.removeEventListener('mouseleave', mouseEnter)
        img48.removeEventListener('mouseenter', mouseEnter2)
        img48.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы считаете себя храбрым человеком?",
    decorator: <>
      <div id='Showhide44' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "45",
        props: { className: "colorful-4 defaultAnswer", id: 'img45' }
      },
      "Нет": {
        next: "48",
        props: { className: "colorful-4 defaultAnswer", id: 'img48' }
      },
    }
  },
  45: {
    useEffect: () => {
      let img = document.getElementById('Showhide45')
      let img46 = document.getElementById('img46')
      let img47 = document.getElementById('img47')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img46')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img47')
        console.log(img.classList)
      }
      img46.addEventListener('mouseenter', mouseEnter)
      img46.addEventListener('mouseleave', mouseEnter)
      img47.addEventListener('mouseenter', mouseEnter2)
      img47.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img46.removeEventListener('mouseenter', mouseEnter)
        img46.removeEventListener('mouseleave', mouseEnter)
        img47.removeEventListener('mouseenter', mouseEnter2)
        img47.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы любите хорошие или плохие концовки?",
    decorator: <>
      <div id='Showhide45' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Хорошие": {
        next: "46",
        props: { className: "colorful-4 defaultAnswer", id: 'img46' }
      },
      "Плохие": {
        next: "47",
        props: { className: "colorful-4 defaultAnswer", id: 'img47' }
      },
    }
  },
  46: {
    useEffect: () => {
      let img = document.getElementById('Showhide46')
      let imgEnd = document.getElementById('imgEnd46')
      let img0 = document.getElementById('img046')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Джим Хоппер",
    desc: 'Джим — шериф маленького городка Хоукинс, который на протяжении долгих лет тяжело переживает из-за смерти своей дочери Сары.',
    decorator: <>
      <div id='Showhide46End' className='Showhide-show imgEnd46 Showhide' />

      <div id='Showhide46' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd46' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img046' }
      },
    }
  },
  47: {
    useEffect: () => {
      let img = document.getElementById('Showhide47')
      let imgEnd = document.getElementById('imgEnd47')
      let img0 = document.getElementById('img047')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Боб Ньюби",
    desc: 'Боб Ньюби ходил в старшую школу вместе с Джойс Байерс и Джимом Хоппером, где был добродушным ботаником. Став взрослым стал работать в магазине электронных товаров «RadioShack». В 1984 году Боб начал встречаться с Джойс.',
    decorator: <>
      <div id='Showhide47End' className='Showhide-show imgEnd47 Showhide' />

      <div id='Showhide47' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd47' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img047' }
      },
    }
  },
  48: {
    useEffect: () => {
      let img = document.getElementById('Showhide48')
      let img49 = document.getElementById('img49')
      let img50 = document.getElementById('img50')
      let img51 = document.getElementById('img51')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img49')
        console.log(img.classList)
      }
      img49.addEventListener('mouseenter', mouseEnter)
      img49.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img50')
        console.log(img.classList)
      }
      img50.addEventListener('mouseenter', mouseEnter2)
      img50.addEventListener('mouseleave', mouseEnter2)
      function mouseEnter3(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img51')
        console.log(img.classList)
      }
      img51.addEventListener('mouseenter', mouseEnter3)
      img51.addEventListener('mouseleave', mouseEnter3)
      return () => {
        img49.removeEventListener('mouseenter', mouseEnter)
        img49.removeEventListener('mouseleave', mouseEnter)
        img50.removeEventListener('mouseenter', mouseEnter2)
        img50.removeEventListener('mouseleave', mouseEnter2)
        img51.removeEventListener('mouseenter', mouseEnter3)
        img51.removeEventListener('mouseleave', mouseEnter3)
      }
    },
    quest: "Ваш основной вид деятельности?",
    decorator: <>
      <div id='Showhide48' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Политика": {
        next: "49",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img49' }
      },
      "Образование": {
        next: "50",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img50' }
      },
      "Наука": {
        next: "51",
        props: { className: "colorful-4 defaultAnswer middle", id: 'img51' }
      },
    }
  },
  49: {
    useEffect: () => {
      let img = document.getElementById('Showhide49')
      let imgEnd = document.getElementById('imgEnd49')
      let img0 = document.getElementById('img049')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Ларри Кляйн",
    desc: 'Ларри Кляйн - второстепенный персонаж третьего сезона Очень странные дела. Кляйн является мэром Хоукинса, описанный братьями Даффер как как типичный "скользкий" политик того времени, заботившийся только о собственной выгоде.',
    decorator: <>
      <div id='Showhide49End' className='Showhide-show imgEnd49 Showhide' />

      <div id='Showhide49' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd49' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img049' }
      },
    }
  },
  50: {
    useEffect: () => {
      let img = document.getElementById('Showhide50')
      let imgEnd = document.getElementById('imgEnd50')
      let img0 = document.getElementById('img050')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Скот Кларк",
    desc: 'Скотт Кларк - второстепенный персонаж первого, второго и третьего сезонов сериала «Очень Странные Дела». Работает учителем естествознания в средней школе Хоукинса. На протяжении всего первого сезона он помогал ребятам со всевозможными «научными изысканиями», которые продвигали их в поисках Уилла Байерса. Также руководит школьным радиоклубом.',
    mainContainerProps: { className: "App" },
    decorator: <>
      <div id='Showhide50End' className='Showhide-show imgEnd50 Showhide' />

      <div id='Showhide50' className='Showhide' />
    </>,
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd50' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img050' }
      },
    }
  },
  51: {
    useEffect: () => {
      let img = document.getElementById('Showhide51')
      let imgEnd = document.getElementById('imgEnd51')
      let img0 = document.getElementById('img051')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Сэм Оуэнс",
    decorator: <>
      <div id='Showhide51End' className='Showhide-show imgEnd51 Showhide' />

      <div id='Showhide51' className='Showhide' />
    </>,
    desc: 'Сэм Оуэнс— один из главных персонажей в сериале «Очень странные дела». Он был высокопоставленным членом Министерства энергетики США . Оуэнсу было поручено сдерживать последсдтвия инцидента, которые произошли в Хоукинсе, штат Индиана, в 1983 году. Он заменил доктора Бреннера на посту научного руководителя в лаборатории . Оуэнс также помог Хопперу с официальным удочерением Одиннадцать.',
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd51' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img051' }
      },
    }
  },
  52: {
    useEffect: () => {
      let img = document.getElementById('Showhide52')
      let img53 = document.getElementById('img53')
      let img54 = document.getElementById('img54')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img53')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img54')
        console.log(img.classList)
      }
      img53.addEventListener('mouseenter', mouseEnter)
      img53.addEventListener('mouseleave', mouseEnter)
      img54.addEventListener('mouseenter', mouseEnter2)
      img54.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img53.removeEventListener('mouseenter', mouseEnter)
        img53.removeEventListener('mouseleave', mouseEnter)
        img54.removeEventListener('mouseenter', mouseEnter2)
        img54.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вы часто посещаете врачей?",
    decorator: <>
      <div id='Showhide52' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Да": {
        next: "53",
        props: { className: "colorful-4 defaultAnswer", id: 'img53' }
      },
      "Нет": {
        next: "54",
        props: { className: "colorful-4 defaultAnswer", id: 'img54' }
      },
    }
  },
  53: {
    useEffect: () => {
      let img = document.getElementById('Showhide53')
      let imgEnd = document.getElementById('imgEnd53')
      let img0 = document.getElementById('img053')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Векна",
    desc: 'Генри Крил, более известен как Векна — существо из Изнанки, главный злодей четвёртого сезона.',
    decorator: <>
      <div id='Showhide53End' className='Showhide-show imgEnd53 Showhide' />

      <div id='Showhide53' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd53' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img053' }
      },
    }
  },
  54: {
    useEffect: () => {
      let img = document.getElementById('Showhide52')
      let img55 = document.getElementById('img55')
      let img56 = document.getElementById('img56')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img55')
        console.log(img.classList)
      }
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img56')
        console.log(img.classList)
      }
      img55.addEventListener('mouseenter', mouseEnter)
      img55.addEventListener('mouseleave', mouseEnter)
      img56.addEventListener('mouseenter', mouseEnter2)
      img56.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img55.removeEventListener('mouseenter', mouseEnter)
        img55.removeEventListener('mouseleave', mouseEnter)
        img56.removeEventListener('mouseenter', mouseEnter2)
        img56.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Что вы предпочитаете больше?",
    decorator: <>
      <div id='Showhide54' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Управлять": {
        next: "55",
        props: { className: "colorful-4 defaultAnswer", id: 'img55' }
      },
      "Подчиняться": {
        next: "56",
        props: { className: "colorful-4 defaultAnswer", id: 'img56' }
      },
    }
  },
  55: {
    useEffect: () => {
      let img = document.getElementById('Showhide55')
      let imgEnd = document.getElementById('imgEnd55')
      let img0 = document.getElementById('img055')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Истязатель Разума",
    decorator: <>
      <div id='Showhide55End' className='Showhide-show imgEnd55 Showhide' />

      <div id='Showhide55' className='Showhide' />
    </>,
    desc: 'Истязатель Разума, также известный как Монстр-тень или Мозг — злое существо с обратной стороны. Главный антагонист второго и третьего сезона сериала Очень странные дела, который был представлен во втором сезоне.',
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd55' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img055' }
      },
    }
  },
  56: {
    useEffect: () => {
      let img = document.getElementById('Showhide56')
      let imgEnd = document.getElementById('imgEnd56')
      let img0 = document.getElementById('img056')
      function mouseEnter(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('imgEnd')
        console.log(img.classList)
      }
      imgEnd.addEventListener('mouseenter', mouseEnter)
      imgEnd.addEventListener('mouseleave', mouseEnter)
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        imgEnd.removeEventListener('mouseenter', mouseEnter)
        imgEnd.removeEventListener('mouseleave', mouseEnter)
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Вам подходит Демогоргон",
    decorator: <>
      <div id='Showhide56End' className='Showhide-show imgEnd56 Showhide' />

      <div id='Showhide56' className='Showhide' />
    </>,
    desc: 'Он был хищным человекоподобным существом, которое попало в Хоукинс, штат Индиана, в ноябре 1983 года. Существо возникло из параллельного измерения, известного как Изнанка, или Обратная Сторона.',
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "Спасибо": {
        next: "end",
        props: { className: "colorful-4 defaultAnswer", id: 'imgEnd56' }
      },
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img056' }
      },
    }
  },
  'end': {
    useEffect: () => {
      let img = document.getElementById('ShowhideEnd')
      let img0 = document.getElementById('img0end')
      function mouseEnter2(e) {
        img.classList.toggle('Showhide-show')
        img.classList.toggle('img0')
        console.log(img.classList)
      }
      img0.addEventListener('mouseenter', mouseEnter2)
      img0.addEventListener('mouseleave', mouseEnter2)
      return () => {
        img0.removeEventListener('mouseenter', mouseEnter2)
        img0.removeEventListener('mouseleave', mouseEnter2)
      }
    },
    quest: "Мы рады что смогли вам помочь!",
    decorator: <>
      <div id='ShowhideEnd' className='Showhide' />
    </>,
    mainContainerProps: { className: "App" },
    questContainerProps: { className: "App-header" },
    answersContainerProps: { className: "default-answerContainer" },
    answers: {
      "(заново)": {
        next: "0",
        props: { className: "colorful-4 defaultAnswer", id: 'img0end' }
      },
    }
  }
}
function App() {
  const CarouselRef = useRef(null)
  const [currentQuest, setCurrentQuest] = useState(Questoins.first)
  const goTo = (next) => {
    if (next == 'end')
      CarouselRef.current.goTo(Object.keys(Questoins).length - 1, false)
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
        <p style={{ zIndex: 100 }}>{props.desc}</p>
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
