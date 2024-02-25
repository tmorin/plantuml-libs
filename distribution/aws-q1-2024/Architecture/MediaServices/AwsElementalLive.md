# AwsElementalLive


```text
aws-q1-2024/Architecture/MediaServices/AwsElementalLive
```

```text
include('aws-q1-2024/Architecture/MediaServices/AwsElementalLive')
```



| Illustration | AwsElementalLive | AwsElementalLiveCard | AwsElementalLiveGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/MediaServices/AwsElementalLive.png) | ![illustration for AwsElementalLive](../../../aws-q1-2024/Architecture/MediaServices/AwsElementalLive.Local.png) | ![illustration for AwsElementalLiveCard](../../../aws-q1-2024/Architecture/MediaServices/AwsElementalLiveCard.Local.png) | ![illustration for AwsElementalLiveGroup](../../../aws-q1-2024/Architecture/MediaServices/AwsElementalLiveGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsElementalLiveXs>`
- `<$AwsElementalLiveSm>`
- `<$AwsElementalLiveMd>`
- `<$AwsElementalLiveLg>`





## AwsElementalLive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalLive
include('aws-q1-2024/Architecture/MediaServices/AwsElementalLive')

' renders the element
AwsElementalLive('AwsElementalLive', 'Aws Elemental Live', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalLive
include('aws-q1-2024/Architecture/MediaServices/AwsElementalLive')

' renders the element
AwsElementalLive('AwsElementalLive', 'Aws Elemental Live', 'an optional tech label', 'an optional description')
@enduml
```

## AwsElementalLiveCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalLiveCard
include('aws-q1-2024/Architecture/MediaServices/AwsElementalLive')

' renders the element
AwsElementalLiveCard('AwsElementalLiveCard', 'Aws Elemental Live Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalLiveCard
include('aws-q1-2024/Architecture/MediaServices/AwsElementalLive')

' renders the element
AwsElementalLiveCard('AwsElementalLiveCard', 'Aws Elemental Live Card', 'an optional description')
@enduml
```

## AwsElementalLiveGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalLiveGroup
include('aws-q1-2024/Architecture/MediaServices/AwsElementalLive')

' renders the element
AwsElementalLiveGroup('AwsElementalLiveGroup', 'Aws Elemental Live Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalLiveGroup
include('aws-q1-2024/Architecture/MediaServices/AwsElementalLive')

' renders the element
AwsElementalLiveGroup('AwsElementalLiveGroup', 'Aws Elemental Live Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

