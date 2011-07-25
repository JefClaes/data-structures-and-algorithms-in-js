var algorithms = {         
    sortArray : function(){
        var elements = [];                                                                   
        
        var swap = function(one, two) {
            var tmp = elements[one];
            elements[one] = elements[two];
            elements[two] = tmp;                    
        };           
             
        var internalMergeSort = function(elements, onSort){            
            if (elements.length < 2){                               
                return elements;  
            }           
                     
            // Calculate the middle of the elements
            var middle = Math.floor(elements.length / 2);           
                       
            // Divide 
            var leftRange = elements.slice(0, middle);
            var rightRange = elements.slice(middle, elements.length);                                                      
           
            // Conquer                                                                                                        
            var mergingResult = merge(internalMergeSort(leftRange, onSort), 
                                      internalMergeSort(rightRange, onSort));                                   
                     
            onSort(mergingResult);           
                       
            return mergingResult;
        };
        
        function merge(left, right){                      
            var res = [];           
            
            while (left.length > 0 && right.length > 0) {                
                if (left[0] <= right[0]) {
                    res.push(left.shift());
                } else {
                    res.push(right.shift());
                }                                              
            }           
            
            while (left.length > 0) {                
                res.push(left.shift());
            }            
            while (right.length > 0) {            
                res.push(right.shift());
            }
            
            return res;
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
            
            return elements;
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
            
            return elements;
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
            
            return elements;
        };
        this.mergeSort = function() {                                              
            elements = internalMergeSort(elements, this.onSort);                      
            
            return elements;
        };        
    } 
}