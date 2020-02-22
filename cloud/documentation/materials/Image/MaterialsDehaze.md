# MaterialsDehaze
```text
elements/materials/Image/MaterialsDehaze
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDehaze icon](../../../icons/materials/Image/MaterialsDehaze.png) | ![MaterialsDehaze element](MaterialsDehaze.element.png) | ![MaterialsDehaze card](MaterialsDehaze.card.png) |
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

' loads the MaterialsDehaze element
include('elements/materials/Image/MaterialsDehaze')
MaterialsDehaze('element', 'Dehaze', 'an optional tech field')
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

' loads the MaterialsDehaze element
include('elements/materials/Image/MaterialsDehaze')
MaterialsDehaze('element', 'Dehaze', 'an optional tech field')
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

' loads the MaterialsDehaze card
include('elements/materials/Image/MaterialsDehaze')
MaterialsDehazeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDehaze card
include('elements/materials/Image/MaterialsDehaze')
MaterialsDehazeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
