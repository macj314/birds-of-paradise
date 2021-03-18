import axios from 'axios';
import React, {Component} from "react";
import SightingList from './SightingList'

class Search extends Component {
    state = {
        sightings: null,
        loading: false,
        value: ''
    };

    search = async val => {
        this.steState({ loading: true });
        const res = await axios('https://api.ebird.org/v2/data/obs/${val}/recent?maxResults=5'
        );
        const sightings = await res.data.results;
        this.setState({ sightings, loading: false });
    };

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e})
    }
}

export default Search;