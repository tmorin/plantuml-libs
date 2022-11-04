# ServiceGrafana


```text
azure-6/Item/NewIcons/ServiceGrafana
```

```text
include('azure-6/Item/NewIcons/ServiceGrafana')
```



| Illustration | ServiceGrafana | ServiceGrafanaCard | ServiceGrafanaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceGrafana.png) | ![illustration for ServiceGrafana](../../../azure-6/Item/NewIcons/ServiceGrafana.Local.png) | ![illustration for ServiceGrafanaCard](../../../azure-6/Item/NewIcons/ServiceGrafanaCard.Local.png) | ![illustration for ServiceGrafanaGroup](../../../azure-6/Item/NewIcons/ServiceGrafanaGroup.Local.png) |




## ServiceGrafana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceGrafana
include('azure-6/Item/NewIcons/ServiceGrafana')

' renders the element
ServiceGrafana('ServiceGrafana', 'Service Grafana', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceGrafana
include('azure-6/Item/NewIcons/ServiceGrafana')

' renders the element
ServiceGrafana('ServiceGrafana', 'Service Grafana', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceGrafanaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceGrafanaCard
include('azure-6/Item/NewIcons/ServiceGrafana')

' renders the element
ServiceGrafanaCard('ServiceGrafanaCard', 'Service Grafana Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceGrafanaCard
include('azure-6/Item/NewIcons/ServiceGrafana')

' renders the element
ServiceGrafanaCard('ServiceGrafanaCard', 'Service Grafana Card', 'an optional description')
@enduml
```

## ServiceGrafanaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceGrafanaGroup
include('azure-6/Item/NewIcons/ServiceGrafana')

' renders the element
ServiceGrafanaGroup('ServiceGrafanaGroup', 'Service Grafana Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceGrafanaGroup
include('azure-6/Item/NewIcons/ServiceGrafana')

' renders the element
ServiceGrafanaGroup('ServiceGrafanaGroup', 'Service Grafana Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

