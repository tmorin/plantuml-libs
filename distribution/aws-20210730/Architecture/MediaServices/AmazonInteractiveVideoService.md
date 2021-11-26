# AmazonInteractiveVideoService


```text
aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService
```

```text
include('aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService')
```



| Illustration | AmazonInteractiveVideoService | AmazonInteractiveVideoServiceCard | AmazonInteractiveVideoServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService.png) | ![illustration for AmazonInteractiveVideoService](../../../aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService.Local.png) | ![illustration for AmazonInteractiveVideoServiceCard](../../../aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoServiceCard.Local.png) | ![illustration for AmazonInteractiveVideoServiceGroup](../../../aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoServiceGroup.Local.png) |




## AmazonInteractiveVideoService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonInteractiveVideoService
include('aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService')

' renders the element
AmazonInteractiveVideoService('AmazonInteractiveVideoService', 'Amazon Interactive Video Service', 'an optional tech label')
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

' loads the Item which embeds the element AmazonInteractiveVideoService
include('aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService')

' renders the element
AmazonInteractiveVideoService('AmazonInteractiveVideoService', 'Amazon Interactive Video Service', 'an optional tech label')
@enduml
```

## AmazonInteractiveVideoServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonInteractiveVideoServiceCard
include('aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService')

' renders the element
AmazonInteractiveVideoServiceCard('AmazonInteractiveVideoServiceCard', 'Amazon Interactive Video Service Card', 'an optional description')
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

' loads the Item which embeds the element AmazonInteractiveVideoServiceCard
include('aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService')

' renders the element
AmazonInteractiveVideoServiceCard('AmazonInteractiveVideoServiceCard', 'Amazon Interactive Video Service Card', 'an optional description')
@enduml
```

## AmazonInteractiveVideoServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonInteractiveVideoServiceGroup
include('aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService')

' renders the element
AmazonInteractiveVideoServiceGroup('AmazonInteractiveVideoServiceGroup', 'Amazon Interactive Video Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonInteractiveVideoServiceGroup
include('aws-20210730/Architecture/MediaServices/AmazonInteractiveVideoService')

' renders the element
AmazonInteractiveVideoServiceGroup('AmazonInteractiveVideoServiceGroup', 'Amazon Interactive Video Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

