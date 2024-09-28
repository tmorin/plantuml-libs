# AmazonLocationService


```text
aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService
```

```text
include('aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService')
```



| Illustration | AmazonLocationService | AmazonLocationServiceCard | AmazonLocationServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService.png) | ![illustration for AmazonLocationService](../../../aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService.Local.png) | ![illustration for AmazonLocationServiceCard](../../../aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationServiceCard.Local.png) | ![illustration for AmazonLocationServiceGroup](../../../aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationServiceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonLocationServiceXs>`
- `<$AmazonLocationServiceSm>`
- `<$AmazonLocationServiceMd>`
- `<$AmazonLocationServiceLg>`





## AmazonLocationService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonLocationService
include('aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationService('AmazonLocationService', 'Amazon Location Service', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonLocationService
include('aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationService('AmazonLocationService', 'Amazon Location Service', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonLocationServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonLocationServiceCard
include('aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationServiceCard('AmazonLocationServiceCard', 'Amazon Location Service Card', 'an optional description')
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

' loads the Item which embeds the element AmazonLocationServiceCard
include('aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationServiceCard('AmazonLocationServiceCard', 'Amazon Location Service Card', 'an optional description')
@enduml
```

## AmazonLocationServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonLocationServiceGroup
include('aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationServiceGroup('AmazonLocationServiceGroup', 'Amazon Location Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonLocationServiceGroup
include('aws-q2-2024/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationServiceGroup('AmazonLocationServiceGroup', 'Amazon Location Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

