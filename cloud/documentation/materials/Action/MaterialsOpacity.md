# MaterialsOpacity
```text
elements/materials/Action/MaterialsOpacity
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsOpacity icon](../../../icons/materials/Action/MaterialsOpacity.png) | ![MaterialsOpacity element](MaterialsOpacity.element.png) | ![MaterialsOpacity card](MaterialsOpacity.card.png) |
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

' loads the MaterialsOpacity element
include('elements/materials/Action/MaterialsOpacity')
MaterialsOpacity('element', 'Opacity', 'an optional tech field')
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

' loads the MaterialsOpacity element
include('elements/materials/Action/MaterialsOpacity')
MaterialsOpacity('element', 'Opacity', 'an optional tech field')
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

' loads the MaterialsOpacity card
include('elements/materials/Action/MaterialsOpacity')
MaterialsOpacityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsOpacity card
include('elements/materials/Action/MaterialsOpacity')
MaterialsOpacityCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
