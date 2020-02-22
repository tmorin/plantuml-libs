# MaterialsFilter9Plus
```text
elements/materials/Image/MaterialsFilter9Plus
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilter9Plus icon](../../../icons/materials/Image/MaterialsFilter9Plus.png) | ![MaterialsFilter9Plus element](MaterialsFilter9Plus.element.png) | ![MaterialsFilter9Plus card](MaterialsFilter9Plus.card.png) |
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

' loads the MaterialsFilter9Plus element
include('elements/materials/Image/MaterialsFilter9Plus')
MaterialsFilter9Plus('element', 'Filter9 Plus', 'an optional tech field')
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

' loads the MaterialsFilter9Plus element
include('elements/materials/Image/MaterialsFilter9Plus')
MaterialsFilter9Plus('element', 'Filter9 Plus', 'an optional tech field')
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

' loads the MaterialsFilter9Plus card
include('elements/materials/Image/MaterialsFilter9Plus')
MaterialsFilter9PlusCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilter9Plus card
include('elements/materials/Image/MaterialsFilter9Plus')
MaterialsFilter9PlusCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
