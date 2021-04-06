import { useState } from 'react'
import axios from 'axios'

import Layout from 'components/Layout'
import Wrapper from 'components/Wrapper'

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "",
  timeToFinish: 0,
  status: "active"
}

const ResourceCreate = () => {

  const [form, setForm] = useState(DEFAULT_DATA);

  const reset = () => setForm(DEFAULT_DATA)

  const submitForm = () => {
    axios.post("/api/resources", form)
      .then((res) => {
        alert(res?.data)
        reset()
      })
      .catch((error) => alert(error?.response?.data))
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
                <label className="label">Status</label>
                <div className="control">
                  <div className="select">
                    <select 
                      name="status"
                      onChange={handleChange}
                      defaultValue={form.active}>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
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
                  type="button"
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