 [*] Create the sql 
 





 FILE & FOLDER 

 
ClassList: Component to display a list of available fitness classes, this will includ details like name, date, time, location, instructor, and available spots.

ClassDetail: Component to show detailed information about a specific fitness class, providing a more in-depth view of the class, including its name, date, time, location, instructor, and available spots.

ClassBooking: A component that allows users to book a spot in a fitness class. It should implement logic to deduct booked spots from the class's available capacity and prevent overbooking.

AttendanceList: Component to display attendance records for fitness classes, showing which users attended each class and which did not.

**AttendanceForm: A form for instructors to mark attendees as present or absent after each fitness class. It should provide a user-friendly interface for managing class attendance.

Notifications: Component responsible for displaying notifications to users about upcoming fitness classes, any changes or cancellations, or other important information.

UserDashboard: A user-specific dashboard where users can view their upcoming fitness classes, attendance history, and any other relevant user data. This component should provide a personalized experience for each user.

dispatch (find example)
to
deleteClass (saga)
   axios.delete(find example)
class.router
  router.delete