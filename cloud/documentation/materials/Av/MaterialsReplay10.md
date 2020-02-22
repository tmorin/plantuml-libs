# MaterialsReplay10
```text
elements/materials/Av/MaterialsReplay10
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsReplay10 icon](../../../icons/materials/Av/MaterialsReplay10.png) | ![MaterialsReplay10 element](MaterialsReplay10.element.png) | ![MaterialsReplay10 card](MaterialsReplay10.card.png) |
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

' loads the MaterialsReplay10 element
include('elements/materials/Av/MaterialsReplay10')
MaterialsReplay10('element', 'Replay10', 'an optional tech field')
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

' loads the MaterialsReplay10 element
include('elements/materials/Av/MaterialsReplay10')
MaterialsReplay10('element', 'Replay10', 'an optional tech field')
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

' loads the MaterialsReplay10 card
include('elements/materials/Av/MaterialsReplay10')
MaterialsReplay10Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsReplay10 card
include('elements/materials/Av/MaterialsReplay10')
MaterialsReplay10Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
