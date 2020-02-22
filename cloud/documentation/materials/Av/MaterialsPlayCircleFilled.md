# MaterialsPlayCircleFilled
```text
elements/materials/Av/MaterialsPlayCircleFilled
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPlayCircleFilled icon](../../../icons/materials/Av/MaterialsPlayCircleFilled.png) | ![MaterialsPlayCircleFilled element](MaterialsPlayCircleFilled.element.png) | ![MaterialsPlayCircleFilled card](MaterialsPlayCircleFilled.card.png) |
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

' loads the MaterialsPlayCircleFilled element
include('elements/materials/Av/MaterialsPlayCircleFilled')
MaterialsPlayCircleFilled('element', 'Play Circle Filled', 'an optional tech field')
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

' loads the MaterialsPlayCircleFilled element
include('elements/materials/Av/MaterialsPlayCircleFilled')
MaterialsPlayCircleFilled('element', 'Play Circle Filled', 'an optional tech field')
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

' loads the MaterialsPlayCircleFilled card
include('elements/materials/Av/MaterialsPlayCircleFilled')
MaterialsPlayCircleFilledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPlayCircleFilled card
include('elements/materials/Av/MaterialsPlayCircleFilled')
MaterialsPlayCircleFilledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
