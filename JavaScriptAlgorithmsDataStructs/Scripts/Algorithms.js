var algorithms = {         
    sortArray : function(){
        var elements = [];                                                                   
        
        var swap = function(one, two) {
            var tmp = elements[one];
            elements[one] = elements[two];
            elements[two] = tmp;                    
        };    
        
        this.onSort = function() {};              
        this.push = function(val){
            elements.push(val);                    
        };                           
        this.bubbleSort = function() {   
            this.onSort(elements);
			//Loop over all the elements
            for (var out = elements.length - 1; out > 0; out--){
				
                for (var inn = 0; inn < out; inn++) {
                    //Are they out of order?
                    if (elements[inn] > elements[inn+1]){
                        swap(inn, inn+1);                                
                    } 
                }
                this.onSort(elements);
            }                    
        };
        this.selectionSort = function(){
            this.onSort(elements);
            for (var out = 0; out < elements.length - 1; out++) {
                var min = out;
                for (var inn = out; inn < elements.length; inn++) {
                    //If minium greater => new minimum
                    if (elements[inn] < elements[min]){
                        min = inn;
                    }                            
                }
                swap(out, min);
                this.onSort(elements);
            }
        };
        this.insertionSort = function(){
            this.onSort(elements);
            for (var out = 1; out < elements.length; out++){                        
                var temp = elements[out];
                var inn = out;
                
                //Until one is smaller
                while (inn > 0 && elements[inn-1] >= temp){
                    elements[inn] = elements[inn-1];
                    inn--;
                }
                elements[inn] = temp;
                this.onSort(elements);
            }
        }
    } 
}