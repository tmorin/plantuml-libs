# MaterialsTextFormat
```text
elements/materials/Content/MaterialsTextFormat
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTextFormat icon](../../../icons/materials/Content/MaterialsTextFormat.png) | ![MaterialsTextFormat element](MaterialsTextFormat.element.png) | ![MaterialsTextFormat card](MaterialsTextFormat.card.png) |
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

' loads the MaterialsTextFormat element
include('elements/materials/Content/MaterialsTextFormat')
MaterialsTextFormat('element', 'Text Format', 'an optional tech field')
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

' loads the MaterialsTextFormat element
include('elements/materials/Content/MaterialsTextFormat')
MaterialsTextFormat('element', 'Text Format', 'an optional tech field')
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

' loads the MaterialsTextFormat card
include('elements/materials/Content/MaterialsTextFormat')
MaterialsTextFormatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTextFormat card
include('elements/materials/Content/MaterialsTextFormat')
MaterialsTextFormatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
