import React,{Component} from "react";
import hello from './Hello.module.css'
//创建组件
export default class Hello extends Component{
    render() {
        return (
            <div className={hello.title}>hello,react!</div>
        )
    }
}