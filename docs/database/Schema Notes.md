~optional
{expanded feature, not entry data}
? additional questions
|not stated but general logical requirement

User Table
    Username
    First Name
    Last Name
    Email
    Address
        City
        State
    
Tutors
    LIST PAGE
    Star Ratings
    Offline/Online
    Picture
    Name
    {Message Button}
    ~subject
    ~name
        PROFILE PAGE
        first name
        last name
        |email
        |hours balance
        |hours of availability
        city
        country
        university
        year of graduation
        pursued major
        subjects of expertise
        reviews/comments
        likelihood of reply (percentage) ? for messages emails ? direct message?
        average response time ? for messages. Messages delivered as email. Time of message sent vs time of reply
        about me
        experience
        {video uploads}
        {youtube submitted videos and/or links}

Messages -> to initiate a chat
    subject
    textarea
    Session ID {created at the start of a new message on client side}
    created_at
    {drop down of FAQs}
    {tutor selection button, multiple tutors or general}
    {submit to multiple online tutors, they can accept reply and get involved 5 max}

Chat -> Once accepted by a tutor, chat can continue. Once accepted the reply time is matched against intiate time for the accepted tutor
    student name
    tutor name
    block student/tutor {drop down}
    report student/tutor {drop down}

{Start Lesson - immediate start}
{Schedule Lesson - delayed start}
{censor words and profanity}
{attach documents}


Students Dashboard
    {upcoming lessons}
    {propose lesson [with previous tutor]} //minutes limitation
    {sent - upcomping, proposed, future, ondemand}
    {past lessons, completed participated in}
    {whiteboard replay}
    {My Account}
        {My Profile}
        {Change Password}
        {Tutoring minutes}
            {minutes remaining}
            {current plan}
            {purchase more minutes}
        {FAQ}
        {Help -> Request if minutes is low}
        {Sign Out}
        {chat with other students}

Minutes Purchased Many to Many
    Student ID
    Purchase Date
    Type: monthly, weekly, minutes

    Monthly
    Weekly
    Pay as you go claification

    Pay as you go $40/60min, most flexible
    
    Weekly: 
    each week $30/60min, but expires if not used

    Monthly: 
    each month $20/60min, 

Lesson
    On Demand
    Scheduled
    Based on minutes left in student account

|Lessons Many to Many
    Start Time
    end time 
    billable minutes (start time- end time determines how much is billed and how much is paid)
    Duration (preset)
    Description
    Tutor ID
    Student ID
    Status (completed, pending, cancelled, on progress, on demand)
    Subject Rating
    {View Lesson Link}
    {Whiteboard recording}
    {chat messages}

|Chat
    Student ID
    Tutor ID
    Room/lesson
    Created at
    Session ID


|Proposed Lessons 
    Tutor Accepted (when proposed otherwise n/a)

Schedule Lesson  (pop-up window) [Propose New Lesson]
    {chat box to initiate schedule, scedhule button at the bottom}
    {Select name of tutor}
    Date of lesson
    Time of lesson (15 min)
    Duration of lesson (15, 30, 45)
    Recurring (single, daily, weekly)
    Subject (specific to tutor)
    Note
    Cancel/Submit
    Local Time Zone Scheduling

Whiteboard
    {Start Lesson Pop-up} (5 min countdown), can start 10 minutes early
    15 minute grace period for student

    Student
    Tutor
    


