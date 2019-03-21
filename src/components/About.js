import React from 'react';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;



class About extends React.Component{
    
  render(){
      const doc={
          content:{text:"你好好好好", bold:true, fontSize:50, alignment:'center'}
      }
      pdfMake.createPdf(doc).download()
      return(
          <div>

          </div>
      )
  }
}

export default About;