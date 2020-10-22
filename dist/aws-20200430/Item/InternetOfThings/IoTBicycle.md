# Io T Bicycle

```text
aws-20200430/Item/InternetOfThings/IoTBicycle
```

```text
include('aws-20200430/Item/InternetOfThings/IoTBicycle')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTBicycle.png)|![](IoTBicycle.card.png)|![](IoTBicycle.element.png)|![](IoTBicycle.group.png)|



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
' loads the IoTBicycle element
include('aws-20200430/Item/InternetOfThings/IoTBicycle')
IoTBicycleCard('io_t_bicycle', 'Io T Bicycle', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTBicycle element
include('aws-20200430/Item/InternetOfThings/IoTBicycle')
IoTBicycleCard('io_t_bicycle', 'Io T Bicycle', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTBicycle element
include('aws-20200430/Item/InternetOfThings/IoTBicycle')
IoTBicycle('io_t_bicycle', 'Io T Bicycle', 'an optional tech field')
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
' loads the IoTBicycle element
include('aws-20200430/Item/InternetOfThings/IoTBicycle')
IoTBicycle('io_t_bicycle', 'Io T Bicycle', 'an optional tech field')
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
' loads the IoTBicycle element
include('aws-20200430/Item/InternetOfThings/IoTBicycle')
IoTBicycleGroup('io_t_bicycle', 'Io T Bicycle', 'an optional tech field'){
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
' loads the IoTBicycle element
include('aws-20200430/Item/InternetOfThings/IoTBicycle')
IoTBicycleGroup('io_t_bicycle', 'Io T Bicycle', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

