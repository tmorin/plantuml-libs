# AwsEndUserMessaging


```text
aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging
```

```text
include('aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging')
```



| Illustration | AwsEndUserMessaging | AwsEndUserMessagingCard | AwsEndUserMessagingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging.png) | ![illustration for AwsEndUserMessaging](../../../aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging.Local.png) | ![illustration for AwsEndUserMessagingCard](../../../aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessagingCard.Local.png) | ![illustration for AwsEndUserMessagingGroup](../../../aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessagingGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsEndUserMessagingXs>`
- `<$AwsEndUserMessagingSm>`
- `<$AwsEndUserMessagingMd>`
- `<$AwsEndUserMessagingLg>`





## AwsEndUserMessaging

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsEndUserMessaging
include('aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging')

' renders the element
AwsEndUserMessaging('AwsEndUserMessaging', 'Aws End User Messaging', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsEndUserMessaging
include('aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging')

' renders the element
AwsEndUserMessaging('AwsEndUserMessaging', 'Aws End User Messaging', 'an optional tech label', 'an optional description')
@enduml
```

## AwsEndUserMessagingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsEndUserMessagingCard
include('aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging')

' renders the element
AwsEndUserMessagingCard('AwsEndUserMessagingCard', 'Aws End User Messaging Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsEndUserMessagingCard
include('aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging')

' renders the element
AwsEndUserMessagingCard('AwsEndUserMessagingCard', 'Aws End User Messaging Card', 'an optional description')
@enduml
```

## AwsEndUserMessagingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsEndUserMessagingGroup
include('aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging')

' renders the element
AwsEndUserMessagingGroup('AwsEndUserMessagingGroup', 'Aws End User Messaging Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsEndUserMessagingGroup
include('aws-q1-2025/Architecture/BusinessApplications/AwsEndUserMessaging')

' renders the element
AwsEndUserMessagingGroup('AwsEndUserMessagingGroup', 'Aws End User Messaging Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

