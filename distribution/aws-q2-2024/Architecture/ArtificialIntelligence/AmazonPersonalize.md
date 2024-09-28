# AmazonPersonalize


```text
aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize
```

```text
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize')
```



| Illustration | AmazonPersonalize | AmazonPersonalizeCard | AmazonPersonalizeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize.png) | ![illustration for AmazonPersonalize](../../../aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize.Local.png) | ![illustration for AmazonPersonalizeCard](../../../aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalizeCard.Local.png) | ![illustration for AmazonPersonalizeGroup](../../../aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalizeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonPersonalizeXs>`
- `<$AmazonPersonalizeSm>`
- `<$AmazonPersonalizeMd>`
- `<$AmazonPersonalizeLg>`





## AmazonPersonalize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonPersonalize
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize')

' renders the element
AmazonPersonalize('AmazonPersonalize', 'Amazon Personalize', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonPersonalize
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize')

' renders the element
AmazonPersonalize('AmazonPersonalize', 'Amazon Personalize', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonPersonalizeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonPersonalizeCard
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize')

' renders the element
AmazonPersonalizeCard('AmazonPersonalizeCard', 'Amazon Personalize Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonPersonalizeCard
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize')

' renders the element
AmazonPersonalizeCard('AmazonPersonalizeCard', 'Amazon Personalize Card', 'an optional description')
@enduml
```

## AmazonPersonalizeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonPersonalizeGroup
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize')

' renders the element
AmazonPersonalizeGroup('AmazonPersonalizeGroup', 'Amazon Personalize Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonPersonalizeGroup
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonPersonalize')

' renders the element
AmazonPersonalizeGroup('AmazonPersonalizeGroup', 'Amazon Personalize Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

