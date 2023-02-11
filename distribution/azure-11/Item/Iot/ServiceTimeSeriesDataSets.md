# ServiceTimeSeriesDataSets


```text
azure-11/Item/Iot/ServiceTimeSeriesDataSets
```

```text
include('azure-11/Item/Iot/ServiceTimeSeriesDataSets')
```



| Illustration | ServiceTimeSeriesDataSets | ServiceTimeSeriesDataSetsCard | ServiceTimeSeriesDataSetsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Iot/ServiceTimeSeriesDataSets.png) | ![illustration for ServiceTimeSeriesDataSets](../../../azure-11/Item/Iot/ServiceTimeSeriesDataSets.Local.png) | ![illustration for ServiceTimeSeriesDataSetsCard](../../../azure-11/Item/Iot/ServiceTimeSeriesDataSetsCard.Local.png) | ![illustration for ServiceTimeSeriesDataSetsGroup](../../../azure-11/Item/Iot/ServiceTimeSeriesDataSetsGroup.Local.png) |




## ServiceTimeSeriesDataSets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceTimeSeriesDataSets
include('azure-11/Item/Iot/ServiceTimeSeriesDataSets')

' renders the element
ServiceTimeSeriesDataSets('ServiceTimeSeriesDataSets', 'Service Time Series Data Sets', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceTimeSeriesDataSets
include('azure-11/Item/Iot/ServiceTimeSeriesDataSets')

' renders the element
ServiceTimeSeriesDataSets('ServiceTimeSeriesDataSets', 'Service Time Series Data Sets', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceTimeSeriesDataSetsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceTimeSeriesDataSetsCard
include('azure-11/Item/Iot/ServiceTimeSeriesDataSets')

' renders the element
ServiceTimeSeriesDataSetsCard('ServiceTimeSeriesDataSetsCard', 'Service Time Series Data Sets Card', 'an optional description')
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

' loads the Item which embeds the element ServiceTimeSeriesDataSetsCard
include('azure-11/Item/Iot/ServiceTimeSeriesDataSets')

' renders the element
ServiceTimeSeriesDataSetsCard('ServiceTimeSeriesDataSetsCard', 'Service Time Series Data Sets Card', 'an optional description')
@enduml
```

## ServiceTimeSeriesDataSetsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceTimeSeriesDataSetsGroup
include('azure-11/Item/Iot/ServiceTimeSeriesDataSets')

' renders the element
ServiceTimeSeriesDataSetsGroup('ServiceTimeSeriesDataSetsGroup', 'Service Time Series Data Sets Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceTimeSeriesDataSetsGroup
include('azure-11/Item/Iot/ServiceTimeSeriesDataSets')

' renders the element
ServiceTimeSeriesDataSetsGroup('ServiceTimeSeriesDataSetsGroup', 'Service Time Series Data Sets Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

