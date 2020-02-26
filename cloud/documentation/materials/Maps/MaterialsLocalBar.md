# MaterialsLocalBar
```text
elements/materials/Maps/MaterialsLocalBar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalBar icon](../../../icons/materials/Maps/MaterialsLocalBar.png) | ![MaterialsLocalBar element](MaterialsLocalBar.element.png) | ![MaterialsLocalBar card](MaterialsLocalBar.card.png) |
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

' loads the MaterialsLocalBar element
include('elements/materials/Maps/MaterialsLocalBar')
MaterialsLocalBar('element', 'Local Bar', 'an optional tech field')
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

' loads the MaterialsLocalBar element
include('elements/materials/Maps/MaterialsLocalBar')
MaterialsLocalBar('element', 'Local Bar', 'an optional tech field')
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

' loads the MaterialsLocalBar card
include('elements/materials/Maps/MaterialsLocalBar')
MaterialsLocalBarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalBar card
include('elements/materials/Maps/MaterialsLocalBar')
MaterialsLocalBarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
