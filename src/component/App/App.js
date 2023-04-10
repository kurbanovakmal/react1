import React, { Component } from "react";

import AppHeader from '../App-header/App-header';
import ItemAdd from "../Item-add/Item-add";
import ItemStatusFilter from "../Item-stasus-filter/Item-status-filter";
import PanelSearch from '../Panel-search/Panel-search';
import TodoList from '../Todo/Todo-list';


export default class App extends Component {

    maxid = 100;

    MakeProps (arr, id, propsName) {
            const idx = arr.findIndex((e) => e.id === id )
            const olditem = arr[idx]
            const newItem = {...olditem, [propsName]: !olditem[propsName]}
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ]


    }

    ToggleDone = (id) => {
        this.setState(({todData}) => {
            return {
                todData: this.MakeProps(todData,id,'done')
                
            }


        })
    }
    ToggleImportant = (id) => {
        this.setState(({todData}) => {
            return {
                todData: this.MakeProps(todData,id,'important')
            }

        })
        
    }

    state = {
        todData: [
            this.createItem('Drink cofee'),
            this.createItem('Make Awesome App'),
            this.createItem('Have a lunch'),
        ],
        term: '',
        filter: 'active'
    }

    createItem (label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxid++
        }
    }

    DeleteItem = (id) => {
        this.setState(
            ({todData}) => {
                const idx = todData.findIndex((e) => e.id === id )
                const newArray = [
                    ...todData.slice(0, idx),
                    ...todData.slice(idx + 1)
                ]
                return {
                    todData: newArray
                }
            }
             
        )
    }

    AddItem = (text) => {
        const item = this.createItem(text)
        this.setState(({todData}) => {
            const new_array = [
                ...todData,
                item
            ]
            return {
                todData: new_array
            }
        })
    }


    search = (items, term) => {
        if(term.length === '') {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term) > -1
        })
    }

    Filter = (e) => {
        this.setState({
            term: e.target.value.toLowerCase()
        })
    }
    onFilterChange = (filter) => {
        this.setState({filter})
    }

    filterItem = (items, filter) => {
        switch (filter) {
            case 'all':
                return items
            case 'active':
                return items.filter(item => !item.done)
            case 'done':
                return items.filter(item => item.done)
            default:
                return items
        }
    }



    render() {
        const {todData, term, filter} = this.state
        const visibleItem = this.filterItem(this.search(todData, term), filter)
        const count = this.state.todData.filter((el) => el.done).length
        const tododoneCount = this.state.todData.length - count
        return (
            <div className="panel">
                <AppHeader todo={tododoneCount} done={count} />
                <div className="wrapper">
                    <PanelSearch FilterDone={this.Filter} />
                    <ItemStatusFilter
                     filter = {filter}
                     onFilterChange = {this.onFilterChange}/>
                </div>
                <TodoList todos = {visibleItem}
                onDeleted={this.DeleteItem}
                ToggleDone = {this.ToggleDone}
                ToggleImportant = {this.ToggleImportant}/>
                <ItemAdd onAdded={this.AddItem} />  
            </div>
        );
    }

    
};

