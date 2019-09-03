import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCustomer, deleteCustomer } from '../actions';
import { Customer, State } from '../types';
import { Link } from 'react-router-dom';

const chunkLength = 4;

interface PropsToPass {
  keyword: string;
  result: Customer[];
  onDispatchSearch: (keyword: string) => void;
  onDispatchDelete: (id: string) => void;
}

class Search extends Component<PropsToPass> {
  private keywordRef = React.createRef<HTMLInputElement>();

  componentDidMount() {
    this.props.onDispatchSearch('');
  }

  render() {
    let chunks = [];
    let i;
    for (i = 0; i < this.props.result.length; i += chunkLength) {
      chunks.push(this.props.result.slice(i, i + chunkLength));
    }
    return (
      <>
        <section className="section">
          <nav className="level">
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Type anything to search..."
                    ref={this.keywordRef}
                    size={50}
                    onKeyDown={e => {
                      if (e.key !== 'Enter') {
                        return;
                      }
                      this.keywordRef.current &&
                        this.props.onDispatchSearch(
                          this.keywordRef.current.value.trim()
                        );
                    }}
                  />
                </p>
                <p className="control">
                  <button
                    className="button is-primary"
                    onClick={e => {
                      this.keywordRef.current &&
                        this.props.onDispatchSearch(
                          this.keywordRef.current.value.trim()
                        );
                    }}
                  >
                    Search
                  </button>
                </p>
              </div>
            </div>
          </nav>
        </section>
        <section className="section">
          {chunks.map((tiles, idx0) => {
            return (
              <div className="tile is-ancestor" key={`tiles-${idx0}`}>
                {tiles.map((tile, idx1) => {
                  return (
                    <div
                      className={`tile is-parent is-${12 / chunkLength}`}
                      key={`tile-${idx0}-${idx1}`}
                    >
                      <div className="tile is-child box">
                        <div>
                          <label className="label">Full Name</label>
                          <div>
                            {tile.firstName}&nbsp;{tile.lastName}
                          </div>
                        </div>
                        <div>
                          <label className="label">Date of Birth</label>
                          <div>{tile.dateOfBirth.toDateString()}</div>
                        </div>
                        <div className="is-grouped">
                          <Link
                            className="button is-link"
                            to={`/edit/${tile.id}`}
                          >
                            Edit
                          </Link>
                          &nbsp;
                          <button
                            className="button is-danger"
                            onClick={this.props.onDispatchDelete.bind(
                              this.props,
                              tile.id
                            )}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>
      </>
    );
  }
}

const mapSearchStateToProps = (state: State) => {
  return {
    keyword: state.keyword,
    result: state.result
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onDispatchSearch: (keyword: string) => dispatch(searchCustomer(keyword)),
    onDispatchDelete: (id: string) => dispatch(deleteCustomer(id))
  };
};

const ConnectedSearch = connect(
  mapSearchStateToProps,
  mapDispatchToProps
)(Search);

export default ConnectedSearch;
