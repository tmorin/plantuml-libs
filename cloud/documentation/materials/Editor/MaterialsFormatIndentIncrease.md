# MaterialsFormatIndentIncrease
```text
elements/materials/Editor/MaterialsFormatIndentIncrease
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatIndentIncrease icon](../../../icons/materials/Editor/MaterialsFormatIndentIncrease.png) | ![MaterialsFormatIndentIncrease element](MaterialsFormatIndentIncrease.element.png) | ![MaterialsFormatIndentIncrease card](MaterialsFormatIndentIncrease.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsFormatIndentIncrease element
include('elements/materials/Editor/MaterialsFormatIndentIncrease')
MaterialsFormatIndentIncrease('element', 'Format Indent Increase', 'an optional tech field')
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

' loads the style
include('styles/materials')

' loads the MaterialsFormatIndentIncrease element
include('elements/materials/Editor/MaterialsFormatIndentIncrease')
MaterialsFormatIndentIncrease('element', 'Format Indent Increase', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsFormatIndentIncrease card
include('elements/materials/Editor/MaterialsFormatIndentIncrease')
MaterialsFormatIndentIncreaseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/materials')

' loads the MaterialsFormatIndentIncrease card
include('elements/materials/Editor/MaterialsFormatIndentIncrease')
MaterialsFormatIndentIncreaseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
