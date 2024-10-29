function FootItem (props) {
    return <li> { props.item }</li>;
}

export default function Footer (props) {
    const footItems = [...props.footerElements]
    return<>
            <ul className="footer-container">
                {footItems.map((el)=> < FootItem item={el}/>)}
            </ul>
    </> 
}