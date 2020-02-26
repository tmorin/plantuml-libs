# MaterialsVideoLabel
```text
elements/materials/Av/MaterialsVideoLabel
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVideoLabel icon](../../../icons/materials/Av/MaterialsVideoLabel.png) | ![MaterialsVideoLabel element](MaterialsVideoLabel.element.png) | ![MaterialsVideoLabel card](MaterialsVideoLabel.card.png) |
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

' loads the MaterialsVideoLabel element
include('elements/materials/Av/MaterialsVideoLabel')
MaterialsVideoLabel('element', 'Video Label', 'an optional tech field')
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

' loads the MaterialsVideoLabel element
include('elements/materials/Av/MaterialsVideoLabel')
MaterialsVideoLabel('element', 'Video Label', 'an optional tech field')
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

' loads the MaterialsVideoLabel card
include('elements/materials/Av/MaterialsVideoLabel')
MaterialsVideoLabelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVideoLabel card
include('elements/materials/Av/MaterialsVideoLabel')
MaterialsVideoLabelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
