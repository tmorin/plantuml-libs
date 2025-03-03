# AmazonSageMakerStudioLab


```text
aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab
```

```text
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab')
```



| Illustration | AmazonSageMakerStudioLab | AmazonSageMakerStudioLabCard | AmazonSageMakerStudioLabGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab.png) | ![illustration for AmazonSageMakerStudioLab](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab.Local.png) | ![illustration for AmazonSageMakerStudioLabCard](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLabCard.Local.png) | ![illustration for AmazonSageMakerStudioLabGroup](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLabGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonSageMakerStudioLabXs>`
- `<$AmazonSageMakerStudioLabSm>`
- `<$AmazonSageMakerStudioLabMd>`
- `<$AmazonSageMakerStudioLabLg>`





## AmazonSageMakerStudioLab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonSageMakerStudioLab
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab')

' renders the element
AmazonSageMakerStudioLab('AmazonSageMakerStudioLab', 'Amazon Sage Maker Studio Lab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonSageMakerStudioLab
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab')

' renders the element
AmazonSageMakerStudioLab('AmazonSageMakerStudioLab', 'Amazon Sage Maker Studio Lab', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonSageMakerStudioLabCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonSageMakerStudioLabCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab')

' renders the element
AmazonSageMakerStudioLabCard('AmazonSageMakerStudioLabCard', 'Amazon Sage Maker Studio Lab Card', 'an optional description')
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

' loads the Item which embeds the element AmazonSageMakerStudioLabCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab')

' renders the element
AmazonSageMakerStudioLabCard('AmazonSageMakerStudioLabCard', 'Amazon Sage Maker Studio Lab Card', 'an optional description')
@enduml
```

## AmazonSageMakerStudioLabGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonSageMakerStudioLabGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab')

' renders the element
AmazonSageMakerStudioLabGroup('AmazonSageMakerStudioLabGroup', 'Amazon Sage Maker Studio Lab Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonSageMakerStudioLabGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonSageMakerStudioLab')

' renders the element
AmazonSageMakerStudioLabGroup('AmazonSageMakerStudioLabGroup', 'Amazon Sage Maker Studio Lab Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

