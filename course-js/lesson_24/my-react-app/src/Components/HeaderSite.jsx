const HeaderSite = () => {
  return (
    <div style={{
      display: 'flex',
      paddingBottom: '25px'
    }}>
      <form action='#' method='get' style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',        
        alignItems: 'center',
      }}>
        <label htmlFor='search-input'
          style={{
            border: 'none',
            padding: '10px',
            backgroundColor: '#e9e9e9',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            alignSelf: 'center'
          }}
        >http://swapi.dev/api/</label>
        <input
          type="text"
          id='search-input'
          placeholder='people/1/'
          style={{
            border: '#e9e9e9 1px solid',
            padding: '10px',
            width: '77%',
            alignSelf: 'center',
          }}
        />
        <button
          type='submit'
          style={{
            border: '#e9e9e9 1px solid',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            padding: '10px',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px'
          }}
        >
          Get info
        </button>
      </form>
    </div>
  );
}
export default HeaderSite;