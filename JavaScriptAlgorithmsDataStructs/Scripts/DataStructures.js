var dataStructures = {                
    node : function(data) {
        this.data = data;                    
        this.previous = null;
        this.next = null;
    },
    linkedList : function() {
        var first = null;
        var last = null;
      
        this.getFirst = function() {
            return first;
        };
        this.getLast = function() {
            return last;  
        };                  
        this.insertFirst = function(value) {
            var newNode = new dataStructures.node(value);                       
            
            if (first === null) {                                                        
                last = newNode;            
            } else {                                      
                first.previous = newNode;
                newNode.next = first;
            }                                               
            first = newNode;                       
        };
        this.insertLast = function(value) {
            var newNode = new dataStructures.node(value);
            
            if (last === null) {
                first = newNode;                            
            } else {
                last.next = newNode;
                newNode.previous = last;
            }
            last = newNode;                                             
        };
        this.deleteFirst = function() {                                                                      
            if (first === null){
                return false;
            } else {
                if (first.next === null) {
                    last = null;
                } else {
                    first.next.previous = null;
                }
            
                first = first.next;
            
                return true;
            }                      
        };
        this.deleteLast = function() {
            if (last === null) {
                return false;
            }  else {
                if (first.next === null) {
                    first = null;
                } else {
                    last.previous.next = null;
                }
                
                last = last.previous;
                
                return true;
            }                      
        };
        this.insertAfter = function(key, value) {                            
            if (first === null) {
                return false;
            }
        
            var current = first;                       
                                   
            while (current.data !== key) {
                current = current.next;
                if (current === null) {
                    return false;
                }
            }
            
            var newNode = new dataStructures.node(value);
            
            if (current === last) {
                newNode.next = null;
                last = newNode;
            } else {
                newNode.next = current.next;
                current.next.previous = newNode;
            }
            
            newNode.previous = current;
            current.next = newNode;
            
            return true;
        };   
        this.deleteKey = function(key) {                            
            if (first === null) {
                return false;
            }
        
            var current = first;                       
                                   
            while (current.data !== key) {
                current = current.next;
                if (current === null) {
                    return false;
                }
            }                       
            
            if (current === first) {
                first = current.next;
            } else {
                current.previous.next = current.next;
            }
            
            if (current === last) {
                last = current.previous;
            } else {
                current.next.previous = current.previous;
            }
            
            return true;
        };                       
        this.traverseForwards = function(callback) {
            var current = first;                       
                                    
            while (current) {                            
                callback(current);                                                     
                current = current.next;
            }
        };
        this.traverseBackwards = function(callback) {
            var current = last;
            
            while (current) {
                callback(current);
                current = current.previous;
            }
        }
    },
    stack : function() {                  
        var elements;
        
        this.push = function(element) {
            if (typeof(elements) === 'undefined') {
                elements = [];   
            }                            
            elements.push(element);
        }
        this.pop = function() {
            return elements.pop();
        }
        this.stackTop = function(element) {
            return elements[elements.length - 1];
        }
    },
    queue : function() {
        var elements;
        
        this.enqueue = function(element) {
            if (typeof(elements) === 'undefined') {
                elements = [];   
            }
            elements.push(element);                       
        }
        this.dequeue = function() {
            return elements.shift();                                                
        }
        this.peek = function(){
            return elements[0];                  
        }
    }
};                              