const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly= document.querySelector('.monthly');



daily.addEventListener('click', ()=>{
    let data = fetch('data.json').then(response=>{
        if(!response.ok){
            console.error('There is a problem with this file');
        }
        return response.json();
    })
        .then(data=>{
            // console.log(data)
            userProfile(data)
            
            
    })
        .catch(error =>{
            console.error('there has been a problem with your fetch operation', error)
        });
        function userProfile(userInfo){
            showHours(userInfo)
            showPreviousHours(userInfo)
            console.log(userInfo)
            
        }
        daily.style.color = 'white'
        if(daily.style.color = 'white'){
            weekly.style.color = '#ffffff7f'
            monthly.style.color = '#ffffff7f'
        }
    
        
        
    // console.log(hours)
    
    //This is the result for daily
    function showHours(data) {
        const hours = document.querySelectorAll('.hours'); 
        
        hours.forEach((hour, index) => {
            // console.log(hour); 
            const currentHour = data[index].timeframes.daily.current; // Get current daily hours from data
            hour.textContent = `${currentHour}hrs`; // Update the textContent of the corresponding element
        });
        // console.log(oldHours);
        
    }
    function showPreviousHours(data){
        const oldHours = document.querySelectorAll('.oldHours')
        oldHours.forEach((hour, index) => {
            const pastHour = data[index].timeframes.daily.previous; // Get current daily hours from data
            hour.textContent = `Yesterday - ${pastHour}hrs`; // Update the textContent of the corresponding element
            console.log(hour); 
            
            
        });
    }
    

})
weekly.addEventListener('click', ()=>{
    let data = fetch('data.json').then(response=>{
        if(!response.ok){
            console.error('There is a problem with this file');
        }
        return response.json();
    })
        .then(data=>{
            // console.log(data)
            userProfile(data)
            
            
    })
        .catch(error =>{
            console.error('there has been a problem with your fetch operation', error)
        });
        function userProfile(userInfo){
            showHours(userInfo)
            showPreviousHours(userInfo)
            console.log(userInfo)
            
        }
        weekly.style.color = 'white'
        if(weekly.style.color = 'white'){
            daily.style.color = '#ffffff7f'
            monthly.style.color = '#ffffff7f'
        }
        
        
    // console.log(hours)
    
    //This is the result for daily
    function showHours(data) {
        const hours = document.querySelectorAll('.hours'); 
        
        hours.forEach((hour, index) => {
            // console.log(hour); 
            const currentHour = data[index].timeframes.weekly.current; // Get current daily hours from data
            hour.textContent = `${currentHour}hrs`; // Update the textContent of the corresponding element
        });
        // console.log(oldHours);
        
    }
    function showPreviousHours(data){
        const oldHours = document.querySelectorAll('.oldHours')
        oldHours.forEach((hour, index) => {
            console.log(hour); 
            const pastHour = data[index].timeframes.weekly.previous; // Get current daily hours from data
            hour.textContent = `Last Week - ${pastHour}hrs`; // Update the textContent of the corresponding element
            
            
        });
    }
    

})
monthly.addEventListener('click', ()=>{
    let data = fetch('data.json').then(response=>{
        if(!response.ok){
            console.error('There is a problem with this file');
        }
        return response.json();
    })
        .then(data=>{
            // console.log(data)
            userProfile(data)
            
            
    })
        .catch(error =>{
            console.error('there has been a problem with your fetch operation', error)
        });
        function userProfile(userInfo){
            showHours(userInfo)
            showPreviousHours(userInfo)
            console.log(userInfo)
            
        }

        monthly.style.color = 'white'
        if(monthly.style.color = 'white'){
            daily.style.color = '#ffffff7f'
            weekly.style.color = '#ffffff7f'
        }
    
        
        
    // console.log(hours)
    
    //This is the result for daily
    function showHours(data) {
        const hours = document.querySelectorAll('.hours'); 
        
        hours.forEach((hour, index) => {
            // console.log(hour); 
            const currentHour = data[index].timeframes.monthly.current; // Get current daily hours from data
            hour.textContent = `${currentHour}hrs`; // Update the textContent of the corresponding element
        });
        // console.log(oldHours);
        
    }
    function showPreviousHours(data){
        const oldHours = document.querySelectorAll('.oldHours')
        oldHours.forEach((hour, index) => {
            console.log(hour); 
            const pastHour = data[index].timeframes.monthly.previous; // Get current daily hours from data
            hour.textContent = `Last Month - ${pastHour}hrs`; // Update the textContent of the corresponding element
            
            
        });
    }
    

})

