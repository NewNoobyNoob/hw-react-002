import React from 'react';
import PersonCard from '../components/Card.jsx';
import Diplomi from '../assets/diplomi.webp';
import Ilarioni from '../assets/ilarioni.jpeg';
import Iliko from '../assets/iliko.jpeg';
import Olgha from '../assets/olghaBebia.jpeg';
import Zurikela from '../assets/zurikela.jpeg';



function CardList() {

function action() {
    console.log('მე, ბებია, ილოკო და ილარიონი');
}
  return (
    <div className='card-list'>
        <PersonCard name={'ილარიონი'} description='- არ გამცე ზურიკელა უღმერთო' words={['- ვაი შენს პატრონს ზურიკელა ვაშალომიძე', '- ბებიაშენს არ უთხრა მაი ზურიკელა, გული არ გაუსკდეს']} image={Ilarioni} action={action} />
        <PersonCard name={'ილიკო'} description='- შუშის თვალის ჭიქაში ჩადება არ დაგავიწყდეს ილარიონ ბრუციანო' words={['- შე უპატრონო ქარი თუ იყო, ყინვა და უბედურება შენ რა გიხაროდა?', '- თქვენ რა იცით პოეზიის გამოშტერებულები ხართ']} image={Iliko} action={action} />
        <PersonCard name={'ზურიკელა'} description='- მთელი სოფელი ჩვენ უნდა ვიყოთ' words={['- მე მერი მიყვარს', '- შენ კარგი გოგო ხარ, მაგრამ მე მერი მიყვარს']} image={Zurikela} action={action} />
        <PersonCard name={'ოლღა ბებია'} description='- ჩემი შვილიშვილი დოხტური უნდა გამოვიდეს. მოვხუცდი უკვე და მოვლა მინდა' words={['- შენ მოუკვდი ბებიაშენს ზურიკელა']} image={Olgha} action={action} />
        <PersonCard name={'ზურიკელა, ბებია, ილიკო და ილარიონი'} description='- ასე გამოიყურება ჩვენი სოფელი' words={['- ბინა უნდა, საჭმელი უნდა, ფარა უნდა', '- მერე სად არის ეს ფარა?', '- ფაქიზო ხომ არ გაგვეყიდა?']} image={Diplomi} action={action} />
    </div>
  )
}

export default CardList

