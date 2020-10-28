# MaterialsPlusOne
```text
elements/materials/Social/MaterialsPlusOne
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPlusOne icon](../../../icons/materials/Social/MaterialsPlusOne.png) | ![MaterialsPlusOne element](MaterialsPlusOne.element.png) | ![MaterialsPlusOne card](MaterialsPlusOne.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsPlusOne element
include('elements/materials/Social/MaterialsPlusOne')
MaterialsPlusOne('element', 'Plus One', 'an optional tech field')
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

' loads the MaterialsPlusOne element
include('elements/materials/Social/MaterialsPlusOne')
MaterialsPlusOne('element', 'Plus One', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsPlusOne card
include('elements/materials/Social/MaterialsPlusOne')
MaterialsPlusOneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPlusOne card
include('elements/materials/Social/MaterialsPlusOne')
MaterialsPlusOneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
