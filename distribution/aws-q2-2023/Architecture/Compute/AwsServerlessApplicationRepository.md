# AwsServerlessApplicationRepository


```text
aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository
```

```text
include('aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository')
```



| Illustration | AwsServerlessApplicationRepository | AwsServerlessApplicationRepositoryCard | AwsServerlessApplicationRepositoryGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository.png) | ![illustration for AwsServerlessApplicationRepository](../../../aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository.Local.png) | ![illustration for AwsServerlessApplicationRepositoryCard](../../../aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepositoryCard.Local.png) | ![illustration for AwsServerlessApplicationRepositoryGroup](../../../aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepositoryGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsServerlessApplicationRepositoryXs>`
- `<$AwsServerlessApplicationRepositorySm>`
- `<$AwsServerlessApplicationRepositoryMd>`
- `<$AwsServerlessApplicationRepositoryLg>`





## AwsServerlessApplicationRepository

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsServerlessApplicationRepository
include('aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository')

' renders the element
AwsServerlessApplicationRepository('AwsServerlessApplicationRepository', 'Aws Serverless Application Repository', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsServerlessApplicationRepository
include('aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository')

' renders the element
AwsServerlessApplicationRepository('AwsServerlessApplicationRepository', 'Aws Serverless Application Repository', 'an optional tech label', 'an optional description')
@enduml
```

## AwsServerlessApplicationRepositoryCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsServerlessApplicationRepositoryCard
include('aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository')

' renders the element
AwsServerlessApplicationRepositoryCard('AwsServerlessApplicationRepositoryCard', 'Aws Serverless Application Repository Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsServerlessApplicationRepositoryCard
include('aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository')

' renders the element
AwsServerlessApplicationRepositoryCard('AwsServerlessApplicationRepositoryCard', 'Aws Serverless Application Repository Card', 'an optional description')
@enduml
```

## AwsServerlessApplicationRepositoryGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsServerlessApplicationRepositoryGroup
include('aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository')

' renders the element
AwsServerlessApplicationRepositoryGroup('AwsServerlessApplicationRepositoryGroup', 'Aws Serverless Application Repository Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsServerlessApplicationRepositoryGroup
include('aws-q2-2023/Architecture/Compute/AwsServerlessApplicationRepository')

' renders the element
AwsServerlessApplicationRepositoryGroup('AwsServerlessApplicationRepositoryGroup', 'Aws Serverless Application Repository Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

