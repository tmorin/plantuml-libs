# MaterialsBorderRight
```text
elements/materials/Editor/MaterialsBorderRight
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderRight icon](../../../icons/materials/Editor/MaterialsBorderRight.png) | ![MaterialsBorderRight element](MaterialsBorderRight.element.png) | ![MaterialsBorderRight card](MaterialsBorderRight.card.png) |
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

' loads the MaterialsBorderRight element
include('elements/materials/Editor/MaterialsBorderRight')
MaterialsBorderRight('element', 'Border Right', 'an optional tech field')
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

' loads the MaterialsBorderRight element
include('elements/materials/Editor/MaterialsBorderRight')
MaterialsBorderRight('element', 'Border Right', 'an optional tech field')
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

' loads the MaterialsBorderRight card
include('elements/materials/Editor/MaterialsBorderRight')
MaterialsBorderRightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderRight card
include('elements/materials/Editor/MaterialsBorderRight')
MaterialsBorderRightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
