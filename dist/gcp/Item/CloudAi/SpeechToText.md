# Speech To Text

```text
gcp/Item/CloudAi/SpeechToText
```

```text
include('gcp/Item/CloudAi/SpeechToText')
```

|icon|card|element|group|
|---|---|---|---|
|![](SpeechToText.png)|![](SpeechToText.card.png)|![](SpeechToText.element.png)|![](SpeechToText.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the SpeechToText element
include('gcp/Item/CloudAi/SpeechToText')
SpeechToTextCard('speech_to_text', 'Speech To Text', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the SpeechToText element
include('gcp/Item/CloudAi/SpeechToText')
SpeechToTextCard('speech_to_text', 'Speech To Text', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the SpeechToText element
include('gcp/Item/CloudAi/SpeechToText')
SpeechToText('speech_to_text', 'Speech To Text', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the SpeechToText element
include('gcp/Item/CloudAi/SpeechToText')
SpeechToText('speech_to_text', 'Speech To Text', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the SpeechToText element
include('gcp/Item/CloudAi/SpeechToText')
SpeechToTextGroup('speech_to_text', 'Speech To Text', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the SpeechToText element
include('gcp/Item/CloudAi/SpeechToText')
SpeechToTextGroup('speech_to_text', 'Speech To Text', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

