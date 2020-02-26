# MaterialsUnarchive
```text
elements/materials/Content/MaterialsUnarchive
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsUnarchive icon](../../../icons/materials/Content/MaterialsUnarchive.png) | ![MaterialsUnarchive element](MaterialsUnarchive.element.png) | ![MaterialsUnarchive card](MaterialsUnarchive.card.png) |
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

' loads the MaterialsUnarchive element
include('elements/materials/Content/MaterialsUnarchive')
MaterialsUnarchive('element', 'Unarchive', 'an optional tech field')
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

' loads the MaterialsUnarchive element
include('elements/materials/Content/MaterialsUnarchive')
MaterialsUnarchive('element', 'Unarchive', 'an optional tech field')
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

' loads the MaterialsUnarchive card
include('elements/materials/Content/MaterialsUnarchive')
MaterialsUnarchiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsUnarchive card
include('elements/materials/Content/MaterialsUnarchive')
MaterialsUnarchiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
