import { observable, action } from "mobx";


class MainState {

	@observable isPageLoading = true;

	@observable loginData = null;
	@observable kitchenList = null;
	@observable kitchenListObj = null;
	@observable kitchenIsActive = true;
	@observable kitchenSelected = null;

	@action.bound finishLoading(){
		console.log("finish Loading")
		this.isPageLoading = false;
	}

	@action.bound loadData(d){
		this.loginData = d;
		this.kitchenList = d.kitchens;
		this.kitchenListObj = this.processData(d.kitchens);
		this.selectKitchen(d.kitchens[0].name)
	}

	@action.bound selectKitchen(d){
		let dd = this.kitchenListObj[d.replace(" ", "_")];
		this.kitchenSelected = d ? d : null;
		this.kitchenIsActive = dd && dd.state === "ACTIVE" ? true : false;
	}


	processData(d){
		let dd = {};
		d.map((item)=>{
			return dd[item.name.replace(" ","_")] = item
		})
		return dd;
	}
}

export default new MainState();