import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import ReactMarkdown from 'react-markdown'
import fs from 'fs';
import path from 'path';

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


const markdown = fs.readFileSync(
  path.join(process.cwd(), 'public/pages/aboutme.md'),
  'utf8'
);

function About() {
  return (
    <PageWrapper title="About me">
      <ReactMarkdown skipHtml={false}>{markdown}
      </ReactMarkdown>
    </PageWrapper>
  )
}

export default About