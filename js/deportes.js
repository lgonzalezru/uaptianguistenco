/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Nombre de espacio.
 * @namespace D1
 */
var D1 ={
         Models:{}
	,Collections:{}
	,Views:{
             System:{}
            ,Items:{}
            ,Sort:{}
        }
        ,Run:{}
};

/**
 * Modelode datos.
 */
D1.Models = Backbone.Model.extend();

/**
 * Colecci√≥n de Modelos.
 */
D1.Collections = Backbone.Collection.extend({
     model: D1.Models
    ,url:'https://alumniversitario.uaemex.mx/deportivosjson.php'
    ,filtering:function(value){
        return _(this.filter(function(data){return data.get('event_id') === value}));
    }
    ,searching:function(value){
        if(value !== ""){
            return _(this.filter(function(data){ if(data.get('title').search(new RegExp(value,'gi')) !== -1) return data }));
        }else{
            return this;
        } 
    }
});

/**
 * @type Obj
 * @return {Backbone.View} description: Plantilla para vista.
 */
D1.Views.System = Backbone.View.extend({
     el:$('#deportivos')
    ,items: new Array()
    ,collection:{}
    ,tags:{}
    /**
     * Inicializa el sistema.
     * @constructor
     */
    ,initialize:function(){
        this.collection = new D1.Collections();
        this.collection.fetch({
            async:false,
            error:function(){
                alert("Error al cargar datos.");
            }
        });
        this.tags = new D1.Views.Sort(this.collection);
        this.tags.on('send', this.search, this);
        
        this.show('classification');
        
    }
    /**
     * Imprime toda la coleci√≥n de datos.
     * @param {Backbone.Collection} coleccion
     */
    ,show:function(coleccion){
        var self = this;
        coleccion = (coleccion === undefined || coleccion === '')? 'default' : coleccion;
        
        this.clean();

        if(coleccion === 'classification'){
            coleccion = self.collection.groupBy(function(model){
                return model.get('event');
            });
            
            $.each(coleccion,function(){
                $.each(this,function(i,item){
                    if(i===0){
                        $('#ListBox').append('<div class="col-lg-12"><img class="img-fluid" src="http://148.215.1.219/EvnAlumni'+item.get('img')+'" alt="'+item.get('event')+'" align="middle" /></div>');
                    }
                    self.items.push( new D1.Views.Items({model: item}));
                });
            });
            
        }else if(coleccion === 'default'){
            self.collection.each(function(model){
                self.items.push( new D1.Views.Items({model: model}));
            },this);
        }else if(coleccion !== 'default'){
            coleccion.each(function(item,i){
                if(i===0){
                    $('#ListBox').append('<div class="col-lg-12"><img class="img-fluid" src="http://148.215.1.219/EvnAlumni'+item.get('img')+'" alt="'+item.get('event')+'" align="middle" /></div>');
                }
                self.items.push( new D1.Views.Items({model: item}));
            },this);
        }
    }
    /**
     * 
     * @deprecated No usar.
     */
    ,hide:function(){}
    /**
     * Limpia todo el array y lo posiciona en 0, limpia el dom.
     * @returns {Array}
     */
    ,clean:function(){
        this.items = [];
        this.$el.find('#ListBox').empty();
    }
    /**
     * Busca Informacion por medio de trigger.
     * @param {String} data
     * @returns {undefined}
     */
    ,search:function(data){
        data.request === 'default' || data.request === '' ? this.show('classification'): this.show(this.collection.filtering(data.request));
    }
});

/**
 * Creaci®Æn de vista para cada modelo.
 * @type Obj
 * @return {Backbone.View} description: Plantilla para vista.
 */
D1.Views.Items = Backbone.View.extend({
    /**
     * Objeto Dom a cargar.
     * @type Dom
     */
     el:$('#ListBox')
     /**
      * Elemento Dom que funje como plantilla.
      * @type Dom
      */
    ,template:{}
    /**
     * Plantilla construida.
     * @type String
     */
    ,html:""
    /**
     * Inicializa el modelo e imprime la vista.
     * @constructor
     * @returns {this}
     */
    ,initialize:function(){
        Handlebars.registerHelper('ifequalTo',function(var1,var2,options){
            return (var1 === var2)? options.fn(this) : options.inverse(this);
        });
        this.template= Handlebars.compile($("#List").html());
        this.html = this.template(this.model.toJSON());
        this.render();
        return this;
    }
    /**
     * Imprime la vista del modelo.
     * @returns {this}
     */
    ,render:function(){
        this.$el.append(this.html);
        return this;
    }
});

/**
 * Creaci√≥n de vista y renderizado de panel lateral.
 * @type Obj
 * @return {Backbone.View} description: Plantilla para vista.
 */
D1.Views.Sort = Backbone.View.extend({
     el:$('#rank')
    ,template:$("#Sort-Lateral").html()
    ,json:[]
    ,html:''
    ,data:{
         weekend:''
        ,elements:0
        ,data:[]
    }
    /**
     * Constructot del objeto.
     * @constructor
     * @param {Backbone.Collection} collection
     */
    ,initialize:function(collection){
        var self = this;
        collection.each(function(item){
            self.json.push(item.toJSON());
        });
        Handlebars.registerHelper('Recursive', function(items) {
          var out = "<ul class='list-unstyled'>";

          for(var i=0, l=items.length; i<l; i++) {
            out += "<li><a  id='"+items[i].id+items[i].length+'-c'+"' href='#' style='color:#58646E;'>" +items[i].name+ "  <span class='badge badge-success'>"+items[i].length+"</span></a></li>";
          }

          return out += "</ul>";
        });
        this.sort();
        this.render();
        this.ShowTitle();
        
    }
    /**
     * Mecanismo de ordenamiento.
     * @returns {this}
     */
    ,sort:function(){
        var self = this;
        var order =[];
        
        $.each(this.json,function(i,item){
            self.data.weekend = item.weekend;
            self.data.elements++;
            
        });
        this.data.data= _.groupBy(this.json,'event');
        order.push({name:'Todos',length:this.data.elements ,id:'default'});
        $.each(this.data.data,function(i,item){
            var obj = {
                name:'',
                length:0,
                id:0
            };
            obj.name = i;
            obj.length = item.length;
            obj.id = item[0].event_id;
            order.push(obj);
        });
        this.data.data = order;
        return this;
    }
    /**
     * Imprime las categorias en panel lateral.
     * @returns {this}
     */
    ,render:function(){
        var self = this;
        this.template = Handlebars.compile(this.template);
        this.html = this.template(this.data);
        this.$el.append(this.html);
        
        $.each(this.data.data,function(){
            var str = "#" + this.id + this.length + "-c";
            var selfie = this;
            
            $(str).on('click',function(event){
                event.preventDefault();
                self.send(selfie.id);
            });
        });
        
        return this;
    }
    /**
     * Evento trigger.
     * @param {String} value description:Valor del identificador a enviar.
     * @returns {this}
     */
    ,send:function(value){
            this.trigger('send',{request:value});
            return this;
    }
    /**
     * Renderiza el titulo
     */
    ,ShowTitle:function(){
        $('#title-listbox').html(this.data.weekend);
    }
});

/**
 * Run.
 */
$(document).ready(function() {
    D1.Run = new D1.Views.System();
});