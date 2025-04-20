import Link from 'next/link';
import React from 'react';

const Book = () => {
  //const pdfUrl = 'https://raw.githubusercontent.com/jaume2000/computer_vision_notes/main/main.pdf';

  return (
    <div style={{ width: '100%', height: '100vh', padding: '20px' }}>
        <Link href={"/main.pdf"} target="_blank">
          Abre el PDF en una nueva pestaña
        </Link>.
    </div>
  );
};

export default Book;