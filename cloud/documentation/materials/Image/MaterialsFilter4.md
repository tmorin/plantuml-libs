# MaterialsFilter4
```text
elements/materials/Image/MaterialsFilter4
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilter4 icon](../../../icons/materials/Image/MaterialsFilter4.png) | ![MaterialsFilter4 element](MaterialsFilter4.element.png) | ![MaterialsFilter4 card](MaterialsFilter4.card.png) |
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

' loads the MaterialsFilter4 element
include('elements/materials/Image/MaterialsFilter4')
MaterialsFilter4('element', 'Filter4', 'an optional tech field')
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

' loads the MaterialsFilter4 element
include('elements/materials/Image/MaterialsFilter4')
MaterialsFilter4('element', 'Filter4', 'an optional tech field')
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

' loads the MaterialsFilter4 card
include('elements/materials/Image/MaterialsFilter4')
MaterialsFilter4Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilter4 card
include('elements/materials/Image/MaterialsFilter4')
MaterialsFilter4Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
