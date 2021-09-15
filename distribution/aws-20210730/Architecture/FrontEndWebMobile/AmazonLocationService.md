# AmazonLocationService


```text
aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService
```

```text
include('aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService')
```



| Illustration | AmazonLocationService | AmazonLocationServiceCard | AmazonLocationServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService.png) | ![illustration for AmazonLocationService](../../../aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService.Local.png) | ![illustration for AmazonLocationServiceCard](../../../aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationServiceCard.Local.png) | ![illustration for AmazonLocationServiceGroup](../../../aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationServiceGroup.Local.png) |




## AmazonLocationService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonLocationService
include('aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationService('AmazonLocationService', 'Amazon Location Service', 'an optional tech label')
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

' loads the Item which embeds the element AmazonLocationService
include('aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationService('AmazonLocationService', 'Amazon Location Service', 'an optional tech label')
@enduml
```

## AmazonLocationServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonLocationServiceCard
include('aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonLocationServiceCard
include('aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationServiceCard('AmazonLocationServiceCard', 'Amazon Location Service Card', 'an optional description')
@enduml
```

## AmazonLocationServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonLocationServiceGroup
include('aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonLocationServiceGroup
include('aws-20210730/Architecture/FrontEndWebMobile/AmazonLocationService')

' renders the element
AmazonLocationServiceGroup('AmazonLocationServiceGroup', 'Amazon Location Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

