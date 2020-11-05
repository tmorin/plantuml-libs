# MaterialsPresentToAll
```text
elements/materials/Communication/MaterialsPresentToAll
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPresentToAll icon](../../../icons/materials/Communication/MaterialsPresentToAll.png) | ![MaterialsPresentToAll element](MaterialsPresentToAll.element.png) | ![MaterialsPresentToAll card](MaterialsPresentToAll.card.png) |
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

' loads the MaterialsPresentToAll element
include('elements/materials/Communication/MaterialsPresentToAll')
MaterialsPresentToAll('element', 'Present To All', 'an optional tech field')
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

' loads the MaterialsPresentToAll element
include('elements/materials/Communication/MaterialsPresentToAll')
MaterialsPresentToAll('element', 'Present To All', 'an optional tech field')
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

' loads the MaterialsPresentToAll card
include('elements/materials/Communication/MaterialsPresentToAll')
MaterialsPresentToAllCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPresentToAll card
include('elements/materials/Communication/MaterialsPresentToAll')
MaterialsPresentToAllCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```