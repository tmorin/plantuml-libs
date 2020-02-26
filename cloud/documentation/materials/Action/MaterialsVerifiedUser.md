# MaterialsVerifiedUser
```text
elements/materials/Action/MaterialsVerifiedUser
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVerifiedUser icon](../../../icons/materials/Action/MaterialsVerifiedUser.png) | ![MaterialsVerifiedUser element](MaterialsVerifiedUser.element.png) | ![MaterialsVerifiedUser card](MaterialsVerifiedUser.card.png) |
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

' loads the MaterialsVerifiedUser element
include('elements/materials/Action/MaterialsVerifiedUser')
MaterialsVerifiedUser('element', 'Verified User', 'an optional tech field')
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

' loads the MaterialsVerifiedUser element
include('elements/materials/Action/MaterialsVerifiedUser')
MaterialsVerifiedUser('element', 'Verified User', 'an optional tech field')
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

' loads the MaterialsVerifiedUser card
include('elements/materials/Action/MaterialsVerifiedUser')
MaterialsVerifiedUserCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVerifiedUser card
include('elements/materials/Action/MaterialsVerifiedUser')
MaterialsVerifiedUserCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
