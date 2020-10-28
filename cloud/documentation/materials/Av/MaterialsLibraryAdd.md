# MaterialsLibraryAdd
```text
elements/materials/Av/MaterialsLibraryAdd
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLibraryAdd icon](../../../icons/materials/Av/MaterialsLibraryAdd.png) | ![MaterialsLibraryAdd element](MaterialsLibraryAdd.element.png) | ![MaterialsLibraryAdd card](MaterialsLibraryAdd.card.png) |
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

' loads the MaterialsLibraryAdd element
include('elements/materials/Av/MaterialsLibraryAdd')
MaterialsLibraryAdd('element', 'Library Add', 'an optional tech field')
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

' loads the MaterialsLibraryAdd element
include('elements/materials/Av/MaterialsLibraryAdd')
MaterialsLibraryAdd('element', 'Library Add', 'an optional tech field')
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

' loads the MaterialsLibraryAdd card
include('elements/materials/Av/MaterialsLibraryAdd')
MaterialsLibraryAddCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLibraryAdd card
include('elements/materials/Av/MaterialsLibraryAdd')
MaterialsLibraryAddCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
