# MaterialsPanTool
```text
elements/materials/Action/MaterialsPanTool
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPanTool icon](../../../icons/materials/Action/MaterialsPanTool.png) | ![MaterialsPanTool element](MaterialsPanTool.element.png) | ![MaterialsPanTool card](MaterialsPanTool.card.png) |
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

' loads the MaterialsPanTool element
include('elements/materials/Action/MaterialsPanTool')
MaterialsPanTool('element', 'Pan Tool', 'an optional tech field')
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

' loads the MaterialsPanTool element
include('elements/materials/Action/MaterialsPanTool')
MaterialsPanTool('element', 'Pan Tool', 'an optional tech field')
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

' loads the MaterialsPanTool card
include('elements/materials/Action/MaterialsPanTool')
MaterialsPanToolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPanTool card
include('elements/materials/Action/MaterialsPanTool')
MaterialsPanToolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
