import React from 'react';
import './App.css';
import Mainplayer from './Mainplayer';
import Player from './Player';


  var videos = [
   {id: 1,
    title: "A Race To The Dump! | Mr Bean Animated Season 2 | Mr.Bean",
    thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKq6fw9SCVuqVlnI2Igu0x3IfCvlKWR8lZQ&usqp=CAU",
    likes: 1200,
    views: 18000,
    channelName: "Mr Bean World",
    channelLogoUrl: "https://yt3.googleusercontent.com/xInaWPMgR0bINZPFBZZOChzb4XnuUYsddljauF3yms3_OUUZmOKr1V2wA2eWj0_gOs1RnbRK=s176-c-k-c0x00ffffff-no-rj",
   },
   { id: 2,
    title: "Steve Jobs' 2005 Stanford Commencement Address",
    thumbnailUrl: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/09/29/654842-steve-jobs-new.jpg",
    likes: 1200,
    views: 18000,
    channelName: "Stanford",
    channelLogoUrl: "https://yt3.googleusercontent.com/ADFxSeyOWjOWtfEsg3mBpwAX3PQ0XhK0C6fsKG3XmLGjonEe-QrU8tWJ2n4Ug8EAWYjXT0tt=s176-c-k-c0x00ffffff-no-rj",
   },
   { id: 3,
    title: "Legends of Abba Kadar | Standup comedy by Munawar Faruqui | 2024",
    thumbnailUrl: "https://i.ytimg.com/vi/VXIyGdmDgEA/maxresdefault.jpg",
    likes: 1200,
    views: 18000,
    channelName: "Munawar Faruqui ",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/AIf8zZQieqrDV_OwVKUPpBSGNeHvyrBp6pT158DHCYH9c3w=s176-c-k-c0x00ffffff-no-rj",
   },
   { id: 4,
    title: "Robotic Brain",
    thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9JmySsLsx9aymwjWLOKTuu3vLz8dVow6GtR-CB2MFA&s",
    likes: 1200,
    views: 18000,
    channelName: "Dr.Manjunath - Mind Performance Coach",
    channelLogoUrl: "https://yt3.googleusercontent.com/xJYxTOJcq8Joe_9A6hNVLV_T0Lozw098EhRwZ-naW4W8kaPRtviS_YLJF7gGAev0hFaoB8xsxzw=s176-c-k-c0x00ffffff-no-rj",
   },
   { id: 5,
    title: "Top 10 Major Global Environmental Issues In The World - List Of Global Environmental Problems [2021]",
    thumbnailUrl: "https://www.thegef.org/sites/default/files/styles/main_image_content_width/public/shutterstock_274566236_globe.jpg?h=e85f6c07&itok=rqaCRvgz",
    likes: 1200,
    views: 18000,
    channelName: "District10TV",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/AIf8zZT-jQCPAAWhM8rucneROISYaZ9DoMZWnpsNSLk3=s176-c-k-c0x00ffffff-no-rj",
   }, 
   {id: 6,
    title: "Norway 4K • Scenic Relaxation Film with Peaceful Relaxing Music and Nature Video Ultra HD",
    thumbnailUrl: "https://media2.thrillophilia.com/images/photos/000/178/519/original/1573559129_Norway.png?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
    likes: 1200,
    views: 18000,
    channelName: "Relaxation Film ",
    channelLogoUrl: "https://yt3.googleusercontent.com/7nPsd19AYxUnbcKoAqhFNSRyqr1OB8_mt0XZ-fTBWTw-Wv0Y9QY17t6lrTDzLg8c-aetSbNouQ=s176-c-k-c0x00ffffff-no-rj",
   },
   {id: 7,
    title: "Top 27 Places To Visit In United Kingdom - UK Travel Guide",
    thumbnailUrl: "https://adm.dookinternational.com/dook/images/country/XYwKYrjh1656324286.jpg",
    likes: 1200,
    views: 18000,
    channelName: "Scenic Hunter",
    channelLogoUrl: "https://yt3.googleusercontent.com/KSjuEAtP14ncEzIBdlvUlFNa8ReoNWhbTh9sHf-0zLC7WThgxyPI92c2LhwIRG332I2h0T2VKA=s176-c-k-c0x00ffffff-no-rj",
   },
   {id: 8,
    title: "Wellbeing for Children: Healthy Habits",
    thumbnailUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2018-01/20/full/1516472780-6622.jpg?im=FeatureCrop,size=(826,465)",
    likes: 1200,
    views: 18000,
    channelName: "ClickView",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/AIf8zZQ1bDXF3k73x4qsVPvzbIwxiCUTGkG1g_RlI1i_wA=s176-c-k-c0x00ffffff-no-rj",
   },
   {id: 9,
    title: "Niagara Falls | Real 8K",
    thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtyJOHrVMmmIfuUilNu4u70orvVLPrCCSrNRkVm5r-g&s",
    likes: 1200,
    views: 18000,
    channelName: "Around The World 4K",
    channelLogoUrl: "https://yt3.googleusercontent.com/bYO2496cvGrIIBCbRlzWRiU8nT_Dj1t5uWlZRHQFF87jGB9WZt0aPqZNS6pRi61bkfrAIwCNJ1c=s176-c-k-c0x00ffffff-no-rj",
   },
   {id: 10,
    title: "Dhoni finishes off in style!",
    thumbnailUrl: "https://cdn-wp.thesportsrush.com/2017/12/622765-605654-dhoni-retuers.jpg?w=3840&q=60",
    likes: 1200,
    views: 18000,
    channelName: "ICC",
    channelLogoUrl: "https://yt3.googleusercontent.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s176-c-k-c0x00ffffff-no-rj",
   }
  ];
  
  function App() {
    return(<div className="App">
   
   <Mainplayer videos={videos} />
   <Player videos={videos} />
    </div>) 
  }
  
  export default App;
