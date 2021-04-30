# Io T Thing Lightbulb

```text
aws-20210131/Resource/LoT/IoTThingLightbulb
```

```text
include('aws-20210131/Resource/LoT/IoTThingLightbulb')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThingLightbulb.png)|![](IoTThingLightbulb.card.png)|![](IoTThingLightbulb.element.png)|![](IoTThingLightbulb.group.png)|



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
' loads the IoTThingLightbulb element
include('aws-20210131/Resource/LoT/IoTThingLightbulb')
IoTThingLightbulbCard('io_t_thing_lightbulb', 'Io T Thing Lightbulb', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingLightbulb element
include('aws-20210131/Resource/LoT/IoTThingLightbulb')
IoTThingLightbulbCard('io_t_thing_lightbulb', 'Io T Thing Lightbulb', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingLightbulb element
include('aws-20210131/Resource/LoT/IoTThingLightbulb')
IoTThingLightbulb('io_t_thing_lightbulb', 'Io T Thing Lightbulb', 'an optional tech field')
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
' loads the IoTThingLightbulb element
include('aws-20210131/Resource/LoT/IoTThingLightbulb')
IoTThingLightbulb('io_t_thing_lightbulb', 'Io T Thing Lightbulb', 'an optional tech field')
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
' loads the IoTThingLightbulb element
include('aws-20210131/Resource/LoT/IoTThingLightbulb')
IoTThingLightbulbGroup('io_t_thing_lightbulb', 'Io T Thing Lightbulb', 'an optional tech field'){
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
' loads the IoTThingLightbulb element
include('aws-20210131/Resource/LoT/IoTThingLightbulb')
IoTThingLightbulbGroup('io_t_thing_lightbulb', 'Io T Thing Lightbulb', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

