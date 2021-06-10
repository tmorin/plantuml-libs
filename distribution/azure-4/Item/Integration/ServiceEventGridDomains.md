# ServiceEventGridDomains


```text
azure-4/Item/Integration/ServiceEventGridDomains
```

```text
include('azure-4/Item/Integration/ServiceEventGridDomains')
```



| Illustration | ServiceEventGridDomains | ServiceEventGridDomainsCard | ServiceEventGridDomainsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Integration/ServiceEventGridDomains.png) | ![illustration for ServiceEventGridDomains](../../../azure-4/Item/Integration/ServiceEventGridDomains.Local.png) | ![illustration for ServiceEventGridDomainsCard](../../../azure-4/Item/Integration/ServiceEventGridDomainsCard.Local.png) | ![illustration for ServiceEventGridDomainsGroup](../../../azure-4/Item/Integration/ServiceEventGridDomainsGroup.Local.png) |




## ServiceEventGridDomains

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceEventGridDomains
include('azure-4/Item/Integration/ServiceEventGridDomains')

' renders the element
ServiceEventGridDomains('ServiceEventGridDomains', 'Service Event Grid Domains', 'an optional tech label')
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

' loads the Item which embeds the element ServiceEventGridDomains
include('azure-4/Item/Integration/ServiceEventGridDomains')

' renders the element
ServiceEventGridDomains('ServiceEventGridDomains', 'Service Event Grid Domains', 'an optional tech label')
@enduml
```

## ServiceEventGridDomainsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceEventGridDomainsCard
include('azure-4/Item/Integration/ServiceEventGridDomains')

' renders the element
ServiceEventGridDomainsCard('ServiceEventGridDomainsCard', 'Service Event Grid Domains Card', 'an optional description')
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

' loads the Item which embeds the element ServiceEventGridDomainsCard
include('azure-4/Item/Integration/ServiceEventGridDomains')

' renders the element
ServiceEventGridDomainsCard('ServiceEventGridDomainsCard', 'Service Event Grid Domains Card', 'an optional description')
@enduml
```

## ServiceEventGridDomainsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceEventGridDomainsGroup
include('azure-4/Item/Integration/ServiceEventGridDomains')

' renders the element
ServiceEventGridDomainsGroup('ServiceEventGridDomainsGroup', 'Service Event Grid Domains Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceEventGridDomainsGroup
include('azure-4/Item/Integration/ServiceEventGridDomains')

' renders the element
ServiceEventGridDomainsGroup('ServiceEventGridDomainsGroup', 'Service Event Grid Domains Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

