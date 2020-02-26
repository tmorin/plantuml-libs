# MaterialsFindInPage
```text
elements/materials/Action/MaterialsFindInPage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFindInPage icon](../../../icons/materials/Action/MaterialsFindInPage.png) | ![MaterialsFindInPage element](MaterialsFindInPage.element.png) | ![MaterialsFindInPage card](MaterialsFindInPage.card.png) |
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

' loads the MaterialsFindInPage element
include('elements/materials/Action/MaterialsFindInPage')
MaterialsFindInPage('element', 'Find In Page', 'an optional tech field')
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

' loads the MaterialsFindInPage element
include('elements/materials/Action/MaterialsFindInPage')
MaterialsFindInPage('element', 'Find In Page', 'an optional tech field')
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

' loads the MaterialsFindInPage card
include('elements/materials/Action/MaterialsFindInPage')
MaterialsFindInPageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFindInPage card
include('elements/materials/Action/MaterialsFindInPage')
MaterialsFindInPageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
