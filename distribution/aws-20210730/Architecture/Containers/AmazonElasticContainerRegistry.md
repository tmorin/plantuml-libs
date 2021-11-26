# AmazonElasticContainerRegistry


```text
aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry
```

```text
include('aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry')
```



| Illustration | AmazonElasticContainerRegistry | AmazonElasticContainerRegistryCard | AmazonElasticContainerRegistryGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry.png) | ![illustration for AmazonElasticContainerRegistry](../../../aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry.Local.png) | ![illustration for AmazonElasticContainerRegistryCard](../../../aws-20210730/Architecture/Containers/AmazonElasticContainerRegistryCard.Local.png) | ![illustration for AmazonElasticContainerRegistryGroup](../../../aws-20210730/Architecture/Containers/AmazonElasticContainerRegistryGroup.Local.png) |




## AmazonElasticContainerRegistry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerRegistry
include('aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry')

' renders the element
AmazonElasticContainerRegistry('AmazonElasticContainerRegistry', 'Amazon Elastic Container Registry', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerRegistry
include('aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry')

' renders the element
AmazonElasticContainerRegistry('AmazonElasticContainerRegistry', 'Amazon Elastic Container Registry', 'an optional tech label')
@enduml
```

## AmazonElasticContainerRegistryCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerRegistryCard
include('aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry')

' renders the element
AmazonElasticContainerRegistryCard('AmazonElasticContainerRegistryCard', 'Amazon Elastic Container Registry Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerRegistryCard
include('aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry')

' renders the element
AmazonElasticContainerRegistryCard('AmazonElasticContainerRegistryCard', 'Amazon Elastic Container Registry Card', 'an optional description')
@enduml
```

## AmazonElasticContainerRegistryGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerRegistryGroup
include('aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry')

' renders the element
AmazonElasticContainerRegistryGroup('AmazonElasticContainerRegistryGroup', 'Amazon Elastic Container Registry Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerRegistryGroup
include('aws-20210730/Architecture/Containers/AmazonElasticContainerRegistry')

' renders the element
AmazonElasticContainerRegistryGroup('AmazonElasticContainerRegistryGroup', 'Amazon Elastic Container Registry Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

