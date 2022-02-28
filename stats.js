


export const total = (array) => {
  
    const total = array.length;
    return total;
  };
  
  export const unique = (array) => {
    const unique = [...new Set(array.map((link) => link.href))].length;
    return unique;
  };
  
  export const broken = (array) => {
    const broken = array.filter((link) => link.status< 200 || link.status>= 400 || link.statusText === 'FAIL').length;
    return broken;
  };






 /*const statsLinks = (linkhref) => {
  const total = linkhref.length;
  // eslint-disable-next-line max-len
  const unique = linkhref.reduce((count, href) => (linkhref.indexOf(href) === linkhref.lastIndexOf(href) ? count + 1 : count), 0);
  return `Total: ${total} \nUnique: ${unique}`;
};

export default statsLinks;*/


export const prueba = [
 {
    href: '#1-pre%C3%A1mbulo',
    text: '1. Preámbulo',
    file: 'C:/Users/Laboratoria/Desktop/md/LIM016-md-links/README.md',
    status: 500,
    statusText: 'FAIL'
  },
  
 
  {
    href: '#6-entregables',
    text: '6. Entregables',
    file: 'C:/Users/Laboratoria/Desktop/md/LIM016-md-links/README.md',
    status: 500,
    statusText: 'FAIL'
  },
 
  {
    href: '#9-checklist',
    text: '9. Checklist',
    file: 'C:/Users/Laboratoria/Desktop/md/LIM016-md-links/README.md',
    status: 500,
    statusText: 'FAIL'
  },
  {
    href: '#10-achicando-el-problema',
    text: '10. Achicando el problema',
    file: 'C:/Users/Laboratoria/Desktop/md/LIM016-md-links/README.md',
    status: 500,
    statusText: 'FAIL'
  },

 
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/Laboratoria/Desktop/md/LIM016-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },

  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/Laboratoria/Desktop/md/LIM016-md-links/README.md',
    status: 200,
    statusText: 'OK'
  },

  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/Laboratoria/Desktop/md/LIM016-md-links/README.md',
    status: 200,
    statusText: 'OK'
  }

]

/*console.log(total(prueba))
console.log(unique(prueba))
console.log(broken(prueba))*/
//console.log(stats(prueba))
















