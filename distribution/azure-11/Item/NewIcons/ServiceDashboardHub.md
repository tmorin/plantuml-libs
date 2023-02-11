# ServiceDashboardHub


```text
azure-11/Item/NewIcons/ServiceDashboardHub
```

```text
include('azure-11/Item/NewIcons/ServiceDashboardHub')
```



| Illustration | ServiceDashboardHub | ServiceDashboardHubCard | ServiceDashboardHubGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/NewIcons/ServiceDashboardHub.png) | ![illustration for ServiceDashboardHub](../../../azure-11/Item/NewIcons/ServiceDashboardHub.Local.png) | ![illustration for ServiceDashboardHubCard](../../../azure-11/Item/NewIcons/ServiceDashboardHubCard.Local.png) | ![illustration for ServiceDashboardHubGroup](../../../azure-11/Item/NewIcons/ServiceDashboardHubGroup.Local.png) |




## ServiceDashboardHub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDashboardHub
include('azure-11/Item/NewIcons/ServiceDashboardHub')

' renders the element
ServiceDashboardHub('ServiceDashboardHub', 'Service Dashboard Hub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceDashboardHub
include('azure-11/Item/NewIcons/ServiceDashboardHub')

' renders the element
ServiceDashboardHub('ServiceDashboardHub', 'Service Dashboard Hub', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDashboardHubCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDashboardHubCard
include('azure-11/Item/NewIcons/ServiceDashboardHub')

' renders the element
ServiceDashboardHubCard('ServiceDashboardHubCard', 'Service Dashboard Hub Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDashboardHubCard
include('azure-11/Item/NewIcons/ServiceDashboardHub')

' renders the element
ServiceDashboardHubCard('ServiceDashboardHubCard', 'Service Dashboard Hub Card', 'an optional description')
@enduml
```

## ServiceDashboardHubGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceDashboardHubGroup
include('azure-11/Item/NewIcons/ServiceDashboardHub')

' renders the element
ServiceDashboardHubGroup('ServiceDashboardHubGroup', 'Service Dashboard Hub Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDashboardHubGroup
include('azure-11/Item/NewIcons/ServiceDashboardHub')

' renders the element
ServiceDashboardHubGroup('ServiceDashboardHubGroup', 'Service Dashboard Hub Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

