# Io T Servo

```text
aws-20200430/Item/InternetOfThings/IoTServo
```

```text
include('aws-20200430/Item/InternetOfThings/IoTServo')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTServo.png)|![](IoTServo.card.png)|![](IoTServo.element.png)|![](IoTServo.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTServo element
include('aws-20200430/Item/InternetOfThings/IoTServo')
IoTServoCard('io_t_servo', 'Io T Servo', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTServo element
include('aws-20200430/Item/InternetOfThings/IoTServo')
IoTServoCard('io_t_servo', 'Io T Servo', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTServo element
include('aws-20200430/Item/InternetOfThings/IoTServo')
IoTServo('io_t_servo', 'Io T Servo', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTServo element
include('aws-20200430/Item/InternetOfThings/IoTServo')
IoTServo('io_t_servo', 'Io T Servo', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTServo element
include('aws-20200430/Item/InternetOfThings/IoTServo')
IoTServoGroup('io_t_servo', 'Io T Servo', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTServo element
include('aws-20200430/Item/InternetOfThings/IoTServo')
IoTServoGroup('io_t_servo', 'Io T Servo', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

