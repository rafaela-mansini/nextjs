const Wrapper = ({children}) => {
  return(
    <>
    <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Wrapper