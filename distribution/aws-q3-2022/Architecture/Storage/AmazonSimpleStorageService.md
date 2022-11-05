# AmazonSimpleStorageService


```text
aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService
```

```text
include('aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService')
```



| Illustration | AmazonSimpleStorageService | AmazonSimpleStorageServiceCard | AmazonSimpleStorageServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService.png) | ![illustration for AmazonSimpleStorageService](../../../aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService.Local.png) | ![illustration for AmazonSimpleStorageServiceCard](../../../aws-q3-2022/Architecture/Storage/AmazonSimpleStorageServiceCard.Local.png) | ![illustration for AmazonSimpleStorageServiceGroup](../../../aws-q3-2022/Architecture/Storage/AmazonSimpleStorageServiceGroup.Local.png) |




## AmazonSimpleStorageService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageService
include('aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService')

' renders the element
AmazonSimpleStorageService('AmazonSimpleStorageService', 'Amazon Simple Storage Service', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageService
include('aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService')

' renders the element
AmazonSimpleStorageService('AmazonSimpleStorageService', 'Amazon Simple Storage Service', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonSimpleStorageServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceCard
include('aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService')

' renders the element
AmazonSimpleStorageServiceCard('AmazonSimpleStorageServiceCard', 'Amazon Simple Storage Service Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceCard
include('aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService')

' renders the element
AmazonSimpleStorageServiceCard('AmazonSimpleStorageServiceCard', 'Amazon Simple Storage Service Card', 'an optional description')
@enduml
```

## AmazonSimpleStorageServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceGroup
include('aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService')

' renders the element
AmazonSimpleStorageServiceGroup('AmazonSimpleStorageServiceGroup', 'Amazon Simple Storage Service Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonSimpleStorageServiceGroup
include('aws-q3-2022/Architecture/Storage/AmazonSimpleStorageService')

' renders the element
AmazonSimpleStorageServiceGroup('AmazonSimpleStorageServiceGroup', 'Amazon Simple Storage Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

