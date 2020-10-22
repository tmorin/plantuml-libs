# Service Recent

```text
azure-v2/Item/General/ServiceRecent
```

```text
include('azure-v2/Item/General/ServiceRecent')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceRecent.png)|![](ServiceRecent.card.png)|![](ServiceRecent.element.png)|![](ServiceRecent.group.png)|



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
' loads the ServiceRecent element
include('azure-v2/Item/General/ServiceRecent')
ServiceRecentCard('service_recent', 'Service Recent', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRecent element
include('azure-v2/Item/General/ServiceRecent')
ServiceRecentCard('service_recent', 'Service Recent', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRecent element
include('azure-v2/Item/General/ServiceRecent')
ServiceRecent('service_recent', 'Service Recent', 'an optional tech field')
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
' loads the ServiceRecent element
include('azure-v2/Item/General/ServiceRecent')
ServiceRecent('service_recent', 'Service Recent', 'an optional tech field')
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
' loads the ServiceRecent element
include('azure-v2/Item/General/ServiceRecent')
ServiceRecentGroup('service_recent', 'Service Recent', 'an optional tech field'){
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
' loads the ServiceRecent element
include('azure-v2/Item/General/ServiceRecent')
ServiceRecentGroup('service_recent', 'Service Recent', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

