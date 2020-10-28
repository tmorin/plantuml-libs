# MaterialsWatch
```text
elements/materials/Hardware/MaterialsWatch
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWatch icon](../../../icons/materials/Hardware/MaterialsWatch.png) | ![MaterialsWatch element](MaterialsWatch.element.png) | ![MaterialsWatch card](MaterialsWatch.card.png) |
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

' loads the MaterialsWatch element
include('elements/materials/Hardware/MaterialsWatch')
MaterialsWatch('element', 'Watch', 'an optional tech field')
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

' loads the MaterialsWatch element
include('elements/materials/Hardware/MaterialsWatch')
MaterialsWatch('element', 'Watch', 'an optional tech field')
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

' loads the MaterialsWatch card
include('elements/materials/Hardware/MaterialsWatch')
MaterialsWatchCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWatch card
include('elements/materials/Hardware/MaterialsWatch')
MaterialsWatchCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
