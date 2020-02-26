# MaterialsPriorityHigh
```text
elements/materials/Notification/MaterialsPriorityHigh
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPriorityHigh icon](../../../icons/materials/Notification/MaterialsPriorityHigh.png) | ![MaterialsPriorityHigh element](MaterialsPriorityHigh.element.png) | ![MaterialsPriorityHigh card](MaterialsPriorityHigh.card.png) |
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

' loads the MaterialsPriorityHigh element
include('elements/materials/Notification/MaterialsPriorityHigh')
MaterialsPriorityHigh('element', 'Priority High', 'an optional tech field')
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

' loads the MaterialsPriorityHigh element
include('elements/materials/Notification/MaterialsPriorityHigh')
MaterialsPriorityHigh('element', 'Priority High', 'an optional tech field')
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

' loads the MaterialsPriorityHigh card
include('elements/materials/Notification/MaterialsPriorityHigh')
MaterialsPriorityHighCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPriorityHigh card
include('elements/materials/Notification/MaterialsPriorityHigh')
MaterialsPriorityHighCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
