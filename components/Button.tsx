import '@styles/button.css'

interface ButtonProps {
    text: string;
    width: number;
}

export default function Button(props: ButtonProps) {
    return (
        <button className="button ripple" style={{width: `${props.width}px`}} id="launch">{props.text}</button>
    )
}
