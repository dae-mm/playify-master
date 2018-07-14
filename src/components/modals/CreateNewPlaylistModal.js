import React, { Component } from 'react'

class CreateNewPlaylistModal extends Component {
  state = {
    name: '',
    desc: ''
  }
  prepareCloseModal = () => {
    this.setState({ name: '', desc: '' })
    this.props.closeModal()
  }
  render() {
    return (
      <div>
        <div
          onClick={() => this.prepareCloseModal()}
          className="modal-background"
        />
        <div className="modal-content">
          <h1 className="title">My Playlist</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
                className="input"
                type="text"
                placeholder="My playlist"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                onChange={e => this.setState({ desc: e.target.value })}
                value={this.state.desc}
                className="textarea"
                placeholder="My Favorite Playlist"
              />
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <a
                onClick={() => this.prepareCloseModal()}
                className="button is-light"
              >
                Cancel
              </a>
            </p>
            <p className="control">
              <a
                onClick={() =>
                  this.props.createPlaylist(this.state.name, this.state.desc)}
                className="button is-primary"
              >
                Create
              </a>
            </p>
          </div>
        </div>

        <button
          onClick={() => this.prepareCloseModal()}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    )
  }
}

export default CreateNewPlaylistModal
