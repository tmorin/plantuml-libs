# TextToSpeech


```text
gcp/Item/CloudAi/TextToSpeech
```

```text
include('gcp/Item/CloudAi/TextToSpeech')
```



| Illustration | TextToSpeech | TextToSpeechCard | TextToSpeechGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/CloudAi/TextToSpeech.png) | ![illustration for TextToSpeech](../../../gcp/Item/CloudAi/TextToSpeech.Local.png) | ![illustration for TextToSpeechCard](../../../gcp/Item/CloudAi/TextToSpeechCard.Local.png) | ![illustration for TextToSpeechGroup](../../../gcp/Item/CloudAi/TextToSpeechGroup.Local.png) |




## TextToSpeech

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element TextToSpeech
include('gcp/Item/CloudAi/TextToSpeech')

' renders the element
TextToSpeech('TextToSpeech', 'Text To Speech', 'an optional tech label')
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

' loads the Item which embeds the element TextToSpeech
include('gcp/Item/CloudAi/TextToSpeech')

' renders the element
TextToSpeech('TextToSpeech', 'Text To Speech', 'an optional tech label')
@enduml
```

## TextToSpeechCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element TextToSpeechCard
include('gcp/Item/CloudAi/TextToSpeech')

' renders the element
TextToSpeechCard('TextToSpeechCard', 'Text To Speech Card', 'an optional description')
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

' loads the Item which embeds the element TextToSpeechCard
include('gcp/Item/CloudAi/TextToSpeech')

' renders the element
TextToSpeechCard('TextToSpeechCard', 'Text To Speech Card', 'an optional description')
@enduml
```

## TextToSpeechGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element TextToSpeechGroup
include('gcp/Item/CloudAi/TextToSpeech')

' renders the element
TextToSpeechGroup('TextToSpeechGroup', 'Text To Speech Group', 'an optional tech label') {
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

' loads the Item which embeds the element TextToSpeechGroup
include('gcp/Item/CloudAi/TextToSpeech')

' renders the element
TextToSpeechGroup('TextToSpeechGroup', 'Text To Speech Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

