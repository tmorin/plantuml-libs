# AwsElementalMediaTailor


```text
aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor
```

```text
include('aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor')
```



| Illustration | AwsElementalMediaTailor | AwsElementalMediaTailorCard | AwsElementalMediaTailorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor.png) | ![illustration for AwsElementalMediaTailor](../../../aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor.Local.png) | ![illustration for AwsElementalMediaTailorCard](../../../aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailorCard.Local.png) | ![illustration for AwsElementalMediaTailorGroup](../../../aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailorGroup.Local.png) |




## AwsElementalMediaTailor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaTailor
include('aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor')

' renders the element
AwsElementalMediaTailor('AwsElementalMediaTailor', 'Aws Elemental Media Tailor', 'an optional tech label', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaTailor
include('aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor')

' renders the element
AwsElementalMediaTailor('AwsElementalMediaTailor', 'Aws Elemental Media Tailor', 'an optional tech label', 'an optional description')
@enduml
```

## AwsElementalMediaTailorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaTailorCard
include('aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor')

' renders the element
AwsElementalMediaTailorCard('AwsElementalMediaTailorCard', 'Aws Elemental Media Tailor Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaTailorCard
include('aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor')

' renders the element
AwsElementalMediaTailorCard('AwsElementalMediaTailorCard', 'Aws Elemental Media Tailor Card', 'an optional description')
@enduml
```

## AwsElementalMediaTailorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaTailorGroup
include('aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor')

' renders the element
AwsElementalMediaTailorGroup('AwsElementalMediaTailorGroup', 'Aws Elemental Media Tailor Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsElementalMediaTailorGroup
include('aws-q1-2022/Architecture/MediaServices/AwsElementalMediaTailor')

' renders the element
AwsElementalMediaTailorGroup('AwsElementalMediaTailorGroup', 'Aws Elemental Media Tailor Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

