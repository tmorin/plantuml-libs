# AmazonCloudFront


```text
aws-20210131/Architecture/NetworkingContent/AmazonCloudFront
```

```text
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')
```



| Illustration | AmazonCloudFront | AmazonCloudFrontCard | AmazonCloudFrontGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/NetworkingContent/AmazonCloudFront.png) | ![illustration for AmazonCloudFront](../../../aws-20210131/Architecture/NetworkingContent/AmazonCloudFront.Local.png) | ![illustration for AmazonCloudFrontCard](../../../aws-20210131/Architecture/NetworkingContent/AmazonCloudFrontCard.Local.png) | ![illustration for AmazonCloudFrontGroup](../../../aws-20210131/Architecture/NetworkingContent/AmazonCloudFrontGroup.Local.png) |




## AmazonCloudFront

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonCloudFront
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')

' renders the element
AmazonCloudFront('AmazonCloudFront', 'Amazon Cloud Front', 'an optional tech label')
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

' loads the Item which embeds the element AmazonCloudFront
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')

' renders the element
AmazonCloudFront('AmazonCloudFront', 'Amazon Cloud Front', 'an optional tech label')
@enduml
```

## AmazonCloudFrontCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonCloudFrontCard
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')

' renders the element
AmazonCloudFrontCard('AmazonCloudFrontCard', 'Amazon Cloud Front Card', 'an optional description')
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

' loads the Item which embeds the element AmazonCloudFrontCard
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')

' renders the element
AmazonCloudFrontCard('AmazonCloudFrontCard', 'Amazon Cloud Front Card', 'an optional description')
@enduml
```

## AmazonCloudFrontGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonCloudFrontGroup
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')

' renders the element
AmazonCloudFrontGroup('AmazonCloudFrontGroup', 'Amazon Cloud Front Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonCloudFrontGroup
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')

' renders the element
AmazonCloudFrontGroup('AmazonCloudFrontGroup', 'Amazon Cloud Front Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

