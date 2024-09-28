# AmazonSimpleStorageServiceGlacier


```text
aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier
```

```text
include('aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier')
```



| Illustration | AmazonSimpleStorageServiceGlacier | AmazonSimpleStorageServiceGlacierCard | AmazonSimpleStorageServiceGlacierGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier.png) | ![illustration for AmazonSimpleStorageServiceGlacier](../../../aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier.Local.png) | ![illustration for AmazonSimpleStorageServiceGlacierCard](../../../aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacierCard.Local.png) | ![illustration for AmazonSimpleStorageServiceGlacierGroup](../../../aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacierGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonSimpleStorageServiceGlacierXs>`
- `<$AmazonSimpleStorageServiceGlacierSm>`
- `<$AmazonSimpleStorageServiceGlacierMd>`
- `<$AmazonSimpleStorageServiceGlacierLg>`





## AmazonSimpleStorageServiceGlacier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceGlacier
include('aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier')

' renders the element
AmazonSimpleStorageServiceGlacier('AmazonSimpleStorageServiceGlacier', 'Amazon Simple Storage Service Glacier', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceGlacier
include('aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier')

' renders the element
AmazonSimpleStorageServiceGlacier('AmazonSimpleStorageServiceGlacier', 'Amazon Simple Storage Service Glacier', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonSimpleStorageServiceGlacierCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceGlacierCard
include('aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier')

' renders the element
AmazonSimpleStorageServiceGlacierCard('AmazonSimpleStorageServiceGlacierCard', 'Amazon Simple Storage Service Glacier Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceGlacierCard
include('aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier')

' renders the element
AmazonSimpleStorageServiceGlacierCard('AmazonSimpleStorageServiceGlacierCard', 'Amazon Simple Storage Service Glacier Card', 'an optional description')
@enduml
```

## AmazonSimpleStorageServiceGlacierGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceGlacierGroup
include('aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier')

' renders the element
AmazonSimpleStorageServiceGlacierGroup('AmazonSimpleStorageServiceGlacierGroup', 'Amazon Simple Storage Service Glacier Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceGlacierGroup
include('aws-q2-2024/Architecture/Storage/AmazonSimpleStorageServiceGlacier')

' renders the element
AmazonSimpleStorageServiceGlacierGroup('AmazonSimpleStorageServiceGlacierGroup', 'Amazon Simple Storage Service Glacier Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

