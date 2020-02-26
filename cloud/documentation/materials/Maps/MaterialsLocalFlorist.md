# MaterialsLocalFlorist
```text
elements/materials/Maps/MaterialsLocalFlorist
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalFlorist icon](../../../icons/materials/Maps/MaterialsLocalFlorist.png) | ![MaterialsLocalFlorist element](MaterialsLocalFlorist.element.png) | ![MaterialsLocalFlorist card](MaterialsLocalFlorist.card.png) |
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

' loads the MaterialsLocalFlorist element
include('elements/materials/Maps/MaterialsLocalFlorist')
MaterialsLocalFlorist('element', 'Local Florist', 'an optional tech field')
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

' loads the MaterialsLocalFlorist element
include('elements/materials/Maps/MaterialsLocalFlorist')
MaterialsLocalFlorist('element', 'Local Florist', 'an optional tech field')
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

' loads the MaterialsLocalFlorist card
include('elements/materials/Maps/MaterialsLocalFlorist')
MaterialsLocalFloristCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalFlorist card
include('elements/materials/Maps/MaterialsLocalFlorist')
MaterialsLocalFloristCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
