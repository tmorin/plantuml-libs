# MaterialsFilter7
```text
elements/materials/Image/MaterialsFilter7
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilter7 icon](../../../icons/materials/Image/MaterialsFilter7.png) | ![MaterialsFilter7 element](MaterialsFilter7.element.png) | ![MaterialsFilter7 card](MaterialsFilter7.card.png) |
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

' loads the MaterialsFilter7 element
include('elements/materials/Image/MaterialsFilter7')
MaterialsFilter7('element', 'Filter7', 'an optional tech field')
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

' loads the MaterialsFilter7 element
include('elements/materials/Image/MaterialsFilter7')
MaterialsFilter7('element', 'Filter7', 'an optional tech field')
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

' loads the MaterialsFilter7 card
include('elements/materials/Image/MaterialsFilter7')
MaterialsFilter7Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilter7 card
include('elements/materials/Image/MaterialsFilter7')
MaterialsFilter7Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
