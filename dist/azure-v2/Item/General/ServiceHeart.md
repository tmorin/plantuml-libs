# Service Heart

```text
azure-v2/Item/General/ServiceHeart
```

```text
include('azure-v2/Item/General/ServiceHeart')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceHeart.png)|![](ServiceHeart.card.png)|![](ServiceHeart.element.png)|![](ServiceHeart.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceHeart element
include('azure-v2/Item/General/ServiceHeart')
ServiceHeartCard('service_heart', 'Service Heart', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceHeart element
include('azure-v2/Item/General/ServiceHeart')
ServiceHeartCard('service_heart', 'Service Heart', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceHeart element
include('azure-v2/Item/General/ServiceHeart')
ServiceHeart('service_heart', 'Service Heart', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceHeart element
include('azure-v2/Item/General/ServiceHeart')
ServiceHeart('service_heart', 'Service Heart', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceHeart element
include('azure-v2/Item/General/ServiceHeart')
ServiceHeartGroup('service_heart', 'Service Heart', 'an optional tech field'){
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceHeart element
include('azure-v2/Item/General/ServiceHeart')
ServiceHeartGroup('service_heart', 'Service Heart', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

