# ServiceMetrics


```text
azure/Item/Monitor/ServiceMetrics
```

```text
include('azure/Item/Monitor/ServiceMetrics')
```



| Illustration | ServiceMetrics | ServiceMetricsCard | ServiceMetricsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Monitor/ServiceMetrics.png) | ![illustration for ServiceMetrics](../../../azure/Item/Monitor/ServiceMetrics.Local.png) | ![illustration for ServiceMetricsCard](../../../azure/Item/Monitor/ServiceMetricsCard.Local.png) | ![illustration for ServiceMetricsGroup](../../../azure/Item/Monitor/ServiceMetricsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMetricsXs>`
- `<$ServiceMetricsSm>`
- `<$ServiceMetricsMd>`
- `<$ServiceMetricsLg>`





## ServiceMetrics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMetrics
include('azure/Item/Monitor/ServiceMetrics')

' renders the element
ServiceMetrics('ServiceMetrics', 'Service Metrics', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMetrics
include('azure/Item/Monitor/ServiceMetrics')

' renders the element
ServiceMetrics('ServiceMetrics', 'Service Metrics', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMetricsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMetricsCard
include('azure/Item/Monitor/ServiceMetrics')

' renders the element
ServiceMetricsCard('ServiceMetricsCard', 'Service Metrics Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMetricsCard
include('azure/Item/Monitor/ServiceMetrics')

' renders the element
ServiceMetricsCard('ServiceMetricsCard', 'Service Metrics Card', 'an optional description')
@enduml
```

## ServiceMetricsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMetricsGroup
include('azure/Item/Monitor/ServiceMetrics')

' renders the element
ServiceMetricsGroup('ServiceMetricsGroup', 'Service Metrics Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMetricsGroup
include('azure/Item/Monitor/ServiceMetrics')

' renders the element
ServiceMetricsGroup('ServiceMetricsGroup', 'Service Metrics Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

