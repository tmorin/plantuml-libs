# MaterialsBeachAccess
```text
elements/materials/Places/MaterialsBeachAccess
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBeachAccess icon](../../../icons/materials/Places/MaterialsBeachAccess.png) | ![MaterialsBeachAccess element](MaterialsBeachAccess.element.png) | ![MaterialsBeachAccess card](MaterialsBeachAccess.card.png) |
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

' loads the MaterialsBeachAccess element
include('elements/materials/Places/MaterialsBeachAccess')
MaterialsBeachAccess('element', 'Beach Access', 'an optional tech field')
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

' loads the MaterialsBeachAccess element
include('elements/materials/Places/MaterialsBeachAccess')
MaterialsBeachAccess('element', 'Beach Access', 'an optional tech field')
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

' loads the MaterialsBeachAccess card
include('elements/materials/Places/MaterialsBeachAccess')
MaterialsBeachAccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBeachAccess card
include('elements/materials/Places/MaterialsBeachAccess')
MaterialsBeachAccessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
