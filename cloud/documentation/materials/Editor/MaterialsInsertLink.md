# MaterialsInsertLink
```text
elements/materials/Editor/MaterialsInsertLink
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsInsertLink icon](../../../icons/materials/Editor/MaterialsInsertLink.png) | ![MaterialsInsertLink element](MaterialsInsertLink.element.png) | ![MaterialsInsertLink card](MaterialsInsertLink.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsInsertLink element
include('elements/materials/Editor/MaterialsInsertLink')
MaterialsInsertLink('element', 'Insert Link', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsInsertLink element
include('elements/materials/Editor/MaterialsInsertLink')
MaterialsInsertLink('element', 'Insert Link', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsInsertLink card
include('elements/materials/Editor/MaterialsInsertLink')
MaterialsInsertLinkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsInsertLink card
include('elements/materials/Editor/MaterialsInsertLink')
MaterialsInsertLinkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
