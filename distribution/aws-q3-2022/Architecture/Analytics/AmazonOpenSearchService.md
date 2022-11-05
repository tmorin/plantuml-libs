# AmazonOpenSearchService


```text
aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService
```

```text
include('aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService')
```



| Illustration | AmazonOpenSearchService | AmazonOpenSearchServiceCard | AmazonOpenSearchServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService.png) | ![illustration for AmazonOpenSearchService](../../../aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService.Local.png) | ![illustration for AmazonOpenSearchServiceCard](../../../aws-q3-2022/Architecture/Analytics/AmazonOpenSearchServiceCard.Local.png) | ![illustration for AmazonOpenSearchServiceGroup](../../../aws-q3-2022/Architecture/Analytics/AmazonOpenSearchServiceGroup.Local.png) |




## AmazonOpenSearchService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonOpenSearchService
include('aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService')

' renders the element
AmazonOpenSearchService('AmazonOpenSearchService', 'Amazon Open Search Service', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonOpenSearchService
include('aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService')

' renders the element
AmazonOpenSearchService('AmazonOpenSearchService', 'Amazon Open Search Service', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonOpenSearchServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonOpenSearchServiceCard
include('aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService')

' renders the element
AmazonOpenSearchServiceCard('AmazonOpenSearchServiceCard', 'Amazon Open Search Service Card', 'an optional description')
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

' loads the Item which embeds the element AmazonOpenSearchServiceCard
include('aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService')

' renders the element
AmazonOpenSearchServiceCard('AmazonOpenSearchServiceCard', 'Amazon Open Search Service Card', 'an optional description')
@enduml
```

## AmazonOpenSearchServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonOpenSearchServiceGroup
include('aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService')

' renders the element
AmazonOpenSearchServiceGroup('AmazonOpenSearchServiceGroup', 'Amazon Open Search Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonOpenSearchServiceGroup
include('aws-q3-2022/Architecture/Analytics/AmazonOpenSearchService')

' renders the element
AmazonOpenSearchServiceGroup('AmazonOpenSearchServiceGroup', 'Amazon Open Search Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

