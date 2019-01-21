import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-responsive-modal';

const styles = {
    fontFamily : "sans-serif",
    textAlign : "left"
}

//2018-01-11 developed by Phillix for fetching and showing data from api

class ManageMainBoard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //button state flag
            open : false,

            //api error handler
            error : null,
            is_Loaded : false,

            //api data subscriber
            drinks : []
        };
    }

    componentDidMount(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        is_Loaded : true,
                        drinks : result.drinks
                    });
                },
                (error) => {
                    this.setState({
                        is_Loaded: false,
                        error
                    });
                }
            )
    }

    onOpenModalDialog = () => {
        this.setState({open : true});
    }

    onCloseModalDialog = () => {
        this.setState({open : false});
    }
  
    render() {    
            
            const { error, is_Loaded, drinks, open } = this.state;

            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!is_Loaded) {
                return <div>Loading...</div>;
            } else {
            return (
                <div className="container-fluid dashboard_page center">
                    <div className="row dashboard_area">
                        <div className="dashboard_main_part col-md-12">
                            <div className="row social_profiles">
                                        {drinks.map(item =>(
                                                <div className="col-md-3 prof_item">
                                                    <div className="prof_data" >
                                                        <div className="prof_img" >
                                                            <img src={item.strDrinkThumb} alt="" onClick={ this.onOpenModalDialog}/>
                                                        </div>
                                                        <div className="prof_content">
                                                            <h4>{item.strDrink}</h4>
                                                            <p>{item.idDrink}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))}                            
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ManageMainBoard;