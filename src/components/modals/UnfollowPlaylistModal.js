import React, { Component } from 'react'

class UnfollowPlaylistModal extends Component {
  render() {
    return (
      <div>
        <div
          onClick={() => this.props.closeModal()}
          className="modal-background"
        />
        <div className="modal-content">
          <h1 className="title">Stop following playlist</h1>
          <p
            style={{
              textAlign: 'center',
              margin: '30px 0px',
              fontSize: '16px'
            }}
          >
            Are you sure you want to stop following playlist?
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
                onClick={() => this.props.unfollowPlaylist()}
                className="button is-primary"
              >
                Stop following
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

export default UnfollowPlaylistModal
