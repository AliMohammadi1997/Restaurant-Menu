const Menu = ({ menu }) => {

    return (
        <div className="menu">
            {
                menu.map(item => (
                    <article key={item.id} className="menuItem">
                        <img src={item.img} alt="" className="menuItemImg" />
                        <div className="menuItemInfo">
                            <div className='menuItem-title-price'>
                                <p className="menuItemTitle">{item.title}</p>
                                <span className="menuItemPrice">{item.price}</span>
                            </div>

                            <p className="menuItemDesc"> {item.des} </p>
                        </div>
                    </article>
                ))
            }
        </div>
    );
}

export default Menu;
