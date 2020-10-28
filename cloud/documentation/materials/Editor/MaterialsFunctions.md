# MaterialsFunctions
```text
elements/materials/Editor/MaterialsFunctions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFunctions icon](../../../icons/materials/Editor/MaterialsFunctions.png) | ![MaterialsFunctions element](MaterialsFunctions.element.png) | ![MaterialsFunctions card](MaterialsFunctions.card.png) |
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

' loads the MaterialsFunctions element
include('elements/materials/Editor/MaterialsFunctions')
MaterialsFunctions('element', 'Functions', 'an optional tech field')
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

' loads the MaterialsFunctions element
include('elements/materials/Editor/MaterialsFunctions')
MaterialsFunctions('element', 'Functions', 'an optional tech field')
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

' loads the MaterialsFunctions card
include('elements/materials/Editor/MaterialsFunctions')
MaterialsFunctionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFunctions card
include('elements/materials/Editor/MaterialsFunctions')
MaterialsFunctionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
