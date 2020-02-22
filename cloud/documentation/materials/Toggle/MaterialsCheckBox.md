# MaterialsCheckBox
```text
elements/materials/Toggle/MaterialsCheckBox
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCheckBox icon](../../../icons/materials/Toggle/MaterialsCheckBox.png) | ![MaterialsCheckBox element](MaterialsCheckBox.element.png) | ![MaterialsCheckBox card](MaterialsCheckBox.card.png) |
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

' loads the MaterialsCheckBox element
include('elements/materials/Toggle/MaterialsCheckBox')
MaterialsCheckBox('element', 'Check Box', 'an optional tech field')
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

' loads the MaterialsCheckBox element
include('elements/materials/Toggle/MaterialsCheckBox')
MaterialsCheckBox('element', 'Check Box', 'an optional tech field')
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

' loads the MaterialsCheckBox card
include('elements/materials/Toggle/MaterialsCheckBox')
MaterialsCheckBoxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCheckBox card
include('elements/materials/Toggle/MaterialsCheckBox')
MaterialsCheckBoxCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
