# MaterialsTextFields
```text
elements/materials/Editor/MaterialsTextFields
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTextFields icon](../../../icons/materials/Editor/MaterialsTextFields.png) | ![MaterialsTextFields element](MaterialsTextFields.element.png) | ![MaterialsTextFields card](MaterialsTextFields.card.png) |
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

' loads the MaterialsTextFields element
include('elements/materials/Editor/MaterialsTextFields')
MaterialsTextFields('element', 'Text Fields', 'an optional tech field')
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

' loads the MaterialsTextFields element
include('elements/materials/Editor/MaterialsTextFields')
MaterialsTextFields('element', 'Text Fields', 'an optional tech field')
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

' loads the MaterialsTextFields card
include('elements/materials/Editor/MaterialsTextFields')
MaterialsTextFieldsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTextFields card
include('elements/materials/Editor/MaterialsTextFields')
MaterialsTextFieldsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
