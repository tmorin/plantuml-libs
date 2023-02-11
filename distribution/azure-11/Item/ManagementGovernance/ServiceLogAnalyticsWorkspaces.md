# ServiceLogAnalyticsWorkspaces


```text
azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces
```

```text
include('azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces')
```



| Illustration | ServiceLogAnalyticsWorkspaces | ServiceLogAnalyticsWorkspacesCard | ServiceLogAnalyticsWorkspacesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces.png) | ![illustration for ServiceLogAnalyticsWorkspaces](../../../azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces.Local.png) | ![illustration for ServiceLogAnalyticsWorkspacesCard](../../../azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspacesCard.Local.png) | ![illustration for ServiceLogAnalyticsWorkspacesGroup](../../../azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspacesGroup.Local.png) |




## ServiceLogAnalyticsWorkspaces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsWorkspaces
include('azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces')

' renders the element
ServiceLogAnalyticsWorkspaces('ServiceLogAnalyticsWorkspaces', 'Service Log Analytics Workspaces', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsWorkspaces
include('azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces')

' renders the element
ServiceLogAnalyticsWorkspaces('ServiceLogAnalyticsWorkspaces', 'Service Log Analytics Workspaces', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLogAnalyticsWorkspacesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsWorkspacesCard
include('azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces')

' renders the element
ServiceLogAnalyticsWorkspacesCard('ServiceLogAnalyticsWorkspacesCard', 'Service Log Analytics Workspaces Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsWorkspacesCard
include('azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces')

' renders the element
ServiceLogAnalyticsWorkspacesCard('ServiceLogAnalyticsWorkspacesCard', 'Service Log Analytics Workspaces Card', 'an optional description')
@enduml
```

## ServiceLogAnalyticsWorkspacesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsWorkspacesGroup
include('azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces')

' renders the element
ServiceLogAnalyticsWorkspacesGroup('ServiceLogAnalyticsWorkspacesGroup', 'Service Log Analytics Workspaces Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsWorkspacesGroup
include('azure-11/Item/ManagementGovernance/ServiceLogAnalyticsWorkspaces')

' renders the element
ServiceLogAnalyticsWorkspacesGroup('ServiceLogAnalyticsWorkspacesGroup', 'Service Log Analytics Workspaces Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

