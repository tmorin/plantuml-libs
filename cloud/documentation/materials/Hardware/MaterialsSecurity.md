# MaterialsSecurity
```text
elements/materials/Hardware/MaterialsSecurity
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSecurity icon](../../../icons/materials/Hardware/MaterialsSecurity.png) | ![MaterialsSecurity element](MaterialsSecurity.element.png) | ![MaterialsSecurity card](MaterialsSecurity.card.png) |
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

' loads the MaterialsSecurity element
include('elements/materials/Hardware/MaterialsSecurity')
MaterialsSecurity('element', 'Security', 'an optional tech field')
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

' loads the MaterialsSecurity element
include('elements/materials/Hardware/MaterialsSecurity')
MaterialsSecurity('element', 'Security', 'an optional tech field')
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

' loads the MaterialsSecurity card
include('elements/materials/Hardware/MaterialsSecurity')
MaterialsSecurityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSecurity card
include('elements/materials/Hardware/MaterialsSecurity')
MaterialsSecurityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
