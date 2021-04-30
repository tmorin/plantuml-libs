# Io T Thing Windfarm

```text
aws-20210131/Resource/LoT/IoTThingWindfarm
```

```text
include('aws-20210131/Resource/LoT/IoTThingWindfarm')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThingWindfarm.png)|![](IoTThingWindfarm.card.png)|![](IoTThingWindfarm.element.png)|![](IoTThingWindfarm.group.png)|



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
' loads the IoTThingWindfarm element
include('aws-20210131/Resource/LoT/IoTThingWindfarm')
IoTThingWindfarmCard('io_t_thing_windfarm', 'Io T Thing Windfarm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingWindfarm element
include('aws-20210131/Resource/LoT/IoTThingWindfarm')
IoTThingWindfarmCard('io_t_thing_windfarm', 'Io T Thing Windfarm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingWindfarm element
include('aws-20210131/Resource/LoT/IoTThingWindfarm')
IoTThingWindfarm('io_t_thing_windfarm', 'Io T Thing Windfarm', 'an optional tech field')
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
' loads the IoTThingWindfarm element
include('aws-20210131/Resource/LoT/IoTThingWindfarm')
IoTThingWindfarm('io_t_thing_windfarm', 'Io T Thing Windfarm', 'an optional tech field')
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
' loads the IoTThingWindfarm element
include('aws-20210131/Resource/LoT/IoTThingWindfarm')
IoTThingWindfarmGroup('io_t_thing_windfarm', 'Io T Thing Windfarm', 'an optional tech field'){
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
' loads the IoTThingWindfarm element
include('aws-20210131/Resource/LoT/IoTThingWindfarm')
IoTThingWindfarmGroup('io_t_thing_windfarm', 'Io T Thing Windfarm', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

