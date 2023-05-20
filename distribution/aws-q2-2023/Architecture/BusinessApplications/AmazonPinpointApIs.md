# AmazonPinpointApIs


```text
aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs
```

```text
include('aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs')
```



| Illustration | AmazonPinpointApIs | AmazonPinpointApIsCard | AmazonPinpointApIsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs.png) | ![illustration for AmazonPinpointApIs](../../../aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs.Local.png) | ![illustration for AmazonPinpointApIsCard](../../../aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIsCard.Local.png) | ![illustration for AmazonPinpointApIsGroup](../../../aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonPinpointApIsXs>`
- `<$AmazonPinpointApIsSm>`
- `<$AmazonPinpointApIsMd>`
- `<$AmazonPinpointApIsLg>`





## AmazonPinpointApIs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonPinpointApIs
include('aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs')

' renders the element
AmazonPinpointApIs('AmazonPinpointApIs', 'Amazon Pinpoint Ap Is', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonPinpointApIs
include('aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs')

' renders the element
AmazonPinpointApIs('AmazonPinpointApIs', 'Amazon Pinpoint Ap Is', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonPinpointApIsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonPinpointApIsCard
include('aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs')

' renders the element
AmazonPinpointApIsCard('AmazonPinpointApIsCard', 'Amazon Pinpoint Ap Is Card', 'an optional description')
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

' loads the Item which embeds the element AmazonPinpointApIsCard
include('aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs')

' renders the element
AmazonPinpointApIsCard('AmazonPinpointApIsCard', 'Amazon Pinpoint Ap Is Card', 'an optional description')
@enduml
```

## AmazonPinpointApIsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonPinpointApIsGroup
include('aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs')

' renders the element
AmazonPinpointApIsGroup('AmazonPinpointApIsGroup', 'Amazon Pinpoint Ap Is Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonPinpointApIsGroup
include('aws-q2-2023/Architecture/BusinessApplications/AmazonPinpointApIs')

' renders the element
AmazonPinpointApIsGroup('AmazonPinpointApIsGroup', 'Amazon Pinpoint Ap Is Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

