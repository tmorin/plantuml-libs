# MaterialsPhonePaused
```text
elements/materials/Notification/MaterialsPhonePaused
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhonePaused icon](../../../icons/materials/Notification/MaterialsPhonePaused.png) | ![MaterialsPhonePaused element](MaterialsPhonePaused.element.png) | ![MaterialsPhonePaused card](MaterialsPhonePaused.card.png) |
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

' loads the MaterialsPhonePaused element
include('elements/materials/Notification/MaterialsPhonePaused')
MaterialsPhonePaused('element', 'Phone Paused', 'an optional tech field')
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

' loads the MaterialsPhonePaused element
include('elements/materials/Notification/MaterialsPhonePaused')
MaterialsPhonePaused('element', 'Phone Paused', 'an optional tech field')
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

' loads the MaterialsPhonePaused card
include('elements/materials/Notification/MaterialsPhonePaused')
MaterialsPhonePausedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhonePaused card
include('elements/materials/Notification/MaterialsPhonePaused')
MaterialsPhonePausedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
