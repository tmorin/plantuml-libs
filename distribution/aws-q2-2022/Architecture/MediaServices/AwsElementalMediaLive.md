# AwsElementalMediaLive


```text
aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive
```

```text
include('aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive')
```



| Illustration | AwsElementalMediaLive | AwsElementalMediaLiveCard | AwsElementalMediaLiveGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive.png) | ![illustration for AwsElementalMediaLive](../../../aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive.Local.png) | ![illustration for AwsElementalMediaLiveCard](../../../aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLiveCard.Local.png) | ![illustration for AwsElementalMediaLiveGroup](../../../aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLiveGroup.Local.png) |




## AwsElementalMediaLive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaLive
include('aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive')

' renders the element
AwsElementalMediaLive('AwsElementalMediaLive', 'Aws Elemental Media Live', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaLive
include('aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive')

' renders the element
AwsElementalMediaLive('AwsElementalMediaLive', 'Aws Elemental Media Live', 'an optional tech label')
@enduml
```

## AwsElementalMediaLiveCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaLiveCard
include('aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive')

' renders the element
AwsElementalMediaLiveCard('AwsElementalMediaLiveCard', 'Aws Elemental Media Live Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaLiveCard
include('aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive')

' renders the element
AwsElementalMediaLiveCard('AwsElementalMediaLiveCard', 'Aws Elemental Media Live Card', 'an optional description')
@enduml
```

## AwsElementalMediaLiveGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaLiveGroup
include('aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive')

' renders the element
AwsElementalMediaLiveGroup('AwsElementalMediaLiveGroup', 'Aws Elemental Media Live Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaLiveGroup
include('aws-q2-2022/Architecture/MediaServices/AwsElementalMediaLive')

' renders the element
AwsElementalMediaLiveGroup('AwsElementalMediaLiveGroup', 'Aws Elemental Media Live Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

