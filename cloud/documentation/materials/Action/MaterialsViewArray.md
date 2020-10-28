# MaterialsViewArray
```text
elements/materials/Action/MaterialsViewArray
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsViewArray icon](../../../icons/materials/Action/MaterialsViewArray.png) | ![MaterialsViewArray element](MaterialsViewArray.element.png) | ![MaterialsViewArray card](MaterialsViewArray.card.png) |
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

' loads the MaterialsViewArray element
include('elements/materials/Action/MaterialsViewArray')
MaterialsViewArray('element', 'View Array', 'an optional tech field')
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

' loads the MaterialsViewArray element
include('elements/materials/Action/MaterialsViewArray')
MaterialsViewArray('element', 'View Array', 'an optional tech field')
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

' loads the MaterialsViewArray card
include('elements/materials/Action/MaterialsViewArray')
MaterialsViewArrayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsViewArray card
include('elements/materials/Action/MaterialsViewArray')
MaterialsViewArrayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
