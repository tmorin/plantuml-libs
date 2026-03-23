# ServiceHdiAksCluster


```text
azure/Item/Other/ServiceHdiAksCluster
```

```text
include('azure/Item/Other/ServiceHdiAksCluster')
```



| Illustration | ServiceHdiAksCluster | ServiceHdiAksClusterCard | ServiceHdiAksClusterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceHdiAksCluster.png) | ![illustration for ServiceHdiAksCluster](../../../azure/Item/Other/ServiceHdiAksCluster.Local.png) | ![illustration for ServiceHdiAksClusterCard](../../../azure/Item/Other/ServiceHdiAksClusterCard.Local.png) | ![illustration for ServiceHdiAksClusterGroup](../../../azure/Item/Other/ServiceHdiAksClusterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceHdiAksClusterXs>`
- `<$ServiceHdiAksClusterSm>`
- `<$ServiceHdiAksClusterMd>`
- `<$ServiceHdiAksClusterLg>`





## ServiceHdiAksCluster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceHdiAksCluster
include('azure/Item/Other/ServiceHdiAksCluster')

' renders the element
ServiceHdiAksCluster('ServiceHdiAksCluster', 'Service Hdi Aks Cluster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceHdiAksCluster
include('azure/Item/Other/ServiceHdiAksCluster')

' renders the element
ServiceHdiAksCluster('ServiceHdiAksCluster', 'Service Hdi Aks Cluster', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceHdiAksClusterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceHdiAksClusterCard
include('azure/Item/Other/ServiceHdiAksCluster')

' renders the element
ServiceHdiAksClusterCard('ServiceHdiAksClusterCard', 'Service Hdi Aks Cluster Card', 'an optional description')
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

' loads the Item which embeds the element ServiceHdiAksClusterCard
include('azure/Item/Other/ServiceHdiAksCluster')

' renders the element
ServiceHdiAksClusterCard('ServiceHdiAksClusterCard', 'Service Hdi Aks Cluster Card', 'an optional description')
@enduml
```

## ServiceHdiAksClusterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceHdiAksClusterGroup
include('azure/Item/Other/ServiceHdiAksCluster')

' renders the element
ServiceHdiAksClusterGroup('ServiceHdiAksClusterGroup', 'Service Hdi Aks Cluster Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceHdiAksClusterGroup
include('azure/Item/Other/ServiceHdiAksCluster')

' renders the element
ServiceHdiAksClusterGroup('ServiceHdiAksClusterGroup', 'Service Hdi Aks Cluster Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

