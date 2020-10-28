# MaterialsLineWeight
```text
elements/materials/Action/MaterialsLineWeight
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLineWeight icon](../../../icons/materials/Action/MaterialsLineWeight.png) | ![MaterialsLineWeight element](MaterialsLineWeight.element.png) | ![MaterialsLineWeight card](MaterialsLineWeight.card.png) |
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

' loads the MaterialsLineWeight element
include('elements/materials/Action/MaterialsLineWeight')
MaterialsLineWeight('element', 'Line Weight', 'an optional tech field')
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

' loads the MaterialsLineWeight element
include('elements/materials/Action/MaterialsLineWeight')
MaterialsLineWeight('element', 'Line Weight', 'an optional tech field')
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

' loads the MaterialsLineWeight card
include('elements/materials/Action/MaterialsLineWeight')
MaterialsLineWeightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLineWeight card
include('elements/materials/Action/MaterialsLineWeight')
MaterialsLineWeightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
