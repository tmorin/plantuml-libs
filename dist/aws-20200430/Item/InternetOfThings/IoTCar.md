# Io T Car

```text
aws-20200430/Item/InternetOfThings/IoTCar
```

```text
include('aws-20200430/Item/InternetOfThings/IoTCar')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTCar.png)|![](IoTCar.card.png)|![](IoTCar.element.png)|![](IoTCar.group.png)|



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
' loads the IoTCar element
include('aws-20200430/Item/InternetOfThings/IoTCar')
IoTCarCard('io_t_car', 'Io T Car', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTCar element
include('aws-20200430/Item/InternetOfThings/IoTCar')
IoTCarCard('io_t_car', 'Io T Car', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTCar element
include('aws-20200430/Item/InternetOfThings/IoTCar')
IoTCar('io_t_car', 'Io T Car', 'an optional tech field')
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
' loads the IoTCar element
include('aws-20200430/Item/InternetOfThings/IoTCar')
IoTCar('io_t_car', 'Io T Car', 'an optional tech field')
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
' loads the IoTCar element
include('aws-20200430/Item/InternetOfThings/IoTCar')
IoTCarGroup('io_t_car', 'Io T Car', 'an optional tech field'){
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
' loads the IoTCar element
include('aws-20200430/Item/InternetOfThings/IoTCar')
IoTCarGroup('io_t_car', 'Io T Car', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

