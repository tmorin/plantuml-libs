# Service Workbooks

```text
azure-v2/Item/General/ServiceWorkbooks
```

```text
include('azure-v2/Item/General/ServiceWorkbooks')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceWorkbooks.png)|![](ServiceWorkbooks.card.png)|![](ServiceWorkbooks.element.png)|![](ServiceWorkbooks.group.png)|



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
' loads the ServiceWorkbooks element
include('azure-v2/Item/General/ServiceWorkbooks')
ServiceWorkbooksCard('service_workbooks', 'Service Workbooks', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWorkbooks element
include('azure-v2/Item/General/ServiceWorkbooks')
ServiceWorkbooksCard('service_workbooks', 'Service Workbooks', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWorkbooks element
include('azure-v2/Item/General/ServiceWorkbooks')
ServiceWorkbooks('service_workbooks', 'Service Workbooks', 'an optional tech field')
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
' loads the ServiceWorkbooks element
include('azure-v2/Item/General/ServiceWorkbooks')
ServiceWorkbooks('service_workbooks', 'Service Workbooks', 'an optional tech field')
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
' loads the ServiceWorkbooks element
include('azure-v2/Item/General/ServiceWorkbooks')
ServiceWorkbooksGroup('service_workbooks', 'Service Workbooks', 'an optional tech field'){
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
' loads the ServiceWorkbooks element
include('azure-v2/Item/General/ServiceWorkbooks')
ServiceWorkbooksGroup('service_workbooks', 'Service Workbooks', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

