import React from "react"
import Event from "./Event"
const Calendar = () => {
    return(
        <div className = "calendar">
            <table>
                <thead>
                    
                      <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                      </tr>
                </thead>
                      <tbody>
                        <tr>
                            <td className ="time">9am</td>
                        
                            <Event event='👨‍💻practice react ' color = 'blue'/>
                            <Event event='💻 practice coding ' color = 'green' location= 'witth freind'/>


                            <td></td>
                            <Event event='💻 practice coding ' color = 'green' location= 'witth freind'/>

                            <td></td>
                            <Event event='💻 practice coding ' color = 'green' location= 'witth freind'/>

                            
                        </tr>
                        <tr>
                            <td className =" time">10am</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                           
                        </tr>
                        <tr>
                            <td className =" time">11am</td>
                            <td></td>
                            <Event event='🛠️🏗️ working on project ' color = 'pink' location = 'office'/>
                


                            <td></td>
                            <Event event='🛠️🏗️ working on project ' color = 'pink' location = 'office'/>

                            <td></td>
                            <td></td>
                            <td></td>
                            
                            
                        </tr>
                        <tr>
                            <td className =" time">12pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                            
                        </tr>
                        <tr>
                            <td className =" time">1pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                            
                        </tr>
                        <tr>
                            <td className =" time">2pm</td>
                            <td></td>
                            <Event event='👨‍💻practice react ' color = 'blue'/>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                            
                        </tr>
                        <tr>
                            <td className =" time">3pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                            
                        </tr>
                        <tr>
                            <td className =" time">4pm</td>
                            <td></td>
                            <Event event=' 👩🏻‍🏫Study ' color = 'yellow'/>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                           
                        </tr>
                        <tr>
                            <td className =" time">5pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                           
                        </tr>

                    </tbody>
                    

                
            </table>
           
        </div>
    )
}
export default Calendar