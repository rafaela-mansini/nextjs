import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'

const ResourceCreate = () => {

  return(
    <Layout>
      <Wrapper>
        <div className="forms">
          <h1 className="title">Add new resources</h1>
          <form>

            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Insert the title" />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div classNameclass="control">
                <textarea 
                  className="textarea" 
                  placeholder="Insert here your description">
                  </textarea>
              </div>
            </div>

            <div className="field">
              <label className="label">Link</label>
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Insert a link" />
              </div>
            </div>

            <div class="field is-grouped">
      
              <div className="field control">
                <label className="label">Priority</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="number" 
                    placeholder="Insert the priority" />
                </div>
              </div>

              <div className="field control">
                <label className="label">Time to finish</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="number" 
                    placeholder="Insert a time to finish (in minutes)" />
                </div>
              </div>

              <div className="field control">
                <label className="label">Is active?</label>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-link">Save</button>
              </div>
            </div>

          </form>          
        </div>
      </Wrapper>
    </Layout>
  )

}

export default ResourceCreate