# ServiceAzureManagedGrafana


```text
azure-17/Item/Other/ServiceAzureManagedGrafana
```

```text
include('azure-17/Item/Other/ServiceAzureManagedGrafana')
```



| Illustration | ServiceAzureManagedGrafana | ServiceAzureManagedGrafanaCard | ServiceAzureManagedGrafanaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceAzureManagedGrafana.png) | ![illustration for ServiceAzureManagedGrafana](../../../azure-17/Item/Other/ServiceAzureManagedGrafana.Local.png) | ![illustration for ServiceAzureManagedGrafanaCard](../../../azure-17/Item/Other/ServiceAzureManagedGrafanaCard.Local.png) | ![illustration for ServiceAzureManagedGrafanaGroup](../../../azure-17/Item/Other/ServiceAzureManagedGrafanaGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureManagedGrafanaXs>`
- `<$ServiceAzureManagedGrafanaSm>`
- `<$ServiceAzureManagedGrafanaMd>`
- `<$ServiceAzureManagedGrafanaLg>`





## ServiceAzureManagedGrafana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedGrafana
include('azure-17/Item/Other/ServiceAzureManagedGrafana')

' renders the element
ServiceAzureManagedGrafana('ServiceAzureManagedGrafana', 'Service Azure Managed Grafana', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedGrafana
include('azure-17/Item/Other/ServiceAzureManagedGrafana')

' renders the element
ServiceAzureManagedGrafana('ServiceAzureManagedGrafana', 'Service Azure Managed Grafana', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureManagedGrafanaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedGrafanaCard
include('azure-17/Item/Other/ServiceAzureManagedGrafana')

' renders the element
ServiceAzureManagedGrafanaCard('ServiceAzureManagedGrafanaCard', 'Service Azure Managed Grafana Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedGrafanaCard
include('azure-17/Item/Other/ServiceAzureManagedGrafana')

' renders the element
ServiceAzureManagedGrafanaCard('ServiceAzureManagedGrafanaCard', 'Service Azure Managed Grafana Card', 'an optional description')
@enduml
```

## ServiceAzureManagedGrafanaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedGrafanaGroup
include('azure-17/Item/Other/ServiceAzureManagedGrafana')

' renders the element
ServiceAzureManagedGrafanaGroup('ServiceAzureManagedGrafanaGroup', 'Service Azure Managed Grafana Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedGrafanaGroup
include('azure-17/Item/Other/ServiceAzureManagedGrafana')

' renders the element
ServiceAzureManagedGrafanaGroup('ServiceAzureManagedGrafanaGroup', 'Service Azure Managed Grafana Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

