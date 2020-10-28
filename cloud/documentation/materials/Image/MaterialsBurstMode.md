# MaterialsBurstMode
```text
elements/materials/Image/MaterialsBurstMode
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBurstMode icon](../../../icons/materials/Image/MaterialsBurstMode.png) | ![MaterialsBurstMode element](MaterialsBurstMode.element.png) | ![MaterialsBurstMode card](MaterialsBurstMode.card.png) |
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

' loads the MaterialsBurstMode element
include('elements/materials/Image/MaterialsBurstMode')
MaterialsBurstMode('element', 'Burst Mode', 'an optional tech field')
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

' loads the MaterialsBurstMode element
include('elements/materials/Image/MaterialsBurstMode')
MaterialsBurstMode('element', 'Burst Mode', 'an optional tech field')
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

' loads the MaterialsBurstMode card
include('elements/materials/Image/MaterialsBurstMode')
MaterialsBurstModeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBurstMode card
include('elements/materials/Image/MaterialsBurstMode')
MaterialsBurstModeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
