# SpeechToText


```text
gcp/Item/CloudAi/SpeechToText
```

```text
include('gcp/Item/CloudAi/SpeechToText')
```



| Illustration | SpeechToText | SpeechToTextCard | SpeechToTextGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/CloudAi/SpeechToText.png) | ![illustration for SpeechToText](../../../gcp/Item/CloudAi/SpeechToText.Local.png) | ![illustration for SpeechToTextCard](../../../gcp/Item/CloudAi/SpeechToTextCard.Local.png) | ![illustration for SpeechToTextGroup](../../../gcp/Item/CloudAi/SpeechToTextGroup.Local.png) |




## SpeechToText

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element SpeechToText
include('gcp/Item/CloudAi/SpeechToText')

' renders the element
SpeechToText('SpeechToText', 'Speech To Text', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element SpeechToText
include('gcp/Item/CloudAi/SpeechToText')

' renders the element
SpeechToText('SpeechToText', 'Speech To Text', 'an optional tech label')
@enduml
```

## SpeechToTextCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element SpeechToTextCard
include('gcp/Item/CloudAi/SpeechToText')

' renders the element
SpeechToTextCard('SpeechToTextCard', 'Speech To Text Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element SpeechToTextCard
include('gcp/Item/CloudAi/SpeechToText')

' renders the element
SpeechToTextCard('SpeechToTextCard', 'Speech To Text Card', 'an optional description')
@enduml
```

## SpeechToTextGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element SpeechToTextGroup
include('gcp/Item/CloudAi/SpeechToText')

' renders the element
SpeechToTextGroup('SpeechToTextGroup', 'Speech To Text Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element SpeechToTextGroup
include('gcp/Item/CloudAi/SpeechToText')

' renders the element
SpeechToTextGroup('SpeechToTextGroup', 'Speech To Text Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```
