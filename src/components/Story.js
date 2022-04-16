import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import StoryItems from "./items/StoryItems";
import '../components/css/Story.css'


const Story = () => {
  return (
    <div className="story">
      <div className="story__user">
        <img src="https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/275118213_155003706952962_8537170631845177946_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=GNmSncVGa4AAX-VBw7V&_nc_ht=scontent.fcai20-2.fna&oh=00_AT8G4BuFmWupQ73L1-bCWtsAVpAZLmj0Zn6ooG4BF3W_qg&oe=62589237" />
        <p>Create story</p>
      </div>
      <div className="all__stories">
          <StoryItems title='Escula de' src='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/218753831_10227827384929698_8616773007402430549_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H9PpA5hXYwQAX_Ii62c&_nc_ht=scontent.fcai20-2.fna&oh=00_AT-4vgzh17LlZUwuH3YZHGhK8nEf9e1fKdIfidPrv6nnFw&oe=62592381' img='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/218753831_10227827384929698_8616773007402430549_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H9PpA5hXYwQAX_Ii62c&_nc_ht=scontent.fcai20-2.fna&oh=00_AT-4vgzh17LlZUwuH3YZHGhK8nEf9e1fKdIfidPrv6nnFw&oe=62592381'/>
          <StoryItems title='Shreif Osama' src='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/277794330_1156403111800824_2680466400722192803_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RXzi0WsuRJUAX-dls7p&_nc_ht=scontent.fcai20-2.fna&oh=00_AT8RMKHaIo1bc6J3dSm8AkNzLJi_9JNq7ETXdLRzreT9cQ&oe=6259D4CC' img='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/277794330_1156403111800824_2680466400722192803_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RXzi0WsuRJUAX-dls7p&_nc_ht=scontent.fcai20-2.fna&oh=00_AT8RMKHaIo1bc6J3dSm8AkNzLJi_9JNq7ETXdLRzreT9cQ&oe=6259D4CC'/>
          <StoryItems title='Malek Fathy' src='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/277570464_386857349926926_2716985602059561623_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=POjhvxhK7-4AX-3PWVi&_nc_ht=scontent.fcai20-2.fna&oh=00_AT-4WZecWNNOLct-tV_I3gdfaXe6Rpva3lYGOPWgM97IaQ&oe=62595EB7' img='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/277570464_386857349926926_2716985602059561623_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=POjhvxhK7-4AX-3PWVi&_nc_ht=scontent.fcai20-2.fna&oh=00_AT-4WZecWNNOLct-tV_I3gdfaXe6Rpva3lYGOPWgM97IaQ&oe=62595EB7'/>
          <StoryItems title='The end of me' src='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/276122780_287555083524543_1140616038421868863_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hyopee3zO00AX8_qcFA&_nc_ht=scontent.fcai20-2.fna&oh=00_AT_tfCiDp-E83FzROT1sWgw7PI1u6TN_k12eN6IDr3LTkw&oe=6259F0BB' img='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/276122780_287555083524543_1140616038421868863_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Hyopee3zO00AX8_qcFA&_nc_ht=scontent.fcai20-2.fna&oh=00_AT_tfCiDp-E83FzROT1sWgw7PI1u6TN_k12eN6IDr3LTkw&oe=6259F0BB'/>
          <StoryItems title='Random name' src='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/275077039_283106920627250_489113001697177772_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XU_KHISBMRcAX8rYmhs&_nc_oc=AQk6nCm7BPTmpfgrufNt9dQpaXUckNR5hUA7RFIHU19kYNkTa-oodx4t8zKHitRYuVY&_nc_ht=scontent.fcai20-2.fna&oh=00_AT_1Tx5p1ELEbYT872ShK0WH6JSblgBBBl5SXbSsqI4VNw&oe=6258F257' img='https://scontent.fcai20-2.fna.fbcdn.net/v/t39.30808-6/275077039_283106920627250_489113001697177772_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XU_KHISBMRcAX8rYmhs&_nc_oc=AQk6nCm7BPTmpfgrufNt9dQpaXUckNR5hUA7RFIHU19kYNkTa-oodx4t8zKHitRYuVY&_nc_ht=scontent.fcai20-2.fna&oh=00_AT_1Tx5p1ELEbYT872ShK0WH6JSblgBBBl5SXbSsqI4VNw&oe=6258F257'/>
      </div>
    </div>
  );
};

export default Story;
