# Io T Windfarm

```text
aws-20200430/Item/InternetOfThings/IoTWindfarm
```

```text
include('aws-20200430/Item/InternetOfThings/IoTWindfarm')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTWindfarm.png)|![](IoTWindfarm.card.png)|![](IoTWindfarm.element.png)|![](IoTWindfarm.group.png)|



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
' loads the IoTWindfarm element
include('aws-20200430/Item/InternetOfThings/IoTWindfarm')
IoTWindfarmCard('io_t_windfarm', 'Io T Windfarm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTWindfarm element
include('aws-20200430/Item/InternetOfThings/IoTWindfarm')
IoTWindfarmCard('io_t_windfarm', 'Io T Windfarm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTWindfarm element
include('aws-20200430/Item/InternetOfThings/IoTWindfarm')
IoTWindfarm('io_t_windfarm', 'Io T Windfarm', 'an optional tech field')
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
' loads the IoTWindfarm element
include('aws-20200430/Item/InternetOfThings/IoTWindfarm')
IoTWindfarm('io_t_windfarm', 'Io T Windfarm', 'an optional tech field')
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
' loads the IoTWindfarm element
include('aws-20200430/Item/InternetOfThings/IoTWindfarm')
IoTWindfarmGroup('io_t_windfarm', 'Io T Windfarm', 'an optional tech field'){
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
' loads the IoTWindfarm element
include('aws-20200430/Item/InternetOfThings/IoTWindfarm')
IoTWindfarmGroup('io_t_windfarm', 'Io T Windfarm', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

