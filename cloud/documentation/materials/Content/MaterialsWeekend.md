# MaterialsWeekend
```text
elements/materials/Content/MaterialsWeekend
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWeekend icon](../../../icons/materials/Content/MaterialsWeekend.png) | ![MaterialsWeekend element](MaterialsWeekend.element.png) | ![MaterialsWeekend card](MaterialsWeekend.card.png) |
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

' loads the MaterialsWeekend element
include('elements/materials/Content/MaterialsWeekend')
MaterialsWeekend('element', 'Weekend', 'an optional tech field')
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

' loads the MaterialsWeekend element
include('elements/materials/Content/MaterialsWeekend')
MaterialsWeekend('element', 'Weekend', 'an optional tech field')
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

' loads the MaterialsWeekend card
include('elements/materials/Content/MaterialsWeekend')
MaterialsWeekendCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWeekend card
include('elements/materials/Content/MaterialsWeekend')
MaterialsWeekendCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
