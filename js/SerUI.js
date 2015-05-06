portalApp.service('portalUI',
    function($rootScope) {
    	this.message="";
    	this.type="";
        this.title="";
    	this.display=function(data){
            this.title=data.title;
    		this.message=data.message;
    		this.type=data.type;
    		this.initDisplay();
    	};

    	this.initDisplay=function(){
    		$rootScope.$broadcast("display-note");
    	}
    }
);
