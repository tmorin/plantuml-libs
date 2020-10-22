# Service Search Grid

```text
azure-v2/Item/General/ServiceSearchGrid
```

```text
include('azure-v2/Item/General/ServiceSearchGrid')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSearchGrid.png)|![](ServiceSearchGrid.card.png)|![](ServiceSearchGrid.element.png)|![](ServiceSearchGrid.group.png)|



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
' loads the ServiceSearchGrid element
include('azure-v2/Item/General/ServiceSearchGrid')
ServiceSearchGridCard('service_search_grid', 'Service Search Grid', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSearchGrid element
include('azure-v2/Item/General/ServiceSearchGrid')
ServiceSearchGridCard('service_search_grid', 'Service Search Grid', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSearchGrid element
include('azure-v2/Item/General/ServiceSearchGrid')
ServiceSearchGrid('service_search_grid', 'Service Search Grid', 'an optional tech field')
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
' loads the ServiceSearchGrid element
include('azure-v2/Item/General/ServiceSearchGrid')
ServiceSearchGrid('service_search_grid', 'Service Search Grid', 'an optional tech field')
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
' loads the ServiceSearchGrid element
include('azure-v2/Item/General/ServiceSearchGrid')
ServiceSearchGridGroup('service_search_grid', 'Service Search Grid', 'an optional tech field'){
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
' loads the ServiceSearchGrid element
include('azure-v2/Item/General/ServiceSearchGrid')
ServiceSearchGridGroup('service_search_grid', 'Service Search Grid', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

