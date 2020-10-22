# Io T Lightbulb

```text
aws-20200430/Item/InternetOfThings/IoTLightbulb
```

```text
include('aws-20200430/Item/InternetOfThings/IoTLightbulb')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTLightbulb.png)|![](IoTLightbulb.card.png)|![](IoTLightbulb.element.png)|![](IoTLightbulb.group.png)|



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
' loads the IoTLightbulb element
include('aws-20200430/Item/InternetOfThings/IoTLightbulb')
IoTLightbulbCard('io_t_lightbulb', 'Io T Lightbulb', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTLightbulb element
include('aws-20200430/Item/InternetOfThings/IoTLightbulb')
IoTLightbulbCard('io_t_lightbulb', 'Io T Lightbulb', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTLightbulb element
include('aws-20200430/Item/InternetOfThings/IoTLightbulb')
IoTLightbulb('io_t_lightbulb', 'Io T Lightbulb', 'an optional tech field')
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
' loads the IoTLightbulb element
include('aws-20200430/Item/InternetOfThings/IoTLightbulb')
IoTLightbulb('io_t_lightbulb', 'Io T Lightbulb', 'an optional tech field')
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
' loads the IoTLightbulb element
include('aws-20200430/Item/InternetOfThings/IoTLightbulb')
IoTLightbulbGroup('io_t_lightbulb', 'Io T Lightbulb', 'an optional tech field'){
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
' loads the IoTLightbulb element
include('aws-20200430/Item/InternetOfThings/IoTLightbulb')
IoTLightbulbGroup('io_t_lightbulb', 'Io T Lightbulb', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

