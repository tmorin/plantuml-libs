# Io T Thing Utility

```text
aws-20210131/Resource/LoT/IoTThingUtility
```

```text
include('aws-20210131/Resource/LoT/IoTThingUtility')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThingUtility.png)|![](IoTThingUtility.card.png)|![](IoTThingUtility.element.png)|![](IoTThingUtility.group.png)|



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
' loads the IoTThingUtility element
include('aws-20210131/Resource/LoT/IoTThingUtility')
IoTThingUtilityCard('io_t_thing_utility', 'Io T Thing Utility', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingUtility element
include('aws-20210131/Resource/LoT/IoTThingUtility')
IoTThingUtilityCard('io_t_thing_utility', 'Io T Thing Utility', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingUtility element
include('aws-20210131/Resource/LoT/IoTThingUtility')
IoTThingUtility('io_t_thing_utility', 'Io T Thing Utility', 'an optional tech field')
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
' loads the IoTThingUtility element
include('aws-20210131/Resource/LoT/IoTThingUtility')
IoTThingUtility('io_t_thing_utility', 'Io T Thing Utility', 'an optional tech field')
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
' loads the IoTThingUtility element
include('aws-20210131/Resource/LoT/IoTThingUtility')
IoTThingUtilityGroup('io_t_thing_utility', 'Io T Thing Utility', 'an optional tech field'){
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
' loads the IoTThingUtility element
include('aws-20210131/Resource/LoT/IoTThingUtility')
IoTThingUtilityGroup('io_t_thing_utility', 'Io T Thing Utility', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

