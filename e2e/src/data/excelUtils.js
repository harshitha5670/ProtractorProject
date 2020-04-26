const {Workbook, Row, Cell} = require('exceljs')
const wb = new Workbook()

module.exports = new function() {

    this.readExcelFile = function(path,sheet) {
        wb.xlsx.readFile(path).then(function() {
            let workSheet = wb.getWorksheet(sheet) 
            let row = workSheet.lastRow
            row.getCell(1).value
            row.commit()
            return wb.xlsx.writeFile(path)
        })
    }
    
}