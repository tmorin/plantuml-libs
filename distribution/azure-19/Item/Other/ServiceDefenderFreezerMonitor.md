# ServiceDefenderFreezerMonitor


```text
azure-19/Item/Other/ServiceDefenderFreezerMonitor
```

```text
include('azure-19/Item/Other/ServiceDefenderFreezerMonitor')
```



| Illustration | ServiceDefenderFreezerMonitor | ServiceDefenderFreezerMonitorCard | ServiceDefenderFreezerMonitorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Other/ServiceDefenderFreezerMonitor.png) | ![illustration for ServiceDefenderFreezerMonitor](../../../azure-19/Item/Other/ServiceDefenderFreezerMonitor.Local.png) | ![illustration for ServiceDefenderFreezerMonitorCard](../../../azure-19/Item/Other/ServiceDefenderFreezerMonitorCard.Local.png) | ![illustration for ServiceDefenderFreezerMonitorGroup](../../../azure-19/Item/Other/ServiceDefenderFreezerMonitorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDefenderFreezerMonitorXs>`
- `<$ServiceDefenderFreezerMonitorSm>`
- `<$ServiceDefenderFreezerMonitorMd>`
- `<$ServiceDefenderFreezerMonitorLg>`





## ServiceDefenderFreezerMonitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDefenderFreezerMonitor
include('azure-19/Item/Other/ServiceDefenderFreezerMonitor')

' renders the element
ServiceDefenderFreezerMonitor('ServiceDefenderFreezerMonitor', 'Service Defender Freezer Monitor', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDefenderFreezerMonitor
include('azure-19/Item/Other/ServiceDefenderFreezerMonitor')

' renders the element
ServiceDefenderFreezerMonitor('ServiceDefenderFreezerMonitor', 'Service Defender Freezer Monitor', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDefenderFreezerMonitorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDefenderFreezerMonitorCard
include('azure-19/Item/Other/ServiceDefenderFreezerMonitor')

' renders the element
ServiceDefenderFreezerMonitorCard('ServiceDefenderFreezerMonitorCard', 'Service Defender Freezer Monitor Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDefenderFreezerMonitorCard
include('azure-19/Item/Other/ServiceDefenderFreezerMonitor')

' renders the element
ServiceDefenderFreezerMonitorCard('ServiceDefenderFreezerMonitorCard', 'Service Defender Freezer Monitor Card', 'an optional description')
@enduml
```

## ServiceDefenderFreezerMonitorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDefenderFreezerMonitorGroup
include('azure-19/Item/Other/ServiceDefenderFreezerMonitor')

' renders the element
ServiceDefenderFreezerMonitorGroup('ServiceDefenderFreezerMonitorGroup', 'Service Defender Freezer Monitor Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceDefenderFreezerMonitorGroup
include('azure-19/Item/Other/ServiceDefenderFreezerMonitor')

' renders the element
ServiceDefenderFreezerMonitorGroup('ServiceDefenderFreezerMonitorGroup', 'Service Defender Freezer Monitor Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

