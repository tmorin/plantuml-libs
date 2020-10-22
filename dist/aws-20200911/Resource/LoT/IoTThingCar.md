# Io T Thing Car

```text
aws-20200911/Resource/LoT/IoTThingCar
```

```text
include('aws-20200911/Resource/LoT/IoTThingCar')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThingCar.png)|![](IoTThingCar.card.png)|![](IoTThingCar.element.png)|![](IoTThingCar.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingCar element
include('aws-20200911/Resource/LoT/IoTThingCar')
IoTThingCarCard('io_t_thing_car', 'Io T Thing Car', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingCar element
include('aws-20200911/Resource/LoT/IoTThingCar')
IoTThingCarCard('io_t_thing_car', 'Io T Thing Car', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingCar element
include('aws-20200911/Resource/LoT/IoTThingCar')
IoTThingCar('io_t_thing_car', 'Io T Thing Car', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingCar element
include('aws-20200911/Resource/LoT/IoTThingCar')
IoTThingCar('io_t_thing_car', 'Io T Thing Car', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingCar element
include('aws-20200911/Resource/LoT/IoTThingCar')
IoTThingCarGroup('io_t_thing_car', 'Io T Thing Car', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingCar element
include('aws-20200911/Resource/LoT/IoTThingCar')
IoTThingCarGroup('io_t_thing_car', 'Io T Thing Car', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

