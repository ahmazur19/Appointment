const AppointmentsShow = (props) => {
    const {appointments} = props
    console.log(props)
    return (
        <div>
            <h2>appointment: {appointments.id}</h2>

            {appointments.created_at}
        </div>
    )
}

export default AppointmentsShow