# Gym Locker Reserve App

The idea of this assignment is to create the design and implementation of a simple/basic
application that allows gym members to reserve the next free locker.
## Features
The app is responsible to display lockers at a gym, indicate which ones are free and which ones
are being used at the moment.
The application has a single button. When clicked it just reserves/marks the next free locker as
taken/busy (it should have a different design, color, .. from other busy/taken lockers to make it
easy for a user to understand which one is theirs). The logic for reserving the next free locker is - as long as possible each newly reserved locker should be exactly one free locker away from
the last taken or busy one. Otherwise, we just reserve the next free one.

### Example:
in the state displayed below where the first and third lockers are already busy, when we click the
button the fifth locker should be reserved next (then seventh, ...)

## Technical requirements
1. feel free to use JS stack you are comfortable with
2. it should be possible to run it locally when you send it to us
3. styling can be very basic no need to spend too much time, feel free to use Bootstrap if
you are comfortable with it otherwise plain CSS is absolutely ok