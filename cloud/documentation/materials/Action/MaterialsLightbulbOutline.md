# MaterialsLightbulbOutline
```text
elements/materials/Action/MaterialsLightbulbOutline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLightbulbOutline icon](../../../icons/materials/Action/MaterialsLightbulbOutline.png) | ![MaterialsLightbulbOutline element](MaterialsLightbulbOutline.element.png) | ![MaterialsLightbulbOutline card](MaterialsLightbulbOutline.card.png) |
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

' loads the MaterialsLightbulbOutline element
include('elements/materials/Action/MaterialsLightbulbOutline')
MaterialsLightbulbOutline('element', 'Lightbulb Outline', 'an optional tech field')
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

' loads the MaterialsLightbulbOutline element
include('elements/materials/Action/MaterialsLightbulbOutline')
MaterialsLightbulbOutline('element', 'Lightbulb Outline', 'an optional tech field')
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

' loads the MaterialsLightbulbOutline card
include('elements/materials/Action/MaterialsLightbulbOutline')
MaterialsLightbulbOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLightbulbOutline card
include('elements/materials/Action/MaterialsLightbulbOutline')
MaterialsLightbulbOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
