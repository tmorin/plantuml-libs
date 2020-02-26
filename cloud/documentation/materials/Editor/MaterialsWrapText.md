# MaterialsWrapText
```text
elements/materials/Editor/MaterialsWrapText
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWrapText icon](../../../icons/materials/Editor/MaterialsWrapText.png) | ![MaterialsWrapText element](MaterialsWrapText.element.png) | ![MaterialsWrapText card](MaterialsWrapText.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsWrapText element
include('elements/materials/Editor/MaterialsWrapText')
MaterialsWrapText('element', 'Wrap Text', 'an optional tech field')
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

' loads the MaterialsWrapText element
include('elements/materials/Editor/MaterialsWrapText')
MaterialsWrapText('element', 'Wrap Text', 'an optional tech field')
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

' loads the style
include('styles/materials')

' loads the MaterialsWrapText card
include('elements/materials/Editor/MaterialsWrapText')
MaterialsWrapTextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWrapText card
include('elements/materials/Editor/MaterialsWrapText')
MaterialsWrapTextCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
