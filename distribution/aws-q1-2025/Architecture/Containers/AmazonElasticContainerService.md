# AmazonElasticContainerService


```text
aws-q1-2025/Architecture/Containers/AmazonElasticContainerService
```

```text
include('aws-q1-2025/Architecture/Containers/AmazonElasticContainerService')
```



| Illustration | AmazonElasticContainerService | AmazonElasticContainerServiceCard | AmazonElasticContainerServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/Containers/AmazonElasticContainerService.png) | ![illustration for AmazonElasticContainerService](../../../aws-q1-2025/Architecture/Containers/AmazonElasticContainerService.Local.png) | ![illustration for AmazonElasticContainerServiceCard](../../../aws-q1-2025/Architecture/Containers/AmazonElasticContainerServiceCard.Local.png) | ![illustration for AmazonElasticContainerServiceGroup](../../../aws-q1-2025/Architecture/Containers/AmazonElasticContainerServiceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonElasticContainerServiceXs>`
- `<$AmazonElasticContainerServiceSm>`
- `<$AmazonElasticContainerServiceMd>`
- `<$AmazonElasticContainerServiceLg>`





## AmazonElasticContainerService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerService
include('aws-q1-2025/Architecture/Containers/AmazonElasticContainerService')

' renders the element
AmazonElasticContainerService('AmazonElasticContainerService', 'Amazon Elastic Container Service', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerService
include('aws-q1-2025/Architecture/Containers/AmazonElasticContainerService')

' renders the element
AmazonElasticContainerService('AmazonElasticContainerService', 'Amazon Elastic Container Service', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonElasticContainerServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerServiceCard
include('aws-q1-2025/Architecture/Containers/AmazonElasticContainerService')

' renders the element
AmazonElasticContainerServiceCard('AmazonElasticContainerServiceCard', 'Amazon Elastic Container Service Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerServiceCard
include('aws-q1-2025/Architecture/Containers/AmazonElasticContainerService')

' renders the element
AmazonElasticContainerServiceCard('AmazonElasticContainerServiceCard', 'Amazon Elastic Container Service Card', 'an optional description')
@enduml
```

## AmazonElasticContainerServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerServiceGroup
include('aws-q1-2025/Architecture/Containers/AmazonElasticContainerService')

' renders the element
AmazonElasticContainerServiceGroup('AmazonElasticContainerServiceGroup', 'Amazon Elastic Container Service Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonElasticContainerServiceGroup
include('aws-q1-2025/Architecture/Containers/AmazonElasticContainerService')

' renders the element
AmazonElasticContainerServiceGroup('AmazonElasticContainerServiceGroup', 'Amazon Elastic Container Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

