
import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Some personal achievements',
  description: 'Personal achievements and background',
  robots: {
    index: true,
    follow: true,
  },
}


function Achievements() {
  return (
    <PageWrapper title='Some personal achievements'>

    <p>I wanted to share a few moments from my life that have shaped who I am—not necessarily the ones that look best on a CV, but the ones that still mean something to me. I hope they give you a clearer picture of where I come from.</p>

    <h2>High School</h2>

    <h2>EMMA (math talent school) 2015-2018</h2>
    <p>
      When I was 14 I joined <a href="https://escolademates.wixsite.com/emma/cursos-anteriors" target="_blank">EMMA</a>, a math talent school in my region. I ended up in a mentor role quite early—I was the youngest in the group—and together with others I gave talks on math popularization. We covered things like hyperbolic trigonometry, algebra, and geometry. I stayed for three years.
    </p>
    <p>
      What I remember most are the math camps we ran: sleepovers where we worked on puzzles like Einstein&apos;s riddle, built da Vinci&apos;s bridge with wooden blocks, and in our free time played chess, tennis, and other games. It was a good place to grow.
    </p>


    <h2>Chess nerd</h2>
    <p>In high school I often preferred chess to football. I played with friends and then with some teachers, and bit by bit got a bit better. By the end of the year, a few of us had put together a chess tournament and a bunch of people showed up. It was simple and fun, and it stayed with me.</p>

    <h2>The pandemic, and becoming class delegate</h2>
    <p>When the pandemic hit I was in my first year of university. I had a strong sense that the university was about to go through something very hard—for the rectorate, for staff, for everyone. I also felt that crises like that could teach you a lot about how institutions and procedures actually work, and how to get things done for people when things are messy.</p>
    <p>So I put myself forward as class delegate. That year I was the only one who did, and the role kept me busy. I tried to be useful. My classmates re-elected me for the next four years, even when others presented themselves too, and later I was also delegate during my master&apos;s. I&apos;m grateful they trusted me with it.</p>


    <h2>SparkEd (2022-2025)</h2>
    <p>In my fourth year I was looking for people who also wanted to build something. I went to a lot of talks, and one Friday evening in the middle of summer—at a conference about productivity—I met four people who were asking the same questions. We stayed in touch, created a WhatsApp group, and from there SparkEd grew. We ran events that brought in more than 300 people, met a lot of company CEOs, other entrepreneurs, and through it I met Claudia, who&apos;s now my closest friend and now, my business partner and CEO of Mycrospace. That period meant a lot to me. Thank you Pau Martinez</p>

    <h2>CDTM</h2>
    <p>This one is a bit of an honest failure on my side.</p>
    <p><a href="https://cdtm.com/" target="_blank">CDTM</a> (Center for Digital Technology and Management) runs strong programs for people who want to lead in big companies or start their own. I joined while I was already stretched thin with other commitments, and the workload was heavy. I met many people I liked.</p>
    <p>In the end I realized that a lot of what they were teaching—entrepreneurship, market research, running large events—I was already learning by doing elsewhere. It wasn&apos;t a good fit for that moment in my life, so I left. No hard feelings; it just wasn&apos;t for me then.</p>

    <h2>Anxiety and burnout</h2>
    <p>My first three years at university were tough for reasons unrelated to my degree. I went through long periods of anxiety—shaking, nausea, losing weight—and it showed in my work and in how I felt.</p>
    <p>What helped was keeping moving: doing things, small and large, gave me something to hold on to. I&apos;m aware that in that state I still managed to keep my grades in a good place (around 8.3 in my bachelor&apos;s, 8.7 in my master&apos;s), but the thing I care about more is that I learned how much it matters to keep going when everything feels unstable. If I had stopped completely, I think I would have lost my footing.</p>
    <p>I share this because it&apos;s part of my story, and because I know many people go through similar phases. You&apos;re not alone in it.</p>

    </PageWrapper>
  )
}

export default Achievements