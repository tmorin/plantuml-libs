# MaterialsFilterNone
```text
elements/materials/Image/MaterialsFilterNone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilterNone icon](../../../icons/materials/Image/MaterialsFilterNone.png) | ![MaterialsFilterNone element](MaterialsFilterNone.element.png) | ![MaterialsFilterNone card](MaterialsFilterNone.card.png) |
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

' loads the MaterialsFilterNone element
include('elements/materials/Image/MaterialsFilterNone')
MaterialsFilterNone('element', 'Filter None', 'an optional tech field')
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

' loads the MaterialsFilterNone element
include('elements/materials/Image/MaterialsFilterNone')
MaterialsFilterNone('element', 'Filter None', 'an optional tech field')
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

' loads the MaterialsFilterNone card
include('elements/materials/Image/MaterialsFilterNone')
MaterialsFilterNoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilterNone card
include('elements/materials/Image/MaterialsFilterNone')
MaterialsFilterNoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
