# Io T Echo

```text
aws-20210131/Resource/LoT/IoTEcho
```

```text
include('aws-20210131/Resource/LoT/IoTEcho')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTEcho.png)|![](IoTEcho.card.png)|![](IoTEcho.element.png)|![](IoTEcho.group.png)|



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
' loads the IoTEcho element
include('aws-20210131/Resource/LoT/IoTEcho')
IoTEchoCard('io_t_echo', 'Io T Echo', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTEcho element
include('aws-20210131/Resource/LoT/IoTEcho')
IoTEchoCard('io_t_echo', 'Io T Echo', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTEcho element
include('aws-20210131/Resource/LoT/IoTEcho')
IoTEcho('io_t_echo', 'Io T Echo', 'an optional tech field')
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
' loads the IoTEcho element
include('aws-20210131/Resource/LoT/IoTEcho')
IoTEcho('io_t_echo', 'Io T Echo', 'an optional tech field')
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
' loads the IoTEcho element
include('aws-20210131/Resource/LoT/IoTEcho')
IoTEchoGroup('io_t_echo', 'Io T Echo', 'an optional tech field'){
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
' loads the IoTEcho element
include('aws-20210131/Resource/LoT/IoTEcho')
IoTEchoGroup('io_t_echo', 'Io T Echo', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

