# ServiceMonitor


```text
azure-11/Item/Monitor/ServiceMonitor
```

```text
include('azure-11/Item/Monitor/ServiceMonitor')
```



| Illustration | ServiceMonitor | ServiceMonitorCard | ServiceMonitorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Monitor/ServiceMonitor.png) | ![illustration for ServiceMonitor](../../../azure-11/Item/Monitor/ServiceMonitor.Local.png) | ![illustration for ServiceMonitorCard](../../../azure-11/Item/Monitor/ServiceMonitorCard.Local.png) | ![illustration for ServiceMonitorGroup](../../../azure-11/Item/Monitor/ServiceMonitorGroup.Local.png) |




## ServiceMonitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceMonitor
include('azure-11/Item/Monitor/ServiceMonitor')

' renders the element
ServiceMonitor('ServiceMonitor', 'Service Monitor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMonitor
include('azure-11/Item/Monitor/ServiceMonitor')

' renders the element
ServiceMonitor('ServiceMonitor', 'Service Monitor', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMonitorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceMonitorCard
include('azure-11/Item/Monitor/ServiceMonitor')

' renders the element
ServiceMonitorCard('ServiceMonitorCard', 'Service Monitor Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMonitorCard
include('azure-11/Item/Monitor/ServiceMonitor')

' renders the element
ServiceMonitorCard('ServiceMonitorCard', 'Service Monitor Card', 'an optional description')
@enduml
```

## ServiceMonitorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceMonitorGroup
include('azure-11/Item/Monitor/ServiceMonitor')

' renders the element
ServiceMonitorGroup('ServiceMonitorGroup', 'Service Monitor Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMonitorGroup
include('azure-11/Item/Monitor/ServiceMonitor')

' renders the element
ServiceMonitorGroup('ServiceMonitorGroup', 'Service Monitor Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

