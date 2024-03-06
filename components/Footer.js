import react from 'react';
import styled from 'styled-components';

const footer = () => {
return(
<FooterContainer className="main-footer">
<div className="main-footer">
<div className="footer-middle">
<div className="container">
<div className="row">
<div className="col-md-3 col-sm-6">
<h4>Footer 1</h4>
<ul className="list-unstyled">
<li>isi footer 1</li>
<li>isi footer 1</li>
<li>isi footer 1</li>
</ul>
</div>
<div className="col-md-3 col-sm-6">
<h4>Footer 2</h4>
<ul className="list-unstyled">
<li>isi footer 2</li>
<li>isi footer 2</li>
<li>isi footer 2</li>
</ul>
</div>
<div className="col-md-3 col-sm-6">
<h4>Footer 3</h4>
<ul className="list-unstyled">
<li>isi footer 3</li>
<li>isi footer 3</li>
<li>isi footer 3</li>
</ul>
</div>
<div className="col-md-3 col-sm-6">
<h4>Footer 4</h4>
<ul className="list-unstyled">
<li>isi footer 4</li>
<li>isi footer 4</li>
<li>isi footer 4</li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p className="text-xs-center">
&copy;{new Date().getFullYear()} - All Rights Reserved
</p>
</div>
</div>
</div>
</div>
</FooterContainer>
);
}
export default footer

const FooterContainer = styled.footer`
.footer.middle {
    background: var(--mainDark);
    paading-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-button: 2rem;
}
`;