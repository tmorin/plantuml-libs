# MaterialsPowerInput
```text
elements/materials/Hardware/MaterialsPowerInput
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPowerInput icon](../../../icons/materials/Hardware/MaterialsPowerInput.png) | ![MaterialsPowerInput element](MaterialsPowerInput.element.png) | ![MaterialsPowerInput card](MaterialsPowerInput.card.png) |
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

' loads the MaterialsPowerInput element
include('elements/materials/Hardware/MaterialsPowerInput')
MaterialsPowerInput('element', 'Power Input', 'an optional tech field')
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

' loads the MaterialsPowerInput element
include('elements/materials/Hardware/MaterialsPowerInput')
MaterialsPowerInput('element', 'Power Input', 'an optional tech field')
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

' loads the MaterialsPowerInput card
include('elements/materials/Hardware/MaterialsPowerInput')
MaterialsPowerInputCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPowerInput card
include('elements/materials/Hardware/MaterialsPowerInput')
MaterialsPowerInputCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
