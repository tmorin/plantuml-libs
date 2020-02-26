# MaterialsSystemUpdate
```text
elements/materials/Notification/MaterialsSystemUpdate
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSystemUpdate icon](../../../icons/materials/Notification/MaterialsSystemUpdate.png) | ![MaterialsSystemUpdate element](MaterialsSystemUpdate.element.png) | ![MaterialsSystemUpdate card](MaterialsSystemUpdate.card.png) |
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

' loads the MaterialsSystemUpdate element
include('elements/materials/Notification/MaterialsSystemUpdate')
MaterialsSystemUpdate('element', 'System Update', 'an optional tech field')
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

' loads the MaterialsSystemUpdate element
include('elements/materials/Notification/MaterialsSystemUpdate')
MaterialsSystemUpdate('element', 'System Update', 'an optional tech field')
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

' loads the MaterialsSystemUpdate card
include('elements/materials/Notification/MaterialsSystemUpdate')
MaterialsSystemUpdateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSystemUpdate card
include('elements/materials/Notification/MaterialsSystemUpdate')
MaterialsSystemUpdateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
