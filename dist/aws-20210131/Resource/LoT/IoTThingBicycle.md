# Io T Thing Bicycle

```text
aws-20210131/Resource/LoT/IoTThingBicycle
```

```text
include('aws-20210131/Resource/LoT/IoTThingBicycle')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThingBicycle.png)|![](IoTThingBicycle.card.png)|![](IoTThingBicycle.element.png)|![](IoTThingBicycle.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTThingBicycle element
include('aws-20210131/Resource/LoT/IoTThingBicycle')
IoTThingBicycleCard('io_t_thing_bicycle', 'Io T Thing Bicycle', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTThingBicycle element
include('aws-20210131/Resource/LoT/IoTThingBicycle')
IoTThingBicycleCard('io_t_thing_bicycle', 'Io T Thing Bicycle', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTThingBicycle element
include('aws-20210131/Resource/LoT/IoTThingBicycle')
IoTThingBicycle('io_t_thing_bicycle', 'Io T Thing Bicycle', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTThingBicycle element
include('aws-20210131/Resource/LoT/IoTThingBicycle')
IoTThingBicycle('io_t_thing_bicycle', 'Io T Thing Bicycle', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTThingBicycle element
include('aws-20210131/Resource/LoT/IoTThingBicycle')
IoTThingBicycleGroup('io_t_thing_bicycle', 'Io T Thing Bicycle', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTThingBicycle element
include('aws-20210131/Resource/LoT/IoTThingBicycle')
IoTThingBicycleGroup('io_t_thing_bicycle', 'Io T Thing Bicycle', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

