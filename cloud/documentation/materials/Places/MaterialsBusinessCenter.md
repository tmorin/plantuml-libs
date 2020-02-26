# MaterialsBusinessCenter
```text
elements/materials/Places/MaterialsBusinessCenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBusinessCenter icon](../../../icons/materials/Places/MaterialsBusinessCenter.png) | ![MaterialsBusinessCenter element](MaterialsBusinessCenter.element.png) | ![MaterialsBusinessCenter card](MaterialsBusinessCenter.card.png) |
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

' loads the MaterialsBusinessCenter element
include('elements/materials/Places/MaterialsBusinessCenter')
MaterialsBusinessCenter('element', 'Business Center', 'an optional tech field')
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

' loads the MaterialsBusinessCenter element
include('elements/materials/Places/MaterialsBusinessCenter')
MaterialsBusinessCenter('element', 'Business Center', 'an optional tech field')
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

' loads the MaterialsBusinessCenter card
include('elements/materials/Places/MaterialsBusinessCenter')
MaterialsBusinessCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBusinessCenter card
include('elements/materials/Places/MaterialsBusinessCenter')
MaterialsBusinessCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
