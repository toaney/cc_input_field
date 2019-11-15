import React from 'react';
import axios from 'axios';

const CardInput = () => {
    const [ cardInput, setCardInput ] = React.useState("");
    const [ cardType, setCardType ] = React.useState("");
    const [ validInput, setValidInput ] = React.useState(false);
    const [ validLength, setValidLength ] = React.useState(false);
    const [ apiError, setApiError ] = React.useState(false)

    React.useEffect(() => {
        // check input for letters or special chars
        if (/^\d+$/.test(cardInput)){
            setValidInput(true)
        } else {
            setValidInput(false)
        }

        // check input for valid length
        if (cardInput.length === 15 && cardType === "amex" ){
            setValidLength(true)
        } else if (cardInput.length === 16 && cardType !== "amex" ){
            setValidLength(true)
        } else {
            setValidLength(false)
        }

    }, [cardInput, cardType]);

    // validate card
    const validate_card = (num) => {
        return axios.get(`https://lookup.binlist.net/${num}`)
        .then((res) => {
            let result = res.data.scheme || 'Error validating';
            !res.data.scheme? setCardType("") : setCardType(result);
            setApiError(false);
            return result;
        })
        .catch((err) => {
            setCardType("unknown");
            setApiError(true);
            return err.message;
        });
    };

    const handleChange = (userInput) => {
        // setCardInput(document.getElementById("card-input").innerHTML);
        let input = userInput.replace(/\s/g, '')

        setCardInput(input);
        // configure how often to call binlist API
        if ((input.length > 3 && input.length < 6) || input.length > 14){
            validate_card(input)
        }
    }
   
    // format input for non-Amex
    const formatInput = (n) => {
        if (n.length > 12){
            return `${n.slice(0, 4)} ${n.slice(4, 8)} ${n.slice(8, 12)} ${n.slice(12)}`
        } else if (n.length > 8){
            return `${n.slice(0, 4)} ${n.slice(4, 8)} ${n.slice(8)}`
        } else if (n.length > 4){
            return `${n.slice(0, 4)} ${n.slice(4)}`
        } else {
            return n
        }
    }
    // format input for Amex
    const formatAmexInput = (n) => {
        if (n.length > 9){
            return `${n.slice(0, 4)} ${n.slice(4, 9)} ${n.slice(9)}`
        } else if (n.length > 4){
            return `${n.slice(0, 4)} ${n.slice(4)}`
        } else {
            return n
        }
    }

    return(
        <React.Fragment>
            <div className="card-component">
                {/* <p className="card-input-label">Credit Card Number <span className="required">*</span></p> */}
                <label className="card-input-label" htmlFor="card-input-field">Credit Card Number <span className="required">*</span></label>
                <div className="card-input-container">
                    <input 
                        className="card-input"
                        id="card-input-field"
                        aria-describedby="api-error"
                        type="text" 
                        placeholder="1234 1234 1234 1234"
                        value={
                            cardType === "amex"? formatAmexInput(cardInput) : formatInput(cardInput)
                        }
                        maxLength="19" onChange={ e => {
                        handleChange(e.target.value)
                    }}></input>
                    <img src="/generic.svg" className={ cardInput && (cardType === "unknown" || "jcb") ? "card-input-icon": "hide"} alt="generic credit card thumbnail"/>
                    <img src="/amex.svg" className={cardInput && cardType === "amex"? "card-input-icon": "hide"} alt="american express thumbnail"/>
                    <img src="/discover.svg" className={cardInput && cardType === "discover"? "card-input-icon": "hide"} alt="discover card thumbnail"/>
                    <img src="/mastercard.svg" className={cardInput && cardType === "mastercard"? "card-input-icon": "hide"} alt="mastercard thumbnail"/>
                    <img src="/visa.svg" className={cardInput && cardType === "visa"? "card-input-icon": "hide"} alt="visa card thumbnail"/>

                    {validLength && validInput && !apiError && <img src="/check.svg" className="card-input-checkmark" alt="checkmark"/>}
                    {((validLength && !validInput) || apiError) && <img src="/x.svg" className="card-input-exmark" alt="error"/>}
                </div>
                {validLength && apiError && <p className="card-input-error" id="api-error" role="alert">Oh no! Something went wrong.</p>}


            </div>
            {/* uncomment while debugging - displays component state on page 
            <p>card input: {cardInput}</p>
            <p>card type: {cardType}</p>
            <p>valid input: {validInput? "true" : "false"}</p>
            <p>valid length: {validLength? "true" : "false"}</p> */}

        </React.Fragment>
    )
}

export default CardInput;