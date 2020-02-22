# MaterialsAvTimer
```text
elements/materials/Av/MaterialsAvTimer
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAvTimer icon](../../../icons/materials/Av/MaterialsAvTimer.png) | ![MaterialsAvTimer element](MaterialsAvTimer.element.png) | ![MaterialsAvTimer card](MaterialsAvTimer.card.png) |
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

' loads the MaterialsAvTimer element
include('elements/materials/Av/MaterialsAvTimer')
MaterialsAvTimer('element', 'Av Timer', 'an optional tech field')
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

' loads the MaterialsAvTimer element
include('elements/materials/Av/MaterialsAvTimer')
MaterialsAvTimer('element', 'Av Timer', 'an optional tech field')
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

' loads the MaterialsAvTimer card
include('elements/materials/Av/MaterialsAvTimer')
MaterialsAvTimerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAvTimer card
include('elements/materials/Av/MaterialsAvTimer')
MaterialsAvTimerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
