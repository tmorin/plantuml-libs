# AwsHealthImaging


```text
aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging
```

```text
include('aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging')
```



| Illustration | AwsHealthImaging | AwsHealthImagingCard | AwsHealthImagingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging.png) | ![illustration for AwsHealthImaging](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging.Local.png) | ![illustration for AwsHealthImagingCard](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImagingCard.Local.png) | ![illustration for AwsHealthImagingGroup](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImagingGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsHealthImagingXs>`
- `<$AwsHealthImagingSm>`
- `<$AwsHealthImagingMd>`
- `<$AwsHealthImagingLg>`





## AwsHealthImaging

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsHealthImaging
include('aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging')

' renders the element
AwsHealthImaging('AwsHealthImaging', 'Aws Health Imaging', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsHealthImaging
include('aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging')

' renders the element
AwsHealthImaging('AwsHealthImaging', 'Aws Health Imaging', 'an optional tech label', 'an optional description')
@enduml
```

## AwsHealthImagingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsHealthImagingCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging')

' renders the element
AwsHealthImagingCard('AwsHealthImagingCard', 'Aws Health Imaging Card', 'an optional description')
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

' loads the Item which embeds the element AwsHealthImagingCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging')

' renders the element
AwsHealthImagingCard('AwsHealthImagingCard', 'Aws Health Imaging Card', 'an optional description')
@enduml
```

## AwsHealthImagingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsHealthImagingGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging')

' renders the element
AwsHealthImagingGroup('AwsHealthImagingGroup', 'Aws Health Imaging Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsHealthImagingGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AwsHealthImaging')

' renders the element
AwsHealthImagingGroup('AwsHealthImagingGroup', 'Aws Health Imaging Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

