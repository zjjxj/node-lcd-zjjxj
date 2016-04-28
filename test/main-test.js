var useGridNum=require('./useGridNum');
var useGrid=require('./useGrid');
var gridNum=useGridNum.theGridNum();
var grid=useGrid.theGrid();
var array=require('../main/array');
var string=require('../main/string');

     
describe('unit testing', function() {
   var grid,gridNum;
   beforeEach(function(){
	grid=useGrid.theGrid();
	gridNum=useGridNum.theGridNum();
	})
    
    	describe('Text stringarray',function () {
	       inputs=910;
            it('return right stringarray',function () {
                var stringarray= array.toStringArray(inputs);
                expect(stringarray).toEqual(["9","1","0"]);

            });
	 });
  
        describe('Text allStr',function () {
		inputs=910;
            it('return right allStr',function () {
                 var stringarray= array.toStringArray(inputs);
                var allStr= string.numberString(stringarray,grid,gridNum) ;
                expect(allStr).toEqual(
                    "\n"+"._."+" "+"..."+" "+"._."+" "+"\n" +"|_|"+" "+"..|"+" "+"|.|"+" "+"\n" +"..|"+" "+"..|"+" "+"|_|"+" "+"\n"

                );

            });
	 });
});