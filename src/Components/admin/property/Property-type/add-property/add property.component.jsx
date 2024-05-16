import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPropertyType, saveAddProperty } from "../../../../../Services/property.service";

export class AddProperty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyTypes :[]

    }
}
// creating variables
propertyNameRef= React.createRef();
PropertyTypeRef=React.createRef();
SquarefeetRef=React.createRef();
constructionDateRef=React.createRef();
HomeLoanRef=React.createRef();
personalLoanRef=React.createRef();

componentDidMount(){
    getPropertyType()
    .then((res)=>{
        this.setState({propertyTypes : res.data.filter((item)=>item.isActive===true)})

    })
    .catch(()=>{

    })
}
saveAddPropertyData(event){
    event.preventDefault();
    let data={
        propertyName: this.propertyNameRef.current.value,
        propertyType: this.PropertyTypeRef.current.value,
        squarefeet:this.SquarefeetRef.current.value,
        constructionDate: this.constructionDateRef.current.value,
        homeLoan:this.HomeLoanRef.current.checked,
        personalLoan:this.personalLoanRef.current.checked
    }
    saveAddProperty(data)
    .then((res)=>{
        alert("add property data saved successfully")

    })
    .catch(()=>{
        alert("error")

    })
    .finally(()=>{
        this.clearForm();
    })
}
clearForm(){
    this.propertyNameRef.current.value="";
    this.PropertyTypeRef.current.value="";
    this.SquarefeetRef.current.value="";
    this.constructionDateRef.current.value="";
    this.HomeLoanRef.current.checked="";
    this.personalLoanRef.current.checked="";
}
    render() {
        return (
            <div>
                <h4>Add property</h4>
                <form onSubmit={(event)=>{this.saveAddPropertyData(event)}}>
                    <div className="form-group">
                        <label>Property Name</label>
                        <input type="text" className="form-control " ref={this.propertyNameRef}></input>
                    </div>
                    <div className="form-group">
                        <label>Property type</label>
                        <select className="form-control" ref={this.PropertyTypeRef}>
                            <option value=''>... Select</option>
                            {
                                this.state.propertyTypes.map((item)=><option>{item.propertyName}</option>)
                            }

                        </select>
                    </div>
                    <div className="form-group" >
                        <label>Square feet</label>
                        <input type="number" className="form-control" ref={this.SquarefeetRef}></input>
                    </div>
                    <div className="form-group" >
                        <label>construction date</label>
                        <input type='date' className="form-control" ref={this.constructionDateRef}></input>
                    </div>
                    <div className="form-control mt-3" >
                        <label className="">Loan Availability</label>
                    
                    <div className="form-check form-switch form" >
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ref={this.HomeLoanRef} />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Home loan</label>
                    </div>
                    <div className="form-check form-switch"  >
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ref={this.personalLoanRef}/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Personal loan</label>
                    </div>
                    </div>
                
                    <div className="mt-3">
                        <input type="submit" className="btn btn-primary" value="save"></input> &nbsp; &nbsp;
                        <input type="reset" className="btn btn-secondary" value='cancel'></input>
                    </div>
                </form>
            </div>


        )
    }

}