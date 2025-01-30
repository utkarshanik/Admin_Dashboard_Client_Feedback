import React, { useEffect, useState } from 'react'
import '../css/userfee.css'
import axios from 'axios';
import dayjs from "dayjs";
import jsPDF from "jspdf";
import "jspdf-autotable"; 
const API_URL = process.env.REACT_APP_BACKEND_URL;

export default function Userresponse() {
   

    const [feedbacks, setFeedbacks] = useState([]); // Store all feedbacks
    const [filteredFeedbacks, setFilteredFeedbacks] = useState([]); // Store filtered feedbacks
    const [serviceType, setServiceType] = useState(""); // Current filter

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get( `${API_URL}/api/dashboard/details`);
            
            const data = response.data.feedbacks;
            console.log(data);
            setFeedbacks(data);
            setFilteredFeedbacks(data);
          } catch (error) {
            console.error("Error fetching feedbacks:", error);
          }
        };
        fetchData();
      }, []);
    
      // Handle filter change
      const handleFilterChange = (type) => {
        setServiceType(type);
        if (type === "") {
          setFilteredFeedbacks(feedbacks);
        } else {
          const filtered = feedbacks.filter((feedback) => feedback.Service_Type === type);
          setFilteredFeedbacks(filtered);
        }
      };

      const exportToPDF = (feedbacks) => {

        const confirmDownload = window.confirm("Do you want to download the PDF?");

        if(confirmDownload)
        {

            const doc = new jsPDF();
            
            // Add a title
            doc.text("Client Feedbacks", 14, 20);
            
            // Define the table columns
            const columns = [
          "User Name",
          "Service Type",
          "Overall",
          "Quality",
          "Timeline",
          "Money",
          "Support",
          "Message",
          "Date",
        ];
        
        // Map feedback data to rows
        const rows = feedbacks.map((feedback) => [
            feedback.user_Name,
            feedback.Service_Type,
          feedback.overall,
          feedback.quality,
          feedback.timeline,
          feedback.money,
          feedback.support,
          feedback.msg,
          dayjs(feedback.date).format("DD-MM-YYYY"),
        ]);
      
        // Add the table to the PDF
        doc.autoTable({
          head: [columns],
          body: rows,
          startY: 30,
        });
      
        // Save the PDF
        doc.save("Client_Feedbacks.pdf");
    }
    else {
        // Optionally do something if the user cancels
        alert("Download canceled by the user.");
      }
      };
  return (
    <div className="main">

    <div className="p-4 p">
    <h1 className="headerh1">Client Feedbacks</h1>
    
    {/* Filter Dropdown */}
    <div className="servicetypes mb-4">
      <label htmlFor="serviceType" className="mr-2 st font-medium">
       Select Service Type : 
      </label>
      
      <select
        id="serviceType"
        className="st2 "
        value={serviceType}
        onChange={(e) => handleFilterChange(e.target.value)}
        >
        <option value="">All</option>
        <option value="Cloud">Cloud</option>
        <option value="Web">Web</option>
        <option value="General">General</option>
      </select>
    </div>
    <div className="mb-4 flex gap-4">
  <button
    className="but"
    onClick={() => exportToPDF(feedbacks)}
  >
    Export PDF
  </button>
</div>
    </div>
    
    {/* Feedback Table */}
<div className="container">
  <ul className="responsive-table">
    <li className="table-header">
        
      {/* <div className="col col-1">User Id</div> */}
      <div className="col col-2">Customer Name</div>
      <div className="col col-3">Service Type</div>
      <div className="col col-4">Overall</div>
      <div className="col col-5">Quality</div>
      <div className="col col-6">Timeline</div>
      <div className="col col-7">Money</div>
      <div className="col col-8">Support</div>
      <div className="col col-9">Message</div>
      <div className="col col-10">Date</div>
    </li>

     {filteredFeedbacks.map((feedback) => (
     <li className="table-row">
      {/* <div className="col col-1" data-label="Job Id">              {feedback.user_Id/}</div> */}
      <div className="col col-2 col-44" data-label="Customer Name">{feedback.user_Name}</div>
      <div className="col col-3 " data-label="Amount">             {feedback.Service_Type}</div>
      <div className="col col-4 " data-label="Payment Status">     {feedback.overall}</div>
      <div className="col col-5" data-label="Payment Status">      {feedback.quality}</div>
      <div className="col col-6" data-label="Payment Status">      {feedback.timeline}</div>
      <div className="col col-7" data-label="Payment Status">      {feedback.money}</div>
      <div className="col col-10" data-label="Payment Status">     {feedback.support}</div>
      <div className="col col-8" data-label="Payment Status">      {feedback.msg}</div>
      <div className="col col-9" data-label="Payment Status">      {dayjs(feedback.date).format("DD-MM-YYYY")}</div>
    </li>
     ))}
   

  </ul>
</div>

</div>
  )
}
