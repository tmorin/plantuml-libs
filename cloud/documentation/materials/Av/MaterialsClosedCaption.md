# MaterialsClosedCaption
```text
elements/materials/Av/MaterialsClosedCaption
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsClosedCaption icon](../../../icons/materials/Av/MaterialsClosedCaption.png) | ![MaterialsClosedCaption element](MaterialsClosedCaption.element.png) | ![MaterialsClosedCaption card](MaterialsClosedCaption.card.png) |
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

' loads the MaterialsClosedCaption element
include('elements/materials/Av/MaterialsClosedCaption')
MaterialsClosedCaption('element', 'Closed Caption', 'an optional tech field')
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

' loads the MaterialsClosedCaption element
include('elements/materials/Av/MaterialsClosedCaption')
MaterialsClosedCaption('element', 'Closed Caption', 'an optional tech field')
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

' loads the MaterialsClosedCaption card
include('elements/materials/Av/MaterialsClosedCaption')
MaterialsClosedCaptionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsClosedCaption card
include('elements/materials/Av/MaterialsClosedCaption')
MaterialsClosedCaptionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
