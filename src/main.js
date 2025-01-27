import imagenAbadia from './imgSizes/imagenAbadia-small-1x..jpg';
import imagenCzecha from './imgSizes/imagenCzecha-small-1x..jpg';
import imagenAgua from './imgSizes/imagenAgua-small-1x..jpg';
import imagenMuralla from './imgSizes/imagenMuralla-small-1x..jpg';
import imagenTokio from './imgSizes/imagenTokio-small-1x..jpg';
import imagenAtardecer from './imgSizes/imagenAtardecer-small-1x..jpg';
import imagenGalicia from './imgSizes/imagenGalicia-small-1x..jpg';
import imagenReloj from './imgSizes/imagenReloj-small-1x..jpg';
import imagenEdimburgo from './imgSizes/imagenEdimburgo-small-1x..jpg';



document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const captionText = document.getElementById('caption');
  const closeBtn = document.getElementsByClassName('close')[0];
  console.log(screen.width);

  const images = [
    { src: imagenAbadia, alt: 'La abadía de Whitby, conocida en el periodo anglosajón como Streoneshalh, es una abadía benedictina en ruinas situada junto a la orilla del mar del Norte en el acantilado oriental por encima de Whitby en Yorkshire del Norte, Inglaterra.' },
    { src: imagenCzecha, alt: 'El mausoleo de los Schwarzenberg, el lugar donde descansa una de las familias aristocráticas checas más poderosas' },
    { src: imagenAgua, alt: 'El Monte Saint-Michel es un pueblo construido sobre una pequeña isla rocosa del estuario del río Couesnon, en Normandía, alrededor de la Abadía del Monte Saint-Michel.' },
    { src: imagenMuralla, alt: 'Imagen de dos torres de una muralla localizadas en en Reino Unido.' },
    { src: imagenTokio, alt: 'El castillo de Himeji es un castillo japonés localizado en la ciudad costera de Himeji en la prefectura de Hyōgo, a unos 47 km al oeste de Kōbe' },
    { src: imagenAtardecer, alt: 'El castillo de Neuschwanstein está situado en el estado federado de Baviera, en Hohenschwangau, cerca de Füssen. Lo mandó a construir el rey Luis II de Baviera en 1869. Su nombre original era Nuevo castillo de Hohenschwangau, ​ en honor al castillo donde el rey pasó gran parte de su infancia.' },
    { src: imagenGalicia, alt: 'El castillo de Edimburgo es una antigua fortaleza erigida sobre una roca de origen volcánico ubicada en el centro de la ciudad de Edimburgo, Escocia. Aunque existen restos humanos desde la Edad del Hierro, el primer castillo se construyó durante el reinado de David I y continuó como residencia real hasta 1633.' },
    { src: imagenReloj, alt: 'Calton Hill es una mezcla de zonas comerciales concurridas y calles residenciales tranquilas. En la propia colina, con vistas a la ciudad, se encuentra la galería de arte contemporáneo Collective y el Monumento Nacional, sin acabar. La parte de arriba de la concurrida Leith Walk está llena de bares gais y restaurantes informales, y en el Edinburgh Playhouse se presentan musicales y espectáculos de humor.' },
    { src: imagenEdimburgo, alt: 'Este edificio, de estilo gótico tardío, parece formar parte de un complejo arquitectónico histórico, probablemente un castillo o una iglesia adaptada para otros fines. Sus muros de piedra maciza, coronados por pináculos decorativos, reflejan un diseño típico del gótico europeo.' },

  ];

  images.forEach(image => {
    const picture = document.createElement('picture');

    const source1x = document.createElement('source');
    source1x.srcset = `${image.src.replace('small-1x', 'small-1x')} 1x, ${image.src.replace('small-1x', 'small-2x')} 2x`;
    source1x.media = '(max-width: 600px)';
    picture.appendChild(source1x);

    const source2x = document.createElement('source');
    source2x.srcset = `${image.src.replace('small-1x', 'medium-1x')} 1x, ${image.src.replace('small-1x', 'medium-2x')} 2x`;
    source2x.media = '(max-width: 1290px)';
    picture.appendChild(source2x);

    const source3x = document.createElement('source');
    source3x.srcset = `${image.src.replace('small-1x', 'large-1x')} 1x, ${image.src.replace('small-1x', 'large-2x')} 2x`;
    source3x.media = '(min-width: 1290px)';
    picture.appendChild(source3x);

    const img = document.createElement('img');
    img.src = image.src.replace('small-1x', 'medium-1x');
    img.alt = image.alt;
    img.classList.add('gallery-img');
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = image.src.replace('small-1x', 'xlarge-2x');
      captionText.innerHTML = image.alt;
    });
    picture.appendChild(img);

    gallery.appendChild(picture);
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  };
});
