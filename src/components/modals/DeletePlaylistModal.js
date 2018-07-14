import React, { Component } from 'react'

class DeletePlaylistModal extends Component {
  render() {
    return (
      <div>
        <div
          onClick={() => this.props.closeModal()}
          className="modal-background"
        />
        <div className="modal-content">
          <h1 className="title">Delete Playlist</h1>
          <p
            style={{
              textAlign: 'center',
              margin: '30px 0px',
              fontSize: '16px'
            }}
          >
            Are you sure you want to delete playlist?
          </p>
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <a
                onClick={() => this.props.closeModal()}
                className="button is-light"
              >
                Cancel
              </a>
            </p>
            <p className="control">
              <a
                onClick={() => this.props.deletePlaylist()}
                className="button is-primary"
              >
                Delete
              </a>
            </p>
          </div>
        </div>

        <button
          onClick={() => this.props.closeModal()}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    )
  }
}

export default DeletePlaylistModal
