# MaterialsQueuePlayNext
```text
elements/materials/Av/MaterialsQueuePlayNext
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsQueuePlayNext icon](../../../icons/materials/Av/MaterialsQueuePlayNext.png) | ![MaterialsQueuePlayNext element](MaterialsQueuePlayNext.element.png) | ![MaterialsQueuePlayNext card](MaterialsQueuePlayNext.card.png) |
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

' loads the MaterialsQueuePlayNext element
include('elements/materials/Av/MaterialsQueuePlayNext')
MaterialsQueuePlayNext('element', 'Queue Play Next', 'an optional tech field')
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

' loads the MaterialsQueuePlayNext element
include('elements/materials/Av/MaterialsQueuePlayNext')
MaterialsQueuePlayNext('element', 'Queue Play Next', 'an optional tech field')
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

' loads the MaterialsQueuePlayNext card
include('elements/materials/Av/MaterialsQueuePlayNext')
MaterialsQueuePlayNextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsQueuePlayNext card
include('elements/materials/Av/MaterialsQueuePlayNext')
MaterialsQueuePlayNextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
