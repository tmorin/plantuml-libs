# MaterialsPermIdentity
```text
elements/materials/Action/MaterialsPermIdentity
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPermIdentity icon](../../../icons/materials/Action/MaterialsPermIdentity.png) | ![MaterialsPermIdentity element](MaterialsPermIdentity.element.png) | ![MaterialsPermIdentity card](MaterialsPermIdentity.card.png) |
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

' loads the MaterialsPermIdentity element
include('elements/materials/Action/MaterialsPermIdentity')
MaterialsPermIdentity('element', 'Perm Identity', 'an optional tech field')
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

' loads the MaterialsPermIdentity element
include('elements/materials/Action/MaterialsPermIdentity')
MaterialsPermIdentity('element', 'Perm Identity', 'an optional tech field')
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

' loads the MaterialsPermIdentity card
include('elements/materials/Action/MaterialsPermIdentity')
MaterialsPermIdentityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPermIdentity card
include('elements/materials/Action/MaterialsPermIdentity')
MaterialsPermIdentityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
