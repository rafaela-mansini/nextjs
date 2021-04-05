import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'
import { useState } from 'react'

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "",
  timeToFinish: 0,
  active: false
}

const ResourceCreate = () => {

  const [form, setForm] = useState(DEFAULT_DATA);

  const reset = () => setForm(DEFAULT_DATA)

  const submitForm = () => {
    alert(JSON.stringify(form))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

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
                  name="title"
                  onChange={handleChange}
                  className="input"
                  type="text" 
                  placeholder="Insert the title"
                  value={form.title} />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  name="description"
                  onChange={handleChange}
                  className="textarea" 
                  placeholder="Insert here your description"
                  value={form.description}>
                  </textarea>
              </div>
            </div>

            <div className="field">
              <label className="label">Link</label>
              <div className="control">
                <input 
                  name="link"
                  onChange={handleChange}
                  className="input" 
                  type="text" 
                  placeholder="Insert a link"
                  value={form.link} />
              </div>
            </div>

            <div className="field is-grouped">
      
              <div className="field control">
                <label className="label">Priority</label>
                <div className="control">
                  <input
                    name="priority"
                    onChange={handleChange}
                    className="input" 
                    type="number" 
                    placeholder="Insert the priority"
                    value={form.priority} />
                </div>
              </div>

              <div className="field control">
                <label className="label">Time to finish</label>
                <div className="control">
                  <input
                    name="timeToFinish"
                    onChange={handleChange}
                    className="input" 
                    type="number" 
                    placeholder="Insert a time to finish"
                    value={form.timeToFinish} />
                    <p className="help">Time in minutes</p>
                </div>
              </div>

              <div className="field control">
                <label className="label">Is active?</label>
                <div className="control">
                  <div className="select">
                    <select 
                      onChange={handleChange}
                      defaultValue={form.active}>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button
                  type="button"
                  onClick={submitForm}
                  className="button is-link">Save</button>
              </div>
              <div className="control">
                <button
                  onClick={reset}
                  className="button is-link is-light">Reset Form</button>
              </div>
            </div>

          </form>          
        </div>
      </Wrapper>
    </Layout>
  )

}

export default ResourceCreate