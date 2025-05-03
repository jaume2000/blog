import React from 'react'
import PageWrapper from '../../../components/PageWrapper'
import ReactMarkdown from 'react-markdown'

const nacimiento = new Date(2001, 9, 5, 5, 30);
const date_time = Date.now() - nacimiento.getTime();

const segundosTotales = Math.floor(date_time / 1000);
const segundos = segundosTotales % 60;

const horasTotales = Math.floor(segundosTotales / 3600);
const horas = horasTotales % 24;

const diasTotales = Math.floor(horasTotales / 24);
const anios = Math.floor(diasTotales / 365.25); // Año bisiesto incluido
const meses = Math.floor((diasTotales % 365.25) / 30.44); // Promedio de días por mes

console.log(`Tengo ${anios} años, ${meses} meses, ${horas} horas y ${segundos} segundos`);


const markdown = 
`
Heya! I am **Jaume Ivars Grimalt**, thanks for your interest on me :)

I am a young entrepreneur that loves to learn and make new projects, I've studied Computer Science at UPV in Valencia and a Master's about AI.

&nbsp;

**But why Computer science?**

Basically, because I am a nerdy courious boy.

Since I was a kid, I've always wanted to build new things, that's why I started playing with Scratch and Arduino. I loved Physics, math and Computer Science classes at High School.
So, I wondered which was the option that let me jump to any other branch of the human knowleadge, and that was Computer Science. Do you know any science that doesn't require calculus, information management or statistics?

Physics? -> The first photo of a black hole was made using Generative AI models with petabytes of data.

Bilogy? -> The revolution of pharmaceutical industry is leaded by AlphaFold models that help discovering new drugs.

Math? -> AI models discovered already some new algorithms that humans didn't know

All the science works with information systems, data bases, or statistical models, even Business, Phylosophy, History, Music, Art.

That's why I wanted to study this. Because I want to learn about everything. In fact, you can checkout my Learning Notes and you'll see what I know about and also learn about my favourite topics! (Checkout the main page)

&nbsp;

**What are your hobbies?**

I curently I like to go to the gym and do chalisthenics, watch nive and lovely series like The Owl House, read about phylosophy, sci-fi novels such as Dune or read papers and learn about the brand new science in Deep Learning.
I used to play chess and draw, but because of my projects I needed more time for that, when I have some more free time I'll rescue these lovely hobbies. Also, If you are near Valencia and want to train with me I'll be very glad to make new gym friends!

&nbsp;

**What is your favourite videogame?**

I do really LOVE some videogames. I am big fan of Portal 2, New Super Mario Bross Wii, New Super Mario Bros DS, Mario Kart Wii and obviously Minecraft. Also, my first business was a Minecraft server, and I started larning Java in my 15 years to code my own plugins and videogames to play with my friends!

&nbsp;

**Do you preffer city or town?**

I do really love my old friends and my parents, but I admit I like more the city because of the opportunities and the new people I've meet here. Valencia is a really nice city to life. The only bad thing is the high rent.

&nbsp;

**What is your wildest wish?**

I wish one day I find inner peace with meditation and find balance between my inner and the outside world and accomplish to do big things for making everyone feel the same.
Sometimes life can be chaotic, the world sometimes seems to be filled with anger and hate. I belive in a humanity that centers about knowleadge, science, technology and love.
I just can't understand why sometimes we fight, we bully, we envy, we hate...

&nbsp;
*My wildest dream is to see a brotherhood feeling in all humanity. We are lost and alone in this big vast and empty space in a brutally infinite abyss of time. When space and time tends to infinity, every bad and good act tens to nothing, so let's live our nothingness the best way we can, together.*

Oh my god, I can't belive I've writted that so well hahaha. But about something less ideal, I wish to share my life with a loving boyfirend and travel a lot and study a cool phd with the smartest scientists around the world!

&nbsp;

**How old are you?**

I've been alife for ${`${anios} years, ${meses} months, ${horas} hours and ${segundos} seconds`} now. Thanks mama and papa for bringing me to this world <3


&nbsp;

**What is your biggest fear?**

Becoming a boring adult and forget who I really am. But I understand that the world is shaped as it is, so in the next page I'll 


&nbsp;


### And now, some boring questions!

&nbsp;

If you want to know more about my profesional and academic life, you can checkout the next Links in the homepage

`

function About() {
  return (
    <PageWrapper title="About me">
      <ReactMarkdown skipHtml={false}>{markdown}
      </ReactMarkdown>
    </PageWrapper>
  )
}

export default About