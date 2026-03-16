const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  title: 'Workintech',
  logo: 'https://i.ibb.co/gysPB8V/logo.png',
  links: [
    {
      href: 'programlarimiz.html',
      text: 'Programlarımız',
    },
    {
      href: 'blog.html',
      text: 'Blog',
    },
    {
      href: 'sorulariniz.html',
      text: 'Sorularınız',
    },
    {
      href: 'hakkimizda.html',
      text: 'Hakkımızda',
    },
  ],
};

/* Kodlar Buradan aşağıya */

document.getElementsByTagName('title')[0].textContent = siteContent.title;

document.getElementById('logo-img').src = siteContent.logo;


const links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent.links[i].text;
  links[i].href = siteContent.links[i].href;
}
