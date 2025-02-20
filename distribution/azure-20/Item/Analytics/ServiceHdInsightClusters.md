# ServiceHdInsightClusters


```text
azure-20/Item/Analytics/ServiceHdInsightClusters
```

```text
include('azure-20/Item/Analytics/ServiceHdInsightClusters')
```



| Illustration | ServiceHdInsightClusters | ServiceHdInsightClustersCard | ServiceHdInsightClustersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Analytics/ServiceHdInsightClusters.png) | ![illustration for ServiceHdInsightClusters](../../../azure-20/Item/Analytics/ServiceHdInsightClusters.Local.png) | ![illustration for ServiceHdInsightClustersCard](../../../azure-20/Item/Analytics/ServiceHdInsightClustersCard.Local.png) | ![illustration for ServiceHdInsightClustersGroup](../../../azure-20/Item/Analytics/ServiceHdInsightClustersGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceHdInsightClustersXs>`
- `<$ServiceHdInsightClustersSm>`
- `<$ServiceHdInsightClustersMd>`
- `<$ServiceHdInsightClustersLg>`





## ServiceHdInsightClusters

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHdInsightClusters
include('azure-20/Item/Analytics/ServiceHdInsightClusters')

' renders the element
ServiceHdInsightClusters('ServiceHdInsightClusters', 'Service Hd Insight Clusters', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHdInsightClusters
include('azure-20/Item/Analytics/ServiceHdInsightClusters')

' renders the element
ServiceHdInsightClusters('ServiceHdInsightClusters', 'Service Hd Insight Clusters', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceHdInsightClustersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHdInsightClustersCard
include('azure-20/Item/Analytics/ServiceHdInsightClusters')

' renders the element
ServiceHdInsightClustersCard('ServiceHdInsightClustersCard', 'Service Hd Insight Clusters Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHdInsightClustersCard
include('azure-20/Item/Analytics/ServiceHdInsightClusters')

' renders the element
ServiceHdInsightClustersCard('ServiceHdInsightClustersCard', 'Service Hd Insight Clusters Card', 'an optional description')
@enduml
```

## ServiceHdInsightClustersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHdInsightClustersGroup
include('azure-20/Item/Analytics/ServiceHdInsightClusters')

' renders the element
ServiceHdInsightClustersGroup('ServiceHdInsightClustersGroup', 'Service Hd Insight Clusters Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceHdInsightClustersGroup
include('azure-20/Item/Analytics/ServiceHdInsightClusters')

' renders the element
ServiceHdInsightClustersGroup('ServiceHdInsightClustersGroup', 'Service Hd Insight Clusters Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

