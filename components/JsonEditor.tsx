import React from 'react'

function JsonEditor() {
  return (
    <div>
        <h2>JSON Editor</h2>
        <span>Format and beautify JSON</span>
        <div>
            <label>Input JSON</label>
            <textarea placeholder='place your JSON here... eg., {"name":"John Doe","age":30}'/>
        </div>
    </div>
  )
}

export default JsonEditor