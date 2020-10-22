# Io T Fire Tv

```text
aws-20200430/Item/InternetOfThings/IoTFireTv
```

```text
include('aws-20200430/Item/InternetOfThings/IoTFireTv')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTFireTv.png)|![](IoTFireTv.card.png)|![](IoTFireTv.element.png)|![](IoTFireTv.group.png)|



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
' loads the IoTFireTv element
include('aws-20200430/Item/InternetOfThings/IoTFireTv')
IoTFireTvCard('io_t_fire_tv', 'Io T Fire Tv', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTFireTv element
include('aws-20200430/Item/InternetOfThings/IoTFireTv')
IoTFireTvCard('io_t_fire_tv', 'Io T Fire Tv', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTFireTv element
include('aws-20200430/Item/InternetOfThings/IoTFireTv')
IoTFireTv('io_t_fire_tv', 'Io T Fire Tv', 'an optional tech field')
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
' loads the IoTFireTv element
include('aws-20200430/Item/InternetOfThings/IoTFireTv')
IoTFireTv('io_t_fire_tv', 'Io T Fire Tv', 'an optional tech field')
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
' loads the IoTFireTv element
include('aws-20200430/Item/InternetOfThings/IoTFireTv')
IoTFireTvGroup('io_t_fire_tv', 'Io T Fire Tv', 'an optional tech field'){
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
' loads the IoTFireTv element
include('aws-20200430/Item/InternetOfThings/IoTFireTv')
IoTFireTvGroup('io_t_fire_tv', 'Io T Fire Tv', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

