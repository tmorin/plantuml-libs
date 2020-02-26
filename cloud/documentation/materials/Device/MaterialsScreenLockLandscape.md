# MaterialsScreenLockLandscape
```text
elements/materials/Device/MaterialsScreenLockLandscape
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsScreenLockLandscape icon](../../../icons/materials/Device/MaterialsScreenLockLandscape.png) | ![MaterialsScreenLockLandscape element](MaterialsScreenLockLandscape.element.png) | ![MaterialsScreenLockLandscape card](MaterialsScreenLockLandscape.card.png) |
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

' loads the MaterialsScreenLockLandscape element
include('elements/materials/Device/MaterialsScreenLockLandscape')
MaterialsScreenLockLandscape('element', 'Screen Lock Landscape', 'an optional tech field')
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

' loads the MaterialsScreenLockLandscape element
include('elements/materials/Device/MaterialsScreenLockLandscape')
MaterialsScreenLockLandscape('element', 'Screen Lock Landscape', 'an optional tech field')
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

' loads the MaterialsScreenLockLandscape card
include('elements/materials/Device/MaterialsScreenLockLandscape')
MaterialsScreenLockLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsScreenLockLandscape card
include('elements/materials/Device/MaterialsScreenLockLandscape')
MaterialsScreenLockLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
