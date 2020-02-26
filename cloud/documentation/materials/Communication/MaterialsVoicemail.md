# MaterialsVoicemail
```text
elements/materials/Communication/MaterialsVoicemail
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVoicemail icon](../../../icons/materials/Communication/MaterialsVoicemail.png) | ![MaterialsVoicemail element](MaterialsVoicemail.element.png) | ![MaterialsVoicemail card](MaterialsVoicemail.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsVoicemail element
include('elements/materials/Communication/MaterialsVoicemail')
MaterialsVoicemail('element', 'Voicemail', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsVoicemail element
include('elements/materials/Communication/MaterialsVoicemail')
MaterialsVoicemail('element', 'Voicemail', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsVoicemail card
include('elements/materials/Communication/MaterialsVoicemail')
MaterialsVoicemailCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsVoicemail card
include('elements/materials/Communication/MaterialsVoicemail')
MaterialsVoicemailCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
