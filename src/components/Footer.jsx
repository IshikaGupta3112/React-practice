import react from 'react';
const date = new Date();
const year = date.getFullYear();
function Footer(){
return <footer>Copyright &copy; {year}</footer>
}
export default Footer;