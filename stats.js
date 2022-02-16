

/*const totalLinks = (array) => {
    const total = array.length;
    return `Total: ${total}`;
  };
  
  const uniqueLinks = (array) => {
    const unique = [...new Set(array.map((link) => link.href))];
    return `Unicos: ${unique.length}`;
  };
  
  const brokenLinks = (array) => {
    const broken = array.filter((link) => link.status< 200 || link.status>= 400 || link.statusText === 'FAIL');
    return `Rotos: ${broken.length}`;
  };*/



  export const Stats = (array) => {
    const total= array.length
    const brokens = array.filter((link) => link.statusText === 'FAIL'||link.status>= 400).length;
    const unique= new Set(array.map(({ href }) => href)).size
 
    return  ` Total: ${total} \n Unique:${unique} \n Broken:${brokens}`;    
};




const prueba = [
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

/*console.log(totalLinks(prueba))
console.log(uniqueLinks(prueba))
console.log(brokenLinks(prueba))*/
console.log(Stats(prueba))
