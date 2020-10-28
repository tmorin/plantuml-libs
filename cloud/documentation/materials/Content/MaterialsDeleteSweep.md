# MaterialsDeleteSweep
```text
elements/materials/Content/MaterialsDeleteSweep
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDeleteSweep icon](../../../icons/materials/Content/MaterialsDeleteSweep.png) | ![MaterialsDeleteSweep element](MaterialsDeleteSweep.element.png) | ![MaterialsDeleteSweep card](MaterialsDeleteSweep.card.png) |
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

' loads the MaterialsDeleteSweep element
include('elements/materials/Content/MaterialsDeleteSweep')
MaterialsDeleteSweep('element', 'Delete Sweep', 'an optional tech field')
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

' loads the MaterialsDeleteSweep element
include('elements/materials/Content/MaterialsDeleteSweep')
MaterialsDeleteSweep('element', 'Delete Sweep', 'an optional tech field')
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

' loads the MaterialsDeleteSweep card
include('elements/materials/Content/MaterialsDeleteSweep')
MaterialsDeleteSweepCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDeleteSweep card
include('elements/materials/Content/MaterialsDeleteSweep')
MaterialsDeleteSweepCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
