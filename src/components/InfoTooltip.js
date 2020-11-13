import React from 'react';

function InfoTooltip(props) {
    return(
        <section className='popup popup_type_infotooltip'>
            <div className='popup__container popup__container_type_infotooltip'>
                <button className='popup__close-button button' type="button"></button>
                <div className="popup__image" style={{backgroundImage: `url(${props.loggedIn} ? '../../../images/union.svg' : '../../../images/red-cross.svg)'`}} />
                <h2 className="popup__title popup__title_type_infotooltip">{props.loggedIn ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
            </div>
        </section>
    )
}

export default InfoTooltip;