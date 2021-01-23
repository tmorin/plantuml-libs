# Text To Speech

```text
gcp/Item/CloudAi/TextToSpeech
```

```text
include('gcp/Item/CloudAi/TextToSpeech')
```

|icon|card|element|group|
|---|---|---|---|
|![](TextToSpeech.png)|![](TextToSpeech.card.png)|![](TextToSpeech.element.png)|![](TextToSpeech.group.png)|



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
' loads the TextToSpeech element
include('gcp/Item/CloudAi/TextToSpeech')
TextToSpeechCard('text_to_speech', 'Text To Speech', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the TextToSpeech element
include('gcp/Item/CloudAi/TextToSpeech')
TextToSpeechCard('text_to_speech', 'Text To Speech', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the TextToSpeech element
include('gcp/Item/CloudAi/TextToSpeech')
TextToSpeech('text_to_speech', 'Text To Speech', 'an optional tech field')
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
' loads the TextToSpeech element
include('gcp/Item/CloudAi/TextToSpeech')
TextToSpeech('text_to_speech', 'Text To Speech', 'an optional tech field')
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
' loads the TextToSpeech element
include('gcp/Item/CloudAi/TextToSpeech')
TextToSpeechGroup('text_to_speech', 'Text To Speech', 'an optional tech field'){
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
' loads the TextToSpeech element
include('gcp/Item/CloudAi/TextToSpeech')
TextToSpeechGroup('text_to_speech', 'Text To Speech', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

