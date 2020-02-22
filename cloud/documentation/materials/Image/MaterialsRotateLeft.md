# MaterialsRotateLeft
```text
elements/materials/Image/MaterialsRotateLeft
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRotateLeft icon](../../../icons/materials/Image/MaterialsRotateLeft.png) | ![MaterialsRotateLeft element](MaterialsRotateLeft.element.png) | ![MaterialsRotateLeft card](MaterialsRotateLeft.card.png) |
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

' loads the MaterialsRotateLeft element
include('elements/materials/Image/MaterialsRotateLeft')
MaterialsRotateLeft('element', 'Rotate Left', 'an optional tech field')
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

' loads the MaterialsRotateLeft element
include('elements/materials/Image/MaterialsRotateLeft')
MaterialsRotateLeft('element', 'Rotate Left', 'an optional tech field')
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

' loads the MaterialsRotateLeft card
include('elements/materials/Image/MaterialsRotateLeft')
MaterialsRotateLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRotateLeft card
include('elements/materials/Image/MaterialsRotateLeft')
MaterialsRotateLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
