# MaterialsBeenhere
```text
elements/materials/Maps/MaterialsBeenhere
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBeenhere icon](../../../icons/materials/Maps/MaterialsBeenhere.png) | ![MaterialsBeenhere element](MaterialsBeenhere.element.png) | ![MaterialsBeenhere card](MaterialsBeenhere.card.png) |
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

' loads the MaterialsBeenhere element
include('elements/materials/Maps/MaterialsBeenhere')
MaterialsBeenhere('element', 'Beenhere', 'an optional tech field')
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

' loads the MaterialsBeenhere element
include('elements/materials/Maps/MaterialsBeenhere')
MaterialsBeenhere('element', 'Beenhere', 'an optional tech field')
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

' loads the MaterialsBeenhere card
include('elements/materials/Maps/MaterialsBeenhere')
MaterialsBeenhereCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBeenhere card
include('elements/materials/Maps/MaterialsBeenhere')
MaterialsBeenhereCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
