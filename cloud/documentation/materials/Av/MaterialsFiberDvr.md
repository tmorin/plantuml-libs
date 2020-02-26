# MaterialsFiberDvr
```text
elements/materials/Av/MaterialsFiberDvr
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFiberDvr icon](../../../icons/materials/Av/MaterialsFiberDvr.png) | ![MaterialsFiberDvr element](MaterialsFiberDvr.element.png) | ![MaterialsFiberDvr card](MaterialsFiberDvr.card.png) |
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

' loads the MaterialsFiberDvr element
include('elements/materials/Av/MaterialsFiberDvr')
MaterialsFiberDvr('element', 'Fiber Dvr', 'an optional tech field')
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

' loads the MaterialsFiberDvr element
include('elements/materials/Av/MaterialsFiberDvr')
MaterialsFiberDvr('element', 'Fiber Dvr', 'an optional tech field')
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

' loads the MaterialsFiberDvr card
include('elements/materials/Av/MaterialsFiberDvr')
MaterialsFiberDvrCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFiberDvr card
include('elements/materials/Av/MaterialsFiberDvr')
MaterialsFiberDvrCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
