# AmazonEmrCluster


```text
aws/Resource/Analytics/AmazonEmrCluster
```

```text
include('aws/Resource/Analytics/AmazonEmrCluster')
```



| Illustration | AmazonEmrCluster | AmazonEmrClusterCard | AmazonEmrClusterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/Analytics/AmazonEmrCluster.png) | ![illustration for AmazonEmrCluster](../../../aws/Resource/Analytics/AmazonEmrCluster.Local.png) | ![illustration for AmazonEmrClusterCard](../../../aws/Resource/Analytics/AmazonEmrClusterCard.Local.png) | ![illustration for AmazonEmrClusterGroup](../../../aws/Resource/Analytics/AmazonEmrClusterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEmrClusterXs>`
- `<$AmazonEmrClusterSm>`
- `<$AmazonEmrClusterMd>`
- `<$AmazonEmrClusterLg>`





## AmazonEmrCluster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEmrCluster
include('aws/Resource/Analytics/AmazonEmrCluster')

' renders the element
AmazonEmrCluster('AmazonEmrCluster', 'Amazon Emr Cluster', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEmrCluster
include('aws/Resource/Analytics/AmazonEmrCluster')

' renders the element
AmazonEmrCluster('AmazonEmrCluster', 'Amazon Emr Cluster', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEmrClusterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEmrClusterCard
include('aws/Resource/Analytics/AmazonEmrCluster')

' renders the element
AmazonEmrClusterCard('AmazonEmrClusterCard', 'Amazon Emr Cluster Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEmrClusterCard
include('aws/Resource/Analytics/AmazonEmrCluster')

' renders the element
AmazonEmrClusterCard('AmazonEmrClusterCard', 'Amazon Emr Cluster Card', 'an optional description')
@enduml
```

## AmazonEmrClusterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEmrClusterGroup
include('aws/Resource/Analytics/AmazonEmrCluster')

' renders the element
AmazonEmrClusterGroup('AmazonEmrClusterGroup', 'Amazon Emr Cluster Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonEmrClusterGroup
include('aws/Resource/Analytics/AmazonEmrCluster')

' renders the element
AmazonEmrClusterGroup('AmazonEmrClusterGroup', 'Amazon Emr Cluster Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

