# MaterialsSpeakerPhone
```text
elements/materials/Communication/MaterialsSpeakerPhone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSpeakerPhone icon](../../../icons/materials/Communication/MaterialsSpeakerPhone.png) | ![MaterialsSpeakerPhone element](MaterialsSpeakerPhone.element.png) | ![MaterialsSpeakerPhone card](MaterialsSpeakerPhone.card.png) |
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

' loads the MaterialsSpeakerPhone element
include('elements/materials/Communication/MaterialsSpeakerPhone')
MaterialsSpeakerPhone('element', 'Speaker Phone', 'an optional tech field')
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

' loads the MaterialsSpeakerPhone element
include('elements/materials/Communication/MaterialsSpeakerPhone')
MaterialsSpeakerPhone('element', 'Speaker Phone', 'an optional tech field')
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

' loads the MaterialsSpeakerPhone card
include('elements/materials/Communication/MaterialsSpeakerPhone')
MaterialsSpeakerPhoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSpeakerPhone card
include('elements/materials/Communication/MaterialsSpeakerPhone')
MaterialsSpeakerPhoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
