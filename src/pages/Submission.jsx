// import * as React from 'react'

function Submission() {
    return (
      <div>
        <h1>Submit New Story</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            title: e.target.title.value,
            when: e.target.when.value,
            body: e.target.body.value,
            tags: e.target.tags.value.split(',').map(tag => tag.trim()),
            images: e.target.images.files,
            submittedAt: new Date().toISOString()
          };
          console.log(formData);
        }}>
          <div>
            <label htmlFor="title">Title:</label>
            <input 
              type="text"
              id="title"
              name="title"
              required
              placeholder="Who or What is this Story about?"
            />
          </div>
          <div>
            <label htmlFor="when">When:</label>
            <input 
              type="text"
              id="when"
              name="when"
              required
              placeholder="When did this happen?"
            />
          </div>

          <div>
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              name="body"
              rows="5"
              required
            />
          </div>

          <div>
            <label htmlFor="tags">Tags (comma separated):</label>
            <input
              type="text"
              id="tags" 
              name="tags"
              placeholder="Add tags to help categorize your Story"
            />
          </div>

          <div>
            <label htmlFor="images">Images:</label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              multiple
            />
          </div>

          <button type="submit">Submit Article</button>
        </form>
      </div>
    )
  }
  
  export default Submission