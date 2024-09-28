# AmazonRekognition


```text
aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition
```

```text
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition')
```



| Illustration | AmazonRekognition | AmazonRekognitionCard | AmazonRekognitionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition.png) | ![illustration for AmazonRekognition](../../../aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition.Local.png) | ![illustration for AmazonRekognitionCard](../../../aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognitionCard.Local.png) | ![illustration for AmazonRekognitionGroup](../../../aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognitionGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonRekognitionXs>`
- `<$AmazonRekognitionSm>`
- `<$AmazonRekognitionMd>`
- `<$AmazonRekognitionLg>`





## AmazonRekognition

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRekognition
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition')

' renders the element
AmazonRekognition('AmazonRekognition', 'Amazon Rekognition', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonRekognition
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition')

' renders the element
AmazonRekognition('AmazonRekognition', 'Amazon Rekognition', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonRekognitionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRekognitionCard
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition')

' renders the element
AmazonRekognitionCard('AmazonRekognitionCard', 'Amazon Rekognition Card', 'an optional description')
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

' loads the Item which embeds the element AmazonRekognitionCard
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition')

' renders the element
AmazonRekognitionCard('AmazonRekognitionCard', 'Amazon Rekognition Card', 'an optional description')
@enduml
```

## AmazonRekognitionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRekognitionGroup
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition')

' renders the element
AmazonRekognitionGroup('AmazonRekognitionGroup', 'Amazon Rekognition Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonRekognitionGroup
include('aws-q2-2024/Architecture/ArtificialIntelligence/AmazonRekognition')

' renders the element
AmazonRekognitionGroup('AmazonRekognitionGroup', 'Amazon Rekognition Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

