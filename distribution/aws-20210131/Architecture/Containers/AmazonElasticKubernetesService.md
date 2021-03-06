# AmazonElasticKubernetesService


```text
aws-20210131/Architecture/Containers/AmazonElasticKubernetesService
```

```text
include('aws-20210131/Architecture/Containers/AmazonElasticKubernetesService')
```



| Illustration | AmazonElasticKubernetesService | AmazonElasticKubernetesServiceCard | AmazonElasticKubernetesServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Containers/AmazonElasticKubernetesService.png) | ![illustration for AmazonElasticKubernetesService](../../../aws-20210131/Architecture/Containers/AmazonElasticKubernetesService.Local.png) | ![illustration for AmazonElasticKubernetesServiceCard](../../../aws-20210131/Architecture/Containers/AmazonElasticKubernetesServiceCard.Local.png) | ![illustration for AmazonElasticKubernetesServiceGroup](../../../aws-20210131/Architecture/Containers/AmazonElasticKubernetesServiceGroup.Local.png) |




## AmazonElasticKubernetesService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticKubernetesService
include('aws-20210131/Architecture/Containers/AmazonElasticKubernetesService')

' renders the element
AmazonElasticKubernetesService('AmazonElasticKubernetesService', 'Amazon Elastic Kubernetes Service', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticKubernetesService
include('aws-20210131/Architecture/Containers/AmazonElasticKubernetesService')

' renders the element
AmazonElasticKubernetesService('AmazonElasticKubernetesService', 'Amazon Elastic Kubernetes Service', 'an optional tech label')
@enduml
```

## AmazonElasticKubernetesServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticKubernetesServiceCard
include('aws-20210131/Architecture/Containers/AmazonElasticKubernetesService')

' renders the element
AmazonElasticKubernetesServiceCard('AmazonElasticKubernetesServiceCard', 'Amazon Elastic Kubernetes Service Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticKubernetesServiceCard
include('aws-20210131/Architecture/Containers/AmazonElasticKubernetesService')

' renders the element
AmazonElasticKubernetesServiceCard('AmazonElasticKubernetesServiceCard', 'Amazon Elastic Kubernetes Service Card', 'an optional description')
@enduml
```

## AmazonElasticKubernetesServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticKubernetesServiceGroup
include('aws-20210131/Architecture/Containers/AmazonElasticKubernetesService')

' renders the element
AmazonElasticKubernetesServiceGroup('AmazonElasticKubernetesServiceGroup', 'Amazon Elastic Kubernetes Service Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticKubernetesServiceGroup
include('aws-20210131/Architecture/Containers/AmazonElasticKubernetesService')

' renders the element
AmazonElasticKubernetesServiceGroup('AmazonElasticKubernetesServiceGroup', 'Amazon Elastic Kubernetes Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

