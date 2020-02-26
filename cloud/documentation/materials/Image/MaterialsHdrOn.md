# MaterialsHdrOn
```text
elements/materials/Image/MaterialsHdrOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHdrOn icon](../../../icons/materials/Image/MaterialsHdrOn.png) | ![MaterialsHdrOn element](MaterialsHdrOn.element.png) | ![MaterialsHdrOn card](MaterialsHdrOn.card.png) |
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

' loads the MaterialsHdrOn element
include('elements/materials/Image/MaterialsHdrOn')
MaterialsHdrOn('element', 'Hdr On', 'an optional tech field')
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

' loads the MaterialsHdrOn element
include('elements/materials/Image/MaterialsHdrOn')
MaterialsHdrOn('element', 'Hdr On', 'an optional tech field')
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

' loads the MaterialsHdrOn card
include('elements/materials/Image/MaterialsHdrOn')
MaterialsHdrOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHdrOn card
include('elements/materials/Image/MaterialsHdrOn')
MaterialsHdrOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
