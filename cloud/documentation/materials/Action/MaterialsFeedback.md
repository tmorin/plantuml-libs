# MaterialsFeedback
```text
elements/materials/Action/MaterialsFeedback
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFeedback icon](../../../icons/materials/Action/MaterialsFeedback.png) | ![MaterialsFeedback element](MaterialsFeedback.element.png) | ![MaterialsFeedback card](MaterialsFeedback.card.png) |
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

' loads the MaterialsFeedback element
include('elements/materials/Action/MaterialsFeedback')
MaterialsFeedback('element', 'Feedback', 'an optional tech field')
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

' loads the MaterialsFeedback element
include('elements/materials/Action/MaterialsFeedback')
MaterialsFeedback('element', 'Feedback', 'an optional tech field')
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

' loads the MaterialsFeedback card
include('elements/materials/Action/MaterialsFeedback')
MaterialsFeedbackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFeedback card
include('elements/materials/Action/MaterialsFeedback')
MaterialsFeedbackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
