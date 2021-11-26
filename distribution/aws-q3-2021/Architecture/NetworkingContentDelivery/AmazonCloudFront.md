# AmazonCloudFront


```text
aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront
```

```text
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront')
```



| Illustration | AmazonCloudFront | AmazonCloudFrontCard | AmazonCloudFrontGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront.png) | ![illustration for AmazonCloudFront](../../../aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront.Local.png) | ![illustration for AmazonCloudFrontCard](../../../aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFrontCard.Local.png) | ![illustration for AmazonCloudFrontGroup](../../../aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFrontGroup.Local.png) |




## AmazonCloudFront

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonCloudFront
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonCloudFront
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront')

' renders the element
AmazonCloudFront('AmazonCloudFront', 'Amazon Cloud Front', 'an optional tech label')
@enduml
```

## AmazonCloudFrontCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonCloudFrontCard
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonCloudFrontCard
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront')

' renders the element
AmazonCloudFrontCard('AmazonCloudFrontCard', 'Amazon Cloud Front Card', 'an optional description')
@enduml
```

## AmazonCloudFrontGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonCloudFrontGroup
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonCloudFrontGroup
include('aws-q3-2021/Architecture/NetworkingContentDelivery/AmazonCloudFront')

' renders the element
AmazonCloudFrontGroup('AmazonCloudFrontGroup', 'Amazon Cloud Front Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

