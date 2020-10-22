# Service Azure Active Directory

```text
azure-v2/Item/Identity/ServiceAzureActiveDirectory
```

```text
include('azure-v2/Item/Identity/ServiceAzureActiveDirectory')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureActiveDirectory.png)|![](ServiceAzureActiveDirectory.card.png)|![](ServiceAzureActiveDirectory.element.png)|![](ServiceAzureActiveDirectory.group.png)|



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
' loads the ServiceAzureActiveDirectory element
include('azure-v2/Item/Identity/ServiceAzureActiveDirectory')
ServiceAzureActiveDirectoryCard('service_azure_active_directory', 'Service Azure Active Directory', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureActiveDirectory element
include('azure-v2/Item/Identity/ServiceAzureActiveDirectory')
ServiceAzureActiveDirectoryCard('service_azure_active_directory', 'Service Azure Active Directory', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureActiveDirectory element
include('azure-v2/Item/Identity/ServiceAzureActiveDirectory')
ServiceAzureActiveDirectory('service_azure_active_directory', 'Service Azure Active Directory', 'an optional tech field')
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
' loads the ServiceAzureActiveDirectory element
include('azure-v2/Item/Identity/ServiceAzureActiveDirectory')
ServiceAzureActiveDirectory('service_azure_active_directory', 'Service Azure Active Directory', 'an optional tech field')
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
' loads the ServiceAzureActiveDirectory element
include('azure-v2/Item/Identity/ServiceAzureActiveDirectory')
ServiceAzureActiveDirectoryGroup('service_azure_active_directory', 'Service Azure Active Directory', 'an optional tech field'){
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
' loads the ServiceAzureActiveDirectory element
include('azure-v2/Item/Identity/ServiceAzureActiveDirectory')
ServiceAzureActiveDirectoryGroup('service_azure_active_directory', 'Service Azure Active Directory', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

