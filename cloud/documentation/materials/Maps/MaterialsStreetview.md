# MaterialsStreetview
```text
elements/materials/Maps/MaterialsStreetview
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsStreetview icon](../../../icons/materials/Maps/MaterialsStreetview.png) | ![MaterialsStreetview element](MaterialsStreetview.element.png) | ![MaterialsStreetview card](MaterialsStreetview.card.png) |
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

' loads the MaterialsStreetview element
include('elements/materials/Maps/MaterialsStreetview')
MaterialsStreetview('element', 'Streetview', 'an optional tech field')
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

' loads the MaterialsStreetview element
include('elements/materials/Maps/MaterialsStreetview')
MaterialsStreetview('element', 'Streetview', 'an optional tech field')
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

' loads the MaterialsStreetview card
include('elements/materials/Maps/MaterialsStreetview')
MaterialsStreetviewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsStreetview card
include('elements/materials/Maps/MaterialsStreetview')
MaterialsStreetviewCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
