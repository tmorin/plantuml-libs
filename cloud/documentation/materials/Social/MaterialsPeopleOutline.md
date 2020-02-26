# MaterialsPeopleOutline
```text
elements/materials/Social/MaterialsPeopleOutline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPeopleOutline icon](../../../icons/materials/Social/MaterialsPeopleOutline.png) | ![MaterialsPeopleOutline element](MaterialsPeopleOutline.element.png) | ![MaterialsPeopleOutline card](MaterialsPeopleOutline.card.png) |
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

' loads the MaterialsPeopleOutline element
include('elements/materials/Social/MaterialsPeopleOutline')
MaterialsPeopleOutline('element', 'People Outline', 'an optional tech field')
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

' loads the MaterialsPeopleOutline element
include('elements/materials/Social/MaterialsPeopleOutline')
MaterialsPeopleOutline('element', 'People Outline', 'an optional tech field')
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

' loads the MaterialsPeopleOutline card
include('elements/materials/Social/MaterialsPeopleOutline')
MaterialsPeopleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPeopleOutline card
include('elements/materials/Social/MaterialsPeopleOutline')
MaterialsPeopleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
