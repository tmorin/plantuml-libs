# MaterialsVoiceChat
```text
elements/materials/Notification/MaterialsVoiceChat
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVoiceChat icon](../../../icons/materials/Notification/MaterialsVoiceChat.png) | ![MaterialsVoiceChat element](MaterialsVoiceChat.element.png) | ![MaterialsVoiceChat card](MaterialsVoiceChat.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsVoiceChat element
include('elements/materials/Notification/MaterialsVoiceChat')
MaterialsVoiceChat('element', 'Voice Chat', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsVoiceChat element
include('elements/materials/Notification/MaterialsVoiceChat')
MaterialsVoiceChat('element', 'Voice Chat', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsVoiceChat card
include('elements/materials/Notification/MaterialsVoiceChat')
MaterialsVoiceChatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsVoiceChat card
include('elements/materials/Notification/MaterialsVoiceChat')
MaterialsVoiceChatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
