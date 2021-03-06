# AwsBatch


```text
aws-20210131/Architecture/Compute/AwsBatch
```

```text
include('aws-20210131/Architecture/Compute/AwsBatch')
```



| Illustration | AwsBatch | AwsBatchCard | AwsBatchGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Compute/AwsBatch.png) | ![illustration for AwsBatch](../../../aws-20210131/Architecture/Compute/AwsBatch.Local.png) | ![illustration for AwsBatchCard](../../../aws-20210131/Architecture/Compute/AwsBatchCard.Local.png) | ![illustration for AwsBatchGroup](../../../aws-20210131/Architecture/Compute/AwsBatchGroup.Local.png) |




## AwsBatch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBatch
include('aws-20210131/Architecture/Compute/AwsBatch')

' renders the element
AwsBatch('AwsBatch', 'Aws Batch', 'an optional tech label')
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

' loads the Item which embeds the element AwsBatch
include('aws-20210131/Architecture/Compute/AwsBatch')

' renders the element
AwsBatch('AwsBatch', 'Aws Batch', 'an optional tech label')
@enduml
```

## AwsBatchCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBatchCard
include('aws-20210131/Architecture/Compute/AwsBatch')

' renders the element
AwsBatchCard('AwsBatchCard', 'Aws Batch Card', 'an optional description')
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

' loads the Item which embeds the element AwsBatchCard
include('aws-20210131/Architecture/Compute/AwsBatch')

' renders the element
AwsBatchCard('AwsBatchCard', 'Aws Batch Card', 'an optional description')
@enduml
```

## AwsBatchGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBatchGroup
include('aws-20210131/Architecture/Compute/AwsBatch')

' renders the element
AwsBatchGroup('AwsBatchGroup', 'Aws Batch Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsBatchGroup
include('aws-20210131/Architecture/Compute/AwsBatch')

' renders the element
AwsBatchGroup('AwsBatchGroup', 'Aws Batch Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

