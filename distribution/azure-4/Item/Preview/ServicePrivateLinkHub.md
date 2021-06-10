# ServicePrivateLinkHub


```text
azure-4/Item/Preview/ServicePrivateLinkHub
```

```text
include('azure-4/Item/Preview/ServicePrivateLinkHub')
```



| Illustration | ServicePrivateLinkHub | ServicePrivateLinkHubCard | ServicePrivateLinkHubGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Preview/ServicePrivateLinkHub.png) | ![illustration for ServicePrivateLinkHub](../../../azure-4/Item/Preview/ServicePrivateLinkHub.Local.png) | ![illustration for ServicePrivateLinkHubCard](../../../azure-4/Item/Preview/ServicePrivateLinkHubCard.Local.png) | ![illustration for ServicePrivateLinkHubGroup](../../../azure-4/Item/Preview/ServicePrivateLinkHubGroup.Local.png) |




## ServicePrivateLinkHub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePrivateLinkHub
include('azure-4/Item/Preview/ServicePrivateLinkHub')

' renders the element
ServicePrivateLinkHub('ServicePrivateLinkHub', 'Service Private Link Hub', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePrivateLinkHub
include('azure-4/Item/Preview/ServicePrivateLinkHub')

' renders the element
ServicePrivateLinkHub('ServicePrivateLinkHub', 'Service Private Link Hub', 'an optional tech label')
@enduml
```

## ServicePrivateLinkHubCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePrivateLinkHubCard
include('azure-4/Item/Preview/ServicePrivateLinkHub')

' renders the element
ServicePrivateLinkHubCard('ServicePrivateLinkHubCard', 'Service Private Link Hub Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePrivateLinkHubCard
include('azure-4/Item/Preview/ServicePrivateLinkHub')

' renders the element
ServicePrivateLinkHubCard('ServicePrivateLinkHubCard', 'Service Private Link Hub Card', 'an optional description')
@enduml
```

## ServicePrivateLinkHubGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePrivateLinkHubGroup
include('azure-4/Item/Preview/ServicePrivateLinkHub')

' renders the element
ServicePrivateLinkHubGroup('ServicePrivateLinkHubGroup', 'Service Private Link Hub Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePrivateLinkHubGroup
include('azure-4/Item/Preview/ServicePrivateLinkHub')

' renders the element
ServicePrivateLinkHubGroup('ServicePrivateLinkHubGroup', 'Service Private Link Hub Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

