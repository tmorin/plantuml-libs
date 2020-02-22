# MaterialsKeyboardReturn
```text
elements/materials/Hardware/MaterialsKeyboardReturn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsKeyboardReturn icon](../../../icons/materials/Hardware/MaterialsKeyboardReturn.png) | ![MaterialsKeyboardReturn element](MaterialsKeyboardReturn.element.png) | ![MaterialsKeyboardReturn card](MaterialsKeyboardReturn.card.png) |
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

' loads the MaterialsKeyboardReturn element
include('elements/materials/Hardware/MaterialsKeyboardReturn')
MaterialsKeyboardReturn('element', 'Keyboard Return', 'an optional tech field')
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

' loads the MaterialsKeyboardReturn element
include('elements/materials/Hardware/MaterialsKeyboardReturn')
MaterialsKeyboardReturn('element', 'Keyboard Return', 'an optional tech field')
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

' loads the MaterialsKeyboardReturn card
include('elements/materials/Hardware/MaterialsKeyboardReturn')
MaterialsKeyboardReturnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsKeyboardReturn card
include('elements/materials/Hardware/MaterialsKeyboardReturn')
MaterialsKeyboardReturnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
