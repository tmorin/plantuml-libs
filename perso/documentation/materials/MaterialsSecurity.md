# MaterialsSecurity
```text
elements/materials/MaterialsSecurity
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSecurity icon](../../icons/materials/MaterialsSecurity.png) | ![MaterialsSecurity element](MaterialsSecurity.element.png) | ![MaterialsSecurity card](MaterialsSecurity.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsSecurity element
include('elements/materials/MaterialsSecurity')
MaterialsSecurity('element', 'Security', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the MaterialsSecurity element
include('elements/materials/MaterialsSecurity')
MaterialsSecurity('element', 'Security', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the MaterialsSecurity card
include('elements/materials/MaterialsSecurity')
MaterialsSecurityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the MaterialsSecurity card
include('elements/materials/MaterialsSecurity')
MaterialsSecurityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
