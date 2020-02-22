# MaterialsSkipPrevious
```text
elements/materials/Av/MaterialsSkipPrevious
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSkipPrevious icon](../../../icons/materials/Av/MaterialsSkipPrevious.png) | ![MaterialsSkipPrevious element](MaterialsSkipPrevious.element.png) | ![MaterialsSkipPrevious card](MaterialsSkipPrevious.card.png) |
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

' loads the MaterialsSkipPrevious element
include('elements/materials/Av/MaterialsSkipPrevious')
MaterialsSkipPrevious('element', 'Skip Previous', 'an optional tech field')
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

' loads the MaterialsSkipPrevious element
include('elements/materials/Av/MaterialsSkipPrevious')
MaterialsSkipPrevious('element', 'Skip Previous', 'an optional tech field')
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

' loads the MaterialsSkipPrevious card
include('elements/materials/Av/MaterialsSkipPrevious')
MaterialsSkipPreviousCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSkipPrevious card
include('elements/materials/Av/MaterialsSkipPrevious')
MaterialsSkipPreviousCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
