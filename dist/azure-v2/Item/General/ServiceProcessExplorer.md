# Service Process Explorer

```text
azure-v2/Item/General/ServiceProcessExplorer
```

```text
include('azure-v2/Item/General/ServiceProcessExplorer')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceProcessExplorer.png)|![](ServiceProcessExplorer.card.png)|![](ServiceProcessExplorer.element.png)|![](ServiceProcessExplorer.group.png)|



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
' loads the ServiceProcessExplorer element
include('azure-v2/Item/General/ServiceProcessExplorer')
ServiceProcessExplorerCard('service_process_explorer', 'Service Process Explorer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceProcessExplorer element
include('azure-v2/Item/General/ServiceProcessExplorer')
ServiceProcessExplorerCard('service_process_explorer', 'Service Process Explorer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceProcessExplorer element
include('azure-v2/Item/General/ServiceProcessExplorer')
ServiceProcessExplorer('service_process_explorer', 'Service Process Explorer', 'an optional tech field')
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
' loads the ServiceProcessExplorer element
include('azure-v2/Item/General/ServiceProcessExplorer')
ServiceProcessExplorer('service_process_explorer', 'Service Process Explorer', 'an optional tech field')
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
' loads the ServiceProcessExplorer element
include('azure-v2/Item/General/ServiceProcessExplorer')
ServiceProcessExplorerGroup('service_process_explorer', 'Service Process Explorer', 'an optional tech field'){
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
' loads the ServiceProcessExplorer element
include('azure-v2/Item/General/ServiceProcessExplorer')
ServiceProcessExplorerGroup('service_process_explorer', 'Service Process Explorer', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

