# Io T Door Lock

```text
aws-20200430/Item/InternetOfThings/IoTDoorLock
```

```text
include('aws-20200430/Item/InternetOfThings/IoTDoorLock')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTDoorLock.png)|![](IoTDoorLock.card.png)|![](IoTDoorLock.element.png)|![](IoTDoorLock.group.png)|



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
' loads the IoTDoorLock element
include('aws-20200430/Item/InternetOfThings/IoTDoorLock')
IoTDoorLockCard('io_t_door_lock', 'Io T Door Lock', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTDoorLock element
include('aws-20200430/Item/InternetOfThings/IoTDoorLock')
IoTDoorLockCard('io_t_door_lock', 'Io T Door Lock', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTDoorLock element
include('aws-20200430/Item/InternetOfThings/IoTDoorLock')
IoTDoorLock('io_t_door_lock', 'Io T Door Lock', 'an optional tech field')
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
' loads the IoTDoorLock element
include('aws-20200430/Item/InternetOfThings/IoTDoorLock')
IoTDoorLock('io_t_door_lock', 'Io T Door Lock', 'an optional tech field')
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
' loads the IoTDoorLock element
include('aws-20200430/Item/InternetOfThings/IoTDoorLock')
IoTDoorLockGroup('io_t_door_lock', 'Io T Door Lock', 'an optional tech field'){
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
' loads the IoTDoorLock element
include('aws-20200430/Item/InternetOfThings/IoTDoorLock')
IoTDoorLockGroup('io_t_door_lock', 'Io T Door Lock', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

