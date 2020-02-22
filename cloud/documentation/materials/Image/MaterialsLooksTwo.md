# MaterialsLooksTwo
```text
elements/materials/Image/MaterialsLooksTwo
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLooksTwo icon](../../../icons/materials/Image/MaterialsLooksTwo.png) | ![MaterialsLooksTwo element](MaterialsLooksTwo.element.png) | ![MaterialsLooksTwo card](MaterialsLooksTwo.card.png) |
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

' loads the MaterialsLooksTwo element
include('elements/materials/Image/MaterialsLooksTwo')
MaterialsLooksTwo('element', 'Looks Two', 'an optional tech field')
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

' loads the MaterialsLooksTwo element
include('elements/materials/Image/MaterialsLooksTwo')
MaterialsLooksTwo('element', 'Looks Two', 'an optional tech field')
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

' loads the MaterialsLooksTwo card
include('elements/materials/Image/MaterialsLooksTwo')
MaterialsLooksTwoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLooksTwo card
include('elements/materials/Image/MaterialsLooksTwo')
MaterialsLooksTwoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
