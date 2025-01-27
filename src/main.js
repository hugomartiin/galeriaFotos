//import imagenAbadia from './imgSizes/imagenAbadia-small-1x..jpg';
//import imagenCzecha from './imgSizes/imagenCzecha-small-1x..jpg';
//import imagenAgua from './imgSizes/imagenAgua-small-1x..jpg';
//import imagenMuralla from './imgSizes/imagenMuralla-small-1x..jpg';
//import imagenTokio from './imgSizes/imagenTokio-small-1x..jpg';
//import imagenAtardecer from './imgSizes/imagenAtardecer-small-1x..jpg';
//import imagenGalicia from './imgSizes/imagenGalicia-small-1x..jpg';
//import imagenReloj from './imgSizes/imagenReloj-small-1x..jpg';
//import imagenEdimburgo from './imgSizes/imagenEdimburgo-small-1x..jpg';



document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const captionText = document.getElementById('caption');
  const closeBtn = document.getElementsByClassName('close')[0];
  console.log(screen.width);

  const images = [
    {
      src: '/imgSizes/imagenAbadia-small-1x..jpg',
      alt: 'La abadía de Whitby, conocida en el periodo anglosajón como Streoneshalh, es una abadía benedictina en ruinas situada junto a la orilla del mar del Norte en el acantilado oriental por encima de Whitby en Yorkshire del Norte, Inglaterra.',
    },
    {
      src: '/imgSizes/imagenCzecha-small-1x..jpg',
      alt: 'El mausoleo de los Schwarzenberg, el lugar donde descansa una de las familias aristocráticas checas más poderosas.',
    },
    {
      src: '/imgSizes/imagenAgua-small-1x..jpg',
      alt: 'El Monte Saint-Michel es un pueblo construido sobre una pequeña isla rocosa del estuario del río Couesnon, en Normandía, alrededor de la Abadía del Monte Saint-Michel.',
    },
    {
      src: '/imgSizes/imagenMuralla-small-1x..jpg',
      alt: 'Imagen de dos torres de una muralla localizadas en el Reino Unido.',
    },
    {
      src: '/imgSizes/imagenTokio-small-1x..jpg',
      alt: 'El castillo de Himeji es un castillo japonés localizado en la ciudad costera de Himeji en la prefectura de Hyōgo, a unos 47 km al oeste de Kōbe.',
    },
    {
      src: '/imgSizes/imagenAtardecer-small-1x..jpg',
      alt: 'El castillo de Neuschwanstein está situado en el estado federado de Baviera, en Hohenschwangau, cerca de Füssen.',
    },
    {
      src: '/imgSizes/imagenGalicia-small-1x..jpg',
      alt: 'El castillo de Edimburgo es una antigua fortaleza erigida sobre una roca de origen volcánico ubicada en el centro de la ciudad de Edimburgo, Escocia.',
    },
    {
      src: '/imgSizes/imagenReloj-small-1x..jpg',
      alt: 'Calton Hill es una mezcla de zonas comerciales concurridas y calles residenciales tranquilas.',
    },
    {
      src: '/imgSizes/imagenEdimburgo-small-1x..jpg',
      alt: 'Este edificio, de estilo gótico tardío, parece formar parte de un complejo arquitectónico histórico.',
    },
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
