# MaterialsTouchApp
```text
elements/materials/Action/MaterialsTouchApp
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTouchApp icon](../../../icons/materials/Action/MaterialsTouchApp.png) | ![MaterialsTouchApp element](MaterialsTouchApp.element.png) | ![MaterialsTouchApp card](MaterialsTouchApp.card.png) |
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

' loads the MaterialsTouchApp element
include('elements/materials/Action/MaterialsTouchApp')
MaterialsTouchApp('element', 'Touch App', 'an optional tech field')
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

' loads the MaterialsTouchApp element
include('elements/materials/Action/MaterialsTouchApp')
MaterialsTouchApp('element', 'Touch App', 'an optional tech field')
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

' loads the MaterialsTouchApp card
include('elements/materials/Action/MaterialsTouchApp')
MaterialsTouchAppCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTouchApp card
include('elements/materials/Action/MaterialsTouchApp')
MaterialsTouchAppCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
