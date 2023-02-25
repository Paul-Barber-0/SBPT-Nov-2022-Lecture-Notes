import DisplayTotals from "./DisplayTotals";

function PresidentVotes() {
    let presidentRecords = [
        { name: "Abe Lincoln", count: 139033},
        { name: "Stephen Douglas", count: 115509},
    ];
    return(
        <>
        <h1>Presidents</h1>
        {
            presidentRecords.map((record, index) => (
                <DisplayTotals
                    key={index}
                    name={record.name}
                    count={record.count}
                />
            ))
        }

        </>
    )
}

export default PresidentVotes;