# MaterialsAssistant
```text
elements/materials/Image/MaterialsAssistant
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAssistant icon](../../../icons/materials/Image/MaterialsAssistant.png) | ![MaterialsAssistant element](MaterialsAssistant.element.png) | ![MaterialsAssistant card](MaterialsAssistant.card.png) |
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

' loads the MaterialsAssistant element
include('elements/materials/Image/MaterialsAssistant')
MaterialsAssistant('element', 'Assistant', 'an optional tech field')
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

' loads the MaterialsAssistant element
include('elements/materials/Image/MaterialsAssistant')
MaterialsAssistant('element', 'Assistant', 'an optional tech field')
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

' loads the MaterialsAssistant card
include('elements/materials/Image/MaterialsAssistant')
MaterialsAssistantCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAssistant card
include('elements/materials/Image/MaterialsAssistant')
MaterialsAssistantCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
