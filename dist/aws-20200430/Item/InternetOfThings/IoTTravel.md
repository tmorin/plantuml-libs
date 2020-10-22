# Io T Travel

```text
aws-20200430/Item/InternetOfThings/IoTTravel
```

```text
include('aws-20200430/Item/InternetOfThings/IoTTravel')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTTravel.png)|![](IoTTravel.card.png)|![](IoTTravel.element.png)|![](IoTTravel.group.png)|



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
' loads the IoTTravel element
include('aws-20200430/Item/InternetOfThings/IoTTravel')
IoTTravelCard('io_t_travel', 'Io T Travel', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTTravel element
include('aws-20200430/Item/InternetOfThings/IoTTravel')
IoTTravelCard('io_t_travel', 'Io T Travel', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTTravel element
include('aws-20200430/Item/InternetOfThings/IoTTravel')
IoTTravel('io_t_travel', 'Io T Travel', 'an optional tech field')
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
' loads the IoTTravel element
include('aws-20200430/Item/InternetOfThings/IoTTravel')
IoTTravel('io_t_travel', 'Io T Travel', 'an optional tech field')
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
' loads the IoTTravel element
include('aws-20200430/Item/InternetOfThings/IoTTravel')
IoTTravelGroup('io_t_travel', 'Io T Travel', 'an optional tech field'){
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
' loads the IoTTravel element
include('aws-20200430/Item/InternetOfThings/IoTTravel')
IoTTravelGroup('io_t_travel', 'Io T Travel', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

