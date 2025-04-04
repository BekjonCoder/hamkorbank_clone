import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books=[
    {
    id:1,
    img: './images/1-img.jpg',
    title: 'The Let Them Theory',
    auther: 'John Green'
    },
    {
    id:2,
    img: 'https://m.media-amazon.com/images/I/61o5Q8IIq4L._SY466_.jpg',
    title: 'The Silent Dream',
    auther: 'Jane Smith'
    },
    {
    id:3,
    img: 'https://m.media-amazon.com/images/I/81AHTyq2wVL._SY466_.jpg',
    title: 'Housmaid',
    auther: 'Robert Brown'
    },
    {
    id:4,
    img: 'https://m.media-amazon.com/images/I/813H8V5YmNL._SY385_.jpg',
    title: 'The Forgotten Path',
    auther: 'Alice White'
    },
    {
    id:5,
    img: 'https://m.media-amazon.com/images/I/81YHNr+4JdL._SY385_.jpg',
    title: 'The Lost Kingdom',
    auther: 'Michael Johnson'
    },
    {
    id:6,
    img: 'https://m.media-amazon.com/images/I/91+nnOFY3ML._SY385_.jpg',
    title: 'The Castaway',
    auther: 'Stiphanie Taylor'
    },
    {
    id:7,
    img: 'https://m.media-amazon.com/images/I/81XEJCEychL._SY385_.jpg',
    title: 'Blue Ridge Breakdown',
    auther: 'Rachel Hanna'
    },
    {
    id:8,
    img: 'https://m.media-amazon.com/images/I/8149KHspRjL._SY385_.jpg',
    title: 'Stay For Me',
    auther: 'Jackson'
    },
    {
    id:9,
    img: 'https://m.media-amazon.com/images/I/81ffYDDdBTL._SY385_.jpg',
    title: "The Warrior's Stone",
    auther: 'O.Duncan'
    },
    {
    id:10,
    img: 'https://m.media-amazon.com/images/I/51RrWhmumjL._SY445_SX342_.jpg',
    title: "Firefly Nights",
    auther: 'Katie Winters'
    },
    {
    id:11,
    img: 'https://m.media-amazon.com/images/I/81J5f7MoX5L._SY425_.jpg',
    title: "The Nightlife New York",
    auther: 'Travis Luedke'
    },
    {
    id:12,
    img: 'https://m.media-amazon.com/images/I/51WCxsrLhZL._SY445_SX342_.jpg',
    title: "August Sunsets",
    auther: 'Katie Winters'
    }
]


const Booklist=()=>{
    return(
<div className='booklist'>{
    books.map((book,index)=>{
        return <Book  {...book} key={index}/>
    })
}</div>
    )
}
const Book=(props)=>{
    const {img,auther,title}=props
    return(
        <article className='book'>
            <img src={img} alt="It's book" />
            <h1>{title}</h1>
            <h2>{auther}</h2>
            
        </article>
    )
};
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)