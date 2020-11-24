import React, {Component} from 'react';
import SearchResults from '../components/SearchResults'

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
      result:[],
      title: true,
    }
  }

  search = () => {
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=482ddb7585e8481baf4ad85cceb81b64' + this.state.search)
    .then(res => res.json())
    .then(searches => {
      this.setState({ result: searches.results})
    })
  }
  updateSearch = (e) => {
    this.setState({ search: e.target.value})
    console.log(e.target.value)
  }

  render () {
    return (
      <div>
        <section>
          <form>
            <label>
              <input type="text" name="search" onChange={this.updateSearch}/>
            </label>
          </form>

          <h2 onClick={this.search}>General Search</h2>
        </section>
        <ol>
          {
            this.state.result.map((result, index) => {
              return <SearchResults key={index} title = {result.title} image = {result.image} imageType = {result.imageType}/>;
            })
          }
        </ol> 
      </div>
    );
  }
}

export default Fetch;