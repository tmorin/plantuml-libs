# MaterialsMergeType
```text
elements/materials/Editor/MaterialsMergeType
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMergeType icon](../../../icons/materials/Editor/MaterialsMergeType.png) | ![MaterialsMergeType element](MaterialsMergeType.element.png) | ![MaterialsMergeType card](MaterialsMergeType.card.png) |
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

' loads the MaterialsMergeType element
include('elements/materials/Editor/MaterialsMergeType')
MaterialsMergeType('element', 'Merge Type', 'an optional tech field')
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

' loads the MaterialsMergeType element
include('elements/materials/Editor/MaterialsMergeType')
MaterialsMergeType('element', 'Merge Type', 'an optional tech field')
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

' loads the MaterialsMergeType card
include('elements/materials/Editor/MaterialsMergeType')
MaterialsMergeTypeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMergeType card
include('elements/materials/Editor/MaterialsMergeType')
MaterialsMergeTypeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
