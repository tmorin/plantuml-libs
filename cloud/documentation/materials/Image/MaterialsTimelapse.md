# MaterialsTimelapse
```text
elements/materials/Image/MaterialsTimelapse
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTimelapse icon](../../../icons/materials/Image/MaterialsTimelapse.png) | ![MaterialsTimelapse element](MaterialsTimelapse.element.png) | ![MaterialsTimelapse card](MaterialsTimelapse.card.png) |
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

' loads the MaterialsTimelapse element
include('elements/materials/Image/MaterialsTimelapse')
MaterialsTimelapse('element', 'Timelapse', 'an optional tech field')
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

' loads the MaterialsTimelapse element
include('elements/materials/Image/MaterialsTimelapse')
MaterialsTimelapse('element', 'Timelapse', 'an optional tech field')
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

' loads the MaterialsTimelapse card
include('elements/materials/Image/MaterialsTimelapse')
MaterialsTimelapseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTimelapse card
include('elements/materials/Image/MaterialsTimelapse')
MaterialsTimelapseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
