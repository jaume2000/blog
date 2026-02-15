import React from 'react'
import PageWrapper from '@/components/PageWrapper'
import { Metadata } from 'next'

const nacimiento = new Date(2001, 9, 5, 5, 30);
const date_time = Date.now() - nacimiento.getTime();

const segundosTotales = Math.floor(date_time / 1000);

const horasTotales = Math.floor(segundosTotales / 3600);

const diasTotales = Math.floor(horasTotales / 24);
const anios = Math.floor(diasTotales / 365.25); // Año bisiesto incluido
const meses = Math.floor((diasTotales % 365.25) / 30.44); // Promedio de días por mes
const dias = Math.floor(diasTotales % 30.44);


export const metadata: Metadata = {
  title: 'About',
  description: 'Jaume Ivars Grimalt — Computer Science graduate, AI enthusiast, and entrepreneur based in Valencia',
  robots: { index: true, follow: true },
}

function About() {
  return (
    <PageWrapper title='About Me'>

      <p>
        Hey! I&apos;m <strong>Jaume Ivars Grimalt</strong>, a computer scientist / ML engineer and entrepreneur from Valencia, Spain.
        I am currently{anios} years, {meses} months and {dias} days old.
        I studied a master&apos;s in AI after studying Computer Science at UPV, and I&apos;m now looking to take 
        the next step in my career—ideally somewhere beyond Spain where I can work on ambitious problems with 
        talented people.
      </p>

      <h2>Why Computer Science?</h2>
      
      <p>
        Simple answer: it&apos;s the universal key to every other field of human knowledge.
      </p>

      <p>
        When I was choosing what to study, I realized something—nearly every scientific discipline now runs on 
        computation. Physics uses generative AI to image black holes. Biology uses models like AlphaFold to 
        discover new drugs. Even mathematics has benefited from AI discovering novel algorithms. Business, 
        philosophy, history, music, art—they all increasingly rely on information systems, databases, and 
        statistical models.
      </p>

      <p>
        Computer Science lets me jump between fields. It gives me the tools to learn anything I want, build 
        anything I can imagine, and contribute to problems that matter. If you want proof of my curiosity, 
        check out my <a href="/learning_notes">Learning Notes</a>—you&apos;ll see everything from machine learning 
        to quantum mechanics to philosophy.
      </p>

      <h2>How I Think and Work</h2>

      <p>
        I&apos;m naturally drawn to understanding <em>why</em> things work, not just <em>how</em>. In high school, 
        when we learned integrals, I became fascinated with extending the concept to volumetric integrals and 
        even hypervolumes in 4D space—not because it was required, but because I needed to see the pattern 
        complete itself.
      </p>

      <p>
        I tend to question assumptions and rebuild solutions from first principles. Sometimes this means finding 
        unconventional paths to the same answer. I thrive in environments that reward creative problem-solving 
        over rigid adherence to prescribed methods.
      </p>

      <p>
        My learning style is self-directed and appetite-driven. My bookshelf is chaotic but intentional: machine 
        learning papers next to philosophy books, quantum mechanics next to business strategy, numerical methods 
        next to sci-fi novels like <em>Dune</em>. I learn what I need when I need it, often teaching myself 
        rather than waiting for formal instruction.
      </p>

      <h2>Where I&apos;m From</h2>

      <p>
        I grew up in <a href="https://en.wikipedia.org/wiki/Gata_de_Gorgos" target="_blank" rel="noopener noreferrer">
        Gata de Gorgos</a>, a small town near Alicante. When I was 17, I moved to Valencia to study. I&apos;ve been 
        living independently here ever since. Valencia is a beautiful city—great people, amazing food, plenty of 
        opportunities—but the summers are brutal (I can&apos;t stand hot humidity), and honestly, I&apos;ve outgrown it. 
        I&apos;m ready for the next chapter somewhere else.
      </p>

      <h2>Early Projects</h2>

      <p>
        My first real &quot;business&quot; was a Minecraft server when I was 15. I taught myself Java so I could code custom 
        plugins and build game modes for my friends. It wasn&apos;t about the money—it was about creating something 
        people enjoyed. That instinct to build, tinker, and share hasn&apos;t left me since.
      </p>

      <p>
        Before that, I spent my childhood playing with Scratch and Arduino, always trying to make something new. 
        Physics, math, and computer science classes in high school felt like playgrounds. I loved them because 
        they gave me the language to turn ideas into reality.
      </p>

      <h2>What I Do Outside Work</h2>

      <p>
        Right now I&apos;m into calisthenics and gym training. If you&apos;re near Valencia and want a workout partner, 
        let&apos;s connect! I also love watching thoughtful series like <em>The Owl House</em>, reading philosophy, 
        and staying current with deep learning research (you can see my notes <a href="/learning_notes">here</a>).
      </p>

      <p>
        I used to play chess competitively and draw regularly, but I had to step back to focus on my projects. 
        When I have more bandwidth, I&apos;ll bring those hobbies back—they&apos;re too important to leave behind permanently.
      </p>

      <h2>Favorite Games</h2>

      <p>
        I&apos;m a huge fan of <em>Portal 2</em> (brilliant game design), <em>Mario Kart Wii</em>, the <em>New Super 
        Mario Bros</em> series, and obviously <em>Minecraft</em>. These games shaped how I think about problem-solving, 
        creativity, and fun. Portal especially taught me that the best solutions come from breaking the rules 
        in clever ways... and that if an AI promises you cake, you should be very suspicious.
      </p>

      <h2>What Drives Me</h2>

      <p>
        My deepest ambition is freedom—not in the hedonistic sense, but in the sense of capability and agency. 
        True freedom means being able to learn anything, build anything, solve any problem that matters to me. 
        It requires extraordinary discipline because when you can do anything, you need wisdom to choose what&apos;s 
        worth doing.
      </p>

      <p>
        I believe the point of life is to give something meaningful to humanity. We&apos;re all fundamentally alone, 
        and yet our biology wires us to connect, to be useful, to contribute. I don&apos;t fight that—I embrace it. 
        My goal is to build the skills and knowledge to contribute at the highest level I&apos;m capable of.
      </p>

      <h2>What I&apos;m Afraid Of</h2>

      <p>
        Becoming a boring adult who forgets who he really is: someone who loves building things, learning constantly, 
        and playing with ideas. That&apos;s the person I intend to stay, no matter what.
      </p>

      <p>
        If any of this resonates with you—whether you&apos;re building something, hiring, or just want to chat—
        feel free to reach out. I&apos;m always happy to connect with interesting people.
      </p>

    </PageWrapper>
  )
}

export default About