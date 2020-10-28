# MaterialsQueryBuilder
```text
elements/materials/Action/MaterialsQueryBuilder
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsQueryBuilder icon](../../../icons/materials/Action/MaterialsQueryBuilder.png) | ![MaterialsQueryBuilder element](MaterialsQueryBuilder.element.png) | ![MaterialsQueryBuilder card](MaterialsQueryBuilder.card.png) |
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

' loads the MaterialsQueryBuilder element
include('elements/materials/Action/MaterialsQueryBuilder')
MaterialsQueryBuilder('element', 'Query Builder', 'an optional tech field')
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

' loads the MaterialsQueryBuilder element
include('elements/materials/Action/MaterialsQueryBuilder')
MaterialsQueryBuilder('element', 'Query Builder', 'an optional tech field')
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

' loads the MaterialsQueryBuilder card
include('elements/materials/Action/MaterialsQueryBuilder')
MaterialsQueryBuilderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsQueryBuilder card
include('elements/materials/Action/MaterialsQueryBuilder')
MaterialsQueryBuilderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
