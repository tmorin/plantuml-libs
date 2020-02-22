# MaterialsDataUsage
```text
elements/materials/Device/MaterialsDataUsage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDataUsage icon](../../../icons/materials/Device/MaterialsDataUsage.png) | ![MaterialsDataUsage element](MaterialsDataUsage.element.png) | ![MaterialsDataUsage card](MaterialsDataUsage.card.png) |
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

' loads the MaterialsDataUsage element
include('elements/materials/Device/MaterialsDataUsage')
MaterialsDataUsage('element', 'Data Usage', 'an optional tech field')
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

' loads the MaterialsDataUsage element
include('elements/materials/Device/MaterialsDataUsage')
MaterialsDataUsage('element', 'Data Usage', 'an optional tech field')
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

' loads the MaterialsDataUsage card
include('elements/materials/Device/MaterialsDataUsage')
MaterialsDataUsageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDataUsage card
include('elements/materials/Device/MaterialsDataUsage')
MaterialsDataUsageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
