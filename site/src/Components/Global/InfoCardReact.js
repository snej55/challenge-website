import './InfoCardReact.css'

export function Info(props) {
    return (


        <div id="creative" class="info-card card-blue">
            <h3><i class="fa-solid fa-circle-info"></i>Information</h3>
            {props.children}

        </div>


    )
}
export function Tips(props) {
    return (


        <div id="creative" class="info-card card-green">
            <h3><i class="fa-solid fa-lightbulb"></i>Tips</h3>
            {props.children}

        </div>


    )
}

export function Important(props) {
    return (


        <div id="creative" class="info-card card-orange">
            <h3><i class="fa-solid fa-star"></i>Important</h3>
            {props.children}

        </div >


    )
}

export function Warning(props) {
    return (


        <div id="creative" class="info-card card-red">
            <h3><i class="fa-solid fa-triangle-exclamation"></i>Warning</h3>
            {props.children}

        </div >


    )
}