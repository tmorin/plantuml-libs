# Service Function Apps

```text
azure-v2/Item/Compute/ServiceFunctionApps
```

```text
include('azure-v2/Item/Compute/ServiceFunctionApps')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceFunctionApps.png)|![](ServiceFunctionApps.card.png)|![](ServiceFunctionApps.element.png)|![](ServiceFunctionApps.group.png)|



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
' loads the ServiceFunctionApps element
include('azure-v2/Item/Compute/ServiceFunctionApps')
ServiceFunctionAppsCard('service_function_apps', 'Service Function Apps', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFunctionApps element
include('azure-v2/Item/Compute/ServiceFunctionApps')
ServiceFunctionAppsCard('service_function_apps', 'Service Function Apps', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFunctionApps element
include('azure-v2/Item/Compute/ServiceFunctionApps')
ServiceFunctionApps('service_function_apps', 'Service Function Apps', 'an optional tech field')
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
' loads the ServiceFunctionApps element
include('azure-v2/Item/Compute/ServiceFunctionApps')
ServiceFunctionApps('service_function_apps', 'Service Function Apps', 'an optional tech field')
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
' loads the ServiceFunctionApps element
include('azure-v2/Item/Compute/ServiceFunctionApps')
ServiceFunctionAppsGroup('service_function_apps', 'Service Function Apps', 'an optional tech field'){
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
' loads the ServiceFunctionApps element
include('azure-v2/Item/Compute/ServiceFunctionApps')
ServiceFunctionAppsGroup('service_function_apps', 'Service Function Apps', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

