# ServiceTimeSeriesInsightsEnvironments


```text
azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments
```

```text
include('azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments')
```



| Illustration | ServiceTimeSeriesInsightsEnvironments | ServiceTimeSeriesInsightsEnvironmentsCard | ServiceTimeSeriesInsightsEnvironmentsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments.png) | ![illustration for ServiceTimeSeriesInsightsEnvironments](../../../azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments.Local.png) | ![illustration for ServiceTimeSeriesInsightsEnvironmentsCard](../../../azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironmentsCard.Local.png) | ![illustration for ServiceTimeSeriesInsightsEnvironmentsGroup](../../../azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironmentsGroup.Local.png) |




## ServiceTimeSeriesInsightsEnvironments

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTimeSeriesInsightsEnvironments
include('azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments')

' renders the element
ServiceTimeSeriesInsightsEnvironments('ServiceTimeSeriesInsightsEnvironments', 'Service Time Series Insights Environments', 'an optional tech label')
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

' loads the Item which embeds the element ServiceTimeSeriesInsightsEnvironments
include('azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments')

' renders the element
ServiceTimeSeriesInsightsEnvironments('ServiceTimeSeriesInsightsEnvironments', 'Service Time Series Insights Environments', 'an optional tech label')
@enduml
```

## ServiceTimeSeriesInsightsEnvironmentsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTimeSeriesInsightsEnvironmentsCard
include('azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments')

' renders the element
ServiceTimeSeriesInsightsEnvironmentsCard('ServiceTimeSeriesInsightsEnvironmentsCard', 'Service Time Series Insights Environments Card', 'an optional description')
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

' loads the Item which embeds the element ServiceTimeSeriesInsightsEnvironmentsCard
include('azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments')

' renders the element
ServiceTimeSeriesInsightsEnvironmentsCard('ServiceTimeSeriesInsightsEnvironmentsCard', 'Service Time Series Insights Environments Card', 'an optional description')
@enduml
```

## ServiceTimeSeriesInsightsEnvironmentsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTimeSeriesInsightsEnvironmentsGroup
include('azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments')

' renders the element
ServiceTimeSeriesInsightsEnvironmentsGroup('ServiceTimeSeriesInsightsEnvironmentsGroup', 'Service Time Series Insights Environments Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceTimeSeriesInsightsEnvironmentsGroup
include('azure-4/Item/IoT/ServiceTimeSeriesInsightsEnvironments')

' renders the element
ServiceTimeSeriesInsightsEnvironmentsGroup('ServiceTimeSeriesInsightsEnvironmentsGroup', 'Service Time Series Insights Environments Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

