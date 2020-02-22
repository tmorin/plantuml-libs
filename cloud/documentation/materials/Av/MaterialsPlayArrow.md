# MaterialsPlayArrow
```text
elements/materials/Av/MaterialsPlayArrow
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPlayArrow icon](../../../icons/materials/Av/MaterialsPlayArrow.png) | ![MaterialsPlayArrow element](MaterialsPlayArrow.element.png) | ![MaterialsPlayArrow card](MaterialsPlayArrow.card.png) |
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

' loads the MaterialsPlayArrow element
include('elements/materials/Av/MaterialsPlayArrow')
MaterialsPlayArrow('element', 'Play Arrow', 'an optional tech field')
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

' loads the MaterialsPlayArrow element
include('elements/materials/Av/MaterialsPlayArrow')
MaterialsPlayArrow('element', 'Play Arrow', 'an optional tech field')
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

' loads the MaterialsPlayArrow card
include('elements/materials/Av/MaterialsPlayArrow')
MaterialsPlayArrowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPlayArrow card
include('elements/materials/Av/MaterialsPlayArrow')
MaterialsPlayArrowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
