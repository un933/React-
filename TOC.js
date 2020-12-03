
import React,{Component} from 'react';

class Toc extends Component{
    shouldComponentUpdate(newProps,newState){
      if(this.props.data=== newProps.data){
        return false;
      }
      return true;
        //원본을 바꾸지 않는다-=불변성
    }
    render(){
      var lists=[];
      var data= this.props.data;
      var i=0;
      while(i<data.length){
      lists.push(
      <li key={data[i].id}>
        <a 
        href={"/content/"+data[i].id}
        data-id={data[i].id}
        onClick={function(e){
         
          e.preventDefault();
          this.props.onChangePage(e.target.dataset.id);


        }.bind(this)}
        
        >{data[i].title}</a>
        </li>);
        i=i+1;
      }
      return(
        <nav>
          <ul>
           {lists}
          </ul>
        </nav>
      );
    }
  }

  export default Toc;