# Io T House

```text
aws-20200430/Item/InternetOfThings/IoTHouse
```

```text
include('aws-20200430/Item/InternetOfThings/IoTHouse')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTHouse.png)|![](IoTHouse.card.png)|![](IoTHouse.element.png)|![](IoTHouse.group.png)|



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
' loads the IoTHouse element
include('aws-20200430/Item/InternetOfThings/IoTHouse')
IoTHouseCard('io_t_house', 'Io T House', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTHouse element
include('aws-20200430/Item/InternetOfThings/IoTHouse')
IoTHouseCard('io_t_house', 'Io T House', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTHouse element
include('aws-20200430/Item/InternetOfThings/IoTHouse')
IoTHouse('io_t_house', 'Io T House', 'an optional tech field')
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
' loads the IoTHouse element
include('aws-20200430/Item/InternetOfThings/IoTHouse')
IoTHouse('io_t_house', 'Io T House', 'an optional tech field')
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
' loads the IoTHouse element
include('aws-20200430/Item/InternetOfThings/IoTHouse')
IoTHouseGroup('io_t_house', 'Io T House', 'an optional tech field'){
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
' loads the IoTHouse element
include('aws-20200430/Item/InternetOfThings/IoTHouse')
IoTHouseGroup('io_t_house', 'Io T House', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

