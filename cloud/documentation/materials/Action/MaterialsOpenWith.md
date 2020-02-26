# MaterialsOpenWith
```text
elements/materials/Action/MaterialsOpenWith
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsOpenWith icon](../../../icons/materials/Action/MaterialsOpenWith.png) | ![MaterialsOpenWith element](MaterialsOpenWith.element.png) | ![MaterialsOpenWith card](MaterialsOpenWith.card.png) |
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

' loads the MaterialsOpenWith element
include('elements/materials/Action/MaterialsOpenWith')
MaterialsOpenWith('element', 'Open With', 'an optional tech field')
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

' loads the MaterialsOpenWith element
include('elements/materials/Action/MaterialsOpenWith')
MaterialsOpenWith('element', 'Open With', 'an optional tech field')
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

' loads the MaterialsOpenWith card
include('elements/materials/Action/MaterialsOpenWith')
MaterialsOpenWithCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsOpenWith card
include('elements/materials/Action/MaterialsOpenWith')
MaterialsOpenWithCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
