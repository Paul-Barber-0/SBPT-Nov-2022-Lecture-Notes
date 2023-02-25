import EmployeeInfo from "./EmployeeInfo";

function Employee() {
    
    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL"
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY"
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY"
        }
    ]
    
    return(
        <>
            <h1>Employess!</h1>
            {
                employeeRecords.map(record => (
                    <EmployeeInfo
                        name={record.name}
                        city={record.city}
                        state={record.state}
                        />
                ))
            }
        </>
    )
}

export default Employee;