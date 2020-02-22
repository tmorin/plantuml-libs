# MaterialsDragHandle
```text
elements/materials/Editor/MaterialsDragHandle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDragHandle icon](../../../icons/materials/Editor/MaterialsDragHandle.png) | ![MaterialsDragHandle element](MaterialsDragHandle.element.png) | ![MaterialsDragHandle card](MaterialsDragHandle.card.png) |
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

' loads the MaterialsDragHandle element
include('elements/materials/Editor/MaterialsDragHandle')
MaterialsDragHandle('element', 'Drag Handle', 'an optional tech field')
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

' loads the MaterialsDragHandle element
include('elements/materials/Editor/MaterialsDragHandle')
MaterialsDragHandle('element', 'Drag Handle', 'an optional tech field')
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

' loads the MaterialsDragHandle card
include('elements/materials/Editor/MaterialsDragHandle')
MaterialsDragHandleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDragHandle card
include('elements/materials/Editor/MaterialsDragHandle')
MaterialsDragHandleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
