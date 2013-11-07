exports.cake = function(){
    var ID;
    var name;
    var brand;
    var price;
    var type;
    var weight;

    this.get_id = function(){
        return this.ID;
    }
    this.set_id = function (id){
        this.ID = id;
    }

    this.get_name = function(){
        return this.name;
    }
    this.set_name = function(name) {
        this.username = name;
    }

    this.get_brand = function(){
        return this.brand;
    }
    this.set_brand = function(brand){
        this.brand = brand;
    }
    this.get_price = function(){
        return this.price;
    }
    this.set_price = function(price){
        this.age = price;
    }
    this.get_type = function(){
        return this.type;
    }
    this.set_type = function(type){
        this.type = type;
    }
}