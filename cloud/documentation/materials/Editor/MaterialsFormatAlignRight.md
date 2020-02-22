# MaterialsFormatAlignRight
```text
elements/materials/Editor/MaterialsFormatAlignRight
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatAlignRight icon](../../../icons/materials/Editor/MaterialsFormatAlignRight.png) | ![MaterialsFormatAlignRight element](MaterialsFormatAlignRight.element.png) | ![MaterialsFormatAlignRight card](MaterialsFormatAlignRight.card.png) |
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

' loads the MaterialsFormatAlignRight element
include('elements/materials/Editor/MaterialsFormatAlignRight')
MaterialsFormatAlignRight('element', 'Format Align Right', 'an optional tech field')
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

' loads the MaterialsFormatAlignRight element
include('elements/materials/Editor/MaterialsFormatAlignRight')
MaterialsFormatAlignRight('element', 'Format Align Right', 'an optional tech field')
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

' loads the MaterialsFormatAlignRight card
include('elements/materials/Editor/MaterialsFormatAlignRight')
MaterialsFormatAlignRightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatAlignRight card
include('elements/materials/Editor/MaterialsFormatAlignRight')
MaterialsFormatAlignRightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
