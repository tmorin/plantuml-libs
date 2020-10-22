# Io T Thing House

```text
aws-20200911/Resource/LoT/IoTThingHouse
```

```text
include('aws-20200911/Resource/LoT/IoTThingHouse')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThingHouse.png)|![](IoTThingHouse.card.png)|![](IoTThingHouse.element.png)|![](IoTThingHouse.group.png)|



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
' loads the IoTThingHouse element
include('aws-20200911/Resource/LoT/IoTThingHouse')
IoTThingHouseCard('io_t_thing_house', 'Io T Thing House', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingHouse element
include('aws-20200911/Resource/LoT/IoTThingHouse')
IoTThingHouseCard('io_t_thing_house', 'Io T Thing House', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingHouse element
include('aws-20200911/Resource/LoT/IoTThingHouse')
IoTThingHouse('io_t_thing_house', 'Io T Thing House', 'an optional tech field')
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
' loads the IoTThingHouse element
include('aws-20200911/Resource/LoT/IoTThingHouse')
IoTThingHouse('io_t_thing_house', 'Io T Thing House', 'an optional tech field')
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
' loads the IoTThingHouse element
include('aws-20200911/Resource/LoT/IoTThingHouse')
IoTThingHouseGroup('io_t_thing_house', 'Io T Thing House', 'an optional tech field'){
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
' loads the IoTThingHouse element
include('aws-20200911/Resource/LoT/IoTThingHouse')
IoTThingHouseGroup('io_t_thing_house', 'Io T Thing House', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

