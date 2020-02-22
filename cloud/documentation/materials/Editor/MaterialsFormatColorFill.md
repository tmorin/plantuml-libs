# MaterialsFormatColorFill
```text
elements/materials/Editor/MaterialsFormatColorFill
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatColorFill icon](../../../icons/materials/Editor/MaterialsFormatColorFill.png) | ![MaterialsFormatColorFill element](MaterialsFormatColorFill.element.png) | ![MaterialsFormatColorFill card](MaterialsFormatColorFill.card.png) |
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

' loads the MaterialsFormatColorFill element
include('elements/materials/Editor/MaterialsFormatColorFill')
MaterialsFormatColorFill('element', 'Format Color Fill', 'an optional tech field')
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

' loads the MaterialsFormatColorFill element
include('elements/materials/Editor/MaterialsFormatColorFill')
MaterialsFormatColorFill('element', 'Format Color Fill', 'an optional tech field')
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

' loads the MaterialsFormatColorFill card
include('elements/materials/Editor/MaterialsFormatColorFill')
MaterialsFormatColorFillCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatColorFill card
include('elements/materials/Editor/MaterialsFormatColorFill')
MaterialsFormatColorFillCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
