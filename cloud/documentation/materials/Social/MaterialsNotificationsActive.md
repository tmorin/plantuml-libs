# MaterialsNotificationsActive
```text
elements/materials/Social/MaterialsNotificationsActive
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNotificationsActive icon](../../../icons/materials/Social/MaterialsNotificationsActive.png) | ![MaterialsNotificationsActive element](MaterialsNotificationsActive.element.png) | ![MaterialsNotificationsActive card](MaterialsNotificationsActive.card.png) |
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

' loads the MaterialsNotificationsActive element
include('elements/materials/Social/MaterialsNotificationsActive')
MaterialsNotificationsActive('element', 'Notifications Active', 'an optional tech field')
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

' loads the MaterialsNotificationsActive element
include('elements/materials/Social/MaterialsNotificationsActive')
MaterialsNotificationsActive('element', 'Notifications Active', 'an optional tech field')
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

' loads the MaterialsNotificationsActive card
include('elements/materials/Social/MaterialsNotificationsActive')
MaterialsNotificationsActiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNotificationsActive card
include('elements/materials/Social/MaterialsNotificationsActive')
MaterialsNotificationsActiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
