# MaterialsChildFriendly
```text
elements/materials/Places/MaterialsChildFriendly
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsChildFriendly icon](../../../icons/materials/Places/MaterialsChildFriendly.png) | ![MaterialsChildFriendly element](MaterialsChildFriendly.element.png) | ![MaterialsChildFriendly card](MaterialsChildFriendly.card.png) |
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

' loads the MaterialsChildFriendly element
include('elements/materials/Places/MaterialsChildFriendly')
MaterialsChildFriendly('element', 'Child Friendly', 'an optional tech field')
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

' loads the MaterialsChildFriendly element
include('elements/materials/Places/MaterialsChildFriendly')
MaterialsChildFriendly('element', 'Child Friendly', 'an optional tech field')
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

' loads the MaterialsChildFriendly card
include('elements/materials/Places/MaterialsChildFriendly')
MaterialsChildFriendlyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsChildFriendly card
include('elements/materials/Places/MaterialsChildFriendly')
MaterialsChildFriendlyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
