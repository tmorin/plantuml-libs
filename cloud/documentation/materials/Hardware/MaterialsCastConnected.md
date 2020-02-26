# MaterialsCastConnected
```text
elements/materials/Hardware/MaterialsCastConnected
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCastConnected icon](../../../icons/materials/Hardware/MaterialsCastConnected.png) | ![MaterialsCastConnected element](MaterialsCastConnected.element.png) | ![MaterialsCastConnected card](MaterialsCastConnected.card.png) |
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

' loads the MaterialsCastConnected element
include('elements/materials/Hardware/MaterialsCastConnected')
MaterialsCastConnected('element', 'Cast Connected', 'an optional tech field')
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

' loads the MaterialsCastConnected element
include('elements/materials/Hardware/MaterialsCastConnected')
MaterialsCastConnected('element', 'Cast Connected', 'an optional tech field')
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

' loads the MaterialsCastConnected card
include('elements/materials/Hardware/MaterialsCastConnected')
MaterialsCastConnectedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCastConnected card
include('elements/materials/Hardware/MaterialsCastConnected')
MaterialsCastConnectedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
