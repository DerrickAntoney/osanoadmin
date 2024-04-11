import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title, data, dataKey, grid}) => {
  
  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke='#5550bd'/>
            {/*<YAxis />*/}
            {grid && <CartesianGrid strokeDasharray="3 3" />}
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart