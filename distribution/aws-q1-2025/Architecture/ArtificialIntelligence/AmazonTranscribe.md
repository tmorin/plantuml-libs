# AmazonTranscribe


```text
aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe
```

```text
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe')
```



| Illustration | AmazonTranscribe | AmazonTranscribeCard | AmazonTranscribeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe.png) | ![illustration for AmazonTranscribe](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe.Local.png) | ![illustration for AmazonTranscribeCard](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribeCard.Local.png) | ![illustration for AmazonTranscribeGroup](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonTranscribeXs>`
- `<$AmazonTranscribeSm>`
- `<$AmazonTranscribeMd>`
- `<$AmazonTranscribeLg>`





## AmazonTranscribe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonTranscribe
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe')

' renders the element
AmazonTranscribe('AmazonTranscribe', 'Amazon Transcribe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonTranscribe
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe')

' renders the element
AmazonTranscribe('AmazonTranscribe', 'Amazon Transcribe', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonTranscribeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonTranscribeCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe')

' renders the element
AmazonTranscribeCard('AmazonTranscribeCard', 'Amazon Transcribe Card', 'an optional description')
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

' loads the Item which embeds the element AmazonTranscribeCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe')

' renders the element
AmazonTranscribeCard('AmazonTranscribeCard', 'Amazon Transcribe Card', 'an optional description')
@enduml
```

## AmazonTranscribeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonTranscribeGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe')

' renders the element
AmazonTranscribeGroup('AmazonTranscribeGroup', 'Amazon Transcribe Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonTranscribeGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonTranscribe')

' renders the element
AmazonTranscribeGroup('AmazonTranscribeGroup', 'Amazon Transcribe Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

