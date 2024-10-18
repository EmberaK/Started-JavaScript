import DetailsForm from './People';

const MainSite = () => {
    return (
        <div style={{
            padding: '40px',
            border: '3px solid #e9e9e9',
            borderRadius: '10px',
        }}>
            <div style={{
                display: 'flex',
                gap: '20px',
                paddingBottom: '20px',
            }}>
                <button style={{
                    backgroundColor: 'gray',
                    color: 'white',
                    border: '1px solid transparent',
                    borderRadius: '5px',
                    padding: '5px 15px',
                    fontWeight: 'bold',
                }}>{Object.keys(DetailsForm)[0]}</button>
                <button style={{
                    backgroundColor: 'gray',
                    color: 'white',
                    border: '1px solid transparent',
                    borderRadius: '5px',
                    padding: '5px 15px',
                    fontWeight: 'bold',
                }}>{Object.keys(DetailsForm.people)[0]}</button>
            </div>
            <div>
                <pre style={{ margin: '0px' }}>{JSON.stringify(DetailsForm.people[1], null, 2)}</pre>
            </div>
        </div>
    );
}
export default MainSite;