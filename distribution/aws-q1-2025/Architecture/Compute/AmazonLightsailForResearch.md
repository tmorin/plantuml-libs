# AmazonLightsailForResearch


```text
aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch
```

```text
include('aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch')
```



| Illustration | AmazonLightsailForResearch | AmazonLightsailForResearchCard | AmazonLightsailForResearchGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch.png) | ![illustration for AmazonLightsailForResearch](../../../aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch.Local.png) | ![illustration for AmazonLightsailForResearchCard](../../../aws-q1-2025/Architecture/Compute/AmazonLightsailForResearchCard.Local.png) | ![illustration for AmazonLightsailForResearchGroup](../../../aws-q1-2025/Architecture/Compute/AmazonLightsailForResearchGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonLightsailForResearchXs>`
- `<$AmazonLightsailForResearchSm>`
- `<$AmazonLightsailForResearchMd>`
- `<$AmazonLightsailForResearchLg>`





## AmazonLightsailForResearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonLightsailForResearch
include('aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch')

' renders the element
AmazonLightsailForResearch('AmazonLightsailForResearch', 'Amazon Lightsail For Research', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonLightsailForResearch
include('aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch')

' renders the element
AmazonLightsailForResearch('AmazonLightsailForResearch', 'Amazon Lightsail For Research', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonLightsailForResearchCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonLightsailForResearchCard
include('aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch')

' renders the element
AmazonLightsailForResearchCard('AmazonLightsailForResearchCard', 'Amazon Lightsail For Research Card', 'an optional description')
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

' loads the Item which embeds the element AmazonLightsailForResearchCard
include('aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch')

' renders the element
AmazonLightsailForResearchCard('AmazonLightsailForResearchCard', 'Amazon Lightsail For Research Card', 'an optional description')
@enduml
```

## AmazonLightsailForResearchGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonLightsailForResearchGroup
include('aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch')

' renders the element
AmazonLightsailForResearchGroup('AmazonLightsailForResearchGroup', 'Amazon Lightsail For Research Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonLightsailForResearchGroup
include('aws-q1-2025/Architecture/Compute/AmazonLightsailForResearch')

' renders the element
AmazonLightsailForResearchGroup('AmazonLightsailForResearchGroup', 'Amazon Lightsail For Research Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

