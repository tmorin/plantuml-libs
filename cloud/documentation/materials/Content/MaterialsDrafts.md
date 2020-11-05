# MaterialsDrafts
```text
elements/materials/Content/MaterialsDrafts
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDrafts icon](../../../icons/materials/Content/MaterialsDrafts.png) | ![MaterialsDrafts element](MaterialsDrafts.element.png) | ![MaterialsDrafts card](MaterialsDrafts.card.png) |
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

' loads the MaterialsDrafts element
include('elements/materials/Content/MaterialsDrafts')
MaterialsDrafts('element', 'Drafts', 'an optional tech field')
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

' loads the MaterialsDrafts element
include('elements/materials/Content/MaterialsDrafts')
MaterialsDrafts('element', 'Drafts', 'an optional tech field')
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

' loads the MaterialsDrafts card
include('elements/materials/Content/MaterialsDrafts')
MaterialsDraftsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDrafts card
include('elements/materials/Content/MaterialsDrafts')
MaterialsDraftsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```