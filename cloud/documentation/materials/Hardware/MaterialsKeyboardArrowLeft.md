# MaterialsKeyboardArrowLeft
```text
elements/materials/Hardware/MaterialsKeyboardArrowLeft
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsKeyboardArrowLeft icon](../../../icons/materials/Hardware/MaterialsKeyboardArrowLeft.png) | ![MaterialsKeyboardArrowLeft element](MaterialsKeyboardArrowLeft.element.png) | ![MaterialsKeyboardArrowLeft card](MaterialsKeyboardArrowLeft.card.png) |
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

' loads the MaterialsKeyboardArrowLeft element
include('elements/materials/Hardware/MaterialsKeyboardArrowLeft')
MaterialsKeyboardArrowLeft('element', 'Keyboard Arrow Left', 'an optional tech field')
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

' loads the MaterialsKeyboardArrowLeft element
include('elements/materials/Hardware/MaterialsKeyboardArrowLeft')
MaterialsKeyboardArrowLeft('element', 'Keyboard Arrow Left', 'an optional tech field')
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

' loads the MaterialsKeyboardArrowLeft card
include('elements/materials/Hardware/MaterialsKeyboardArrowLeft')
MaterialsKeyboardArrowLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsKeyboardArrowLeft card
include('elements/materials/Hardware/MaterialsKeyboardArrowLeft')
MaterialsKeyboardArrowLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
