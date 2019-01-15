import React, {Component} from 'react'

export default class WeekChooser extends Component {
    render(){
        const {list, currentWeek, onSelect} = this.props;

        return (
            <select value={currentWeek} onChange={(e)=>{
                onSelect(e.target.value);
            }}>
                {list.map((week,i)=>{
                    const date = new Date(week.d);
                    return <option key={'week'+i} value={week.w}>
                    {`${date.getFullYear()} / ${date.getMonth()+1} / ${date.getDate()}`}
                    </option>
                })}
            </select>
        )
    }
}