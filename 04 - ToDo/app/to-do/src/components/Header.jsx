
export default function Header(props) {

    return (
        <div className='relative my-2 py-1'>
            <h2 className='text-3xl font-semibold text-slate-800'>{props.label}</h2>
        </div>
    )
}
