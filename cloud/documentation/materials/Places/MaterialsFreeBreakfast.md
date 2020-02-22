# MaterialsFreeBreakfast
```text
elements/materials/Places/MaterialsFreeBreakfast
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFreeBreakfast icon](../../../icons/materials/Places/MaterialsFreeBreakfast.png) | ![MaterialsFreeBreakfast element](MaterialsFreeBreakfast.element.png) | ![MaterialsFreeBreakfast card](MaterialsFreeBreakfast.card.png) |
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

' loads the MaterialsFreeBreakfast element
include('elements/materials/Places/MaterialsFreeBreakfast')
MaterialsFreeBreakfast('element', 'Free Breakfast', 'an optional tech field')
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

' loads the MaterialsFreeBreakfast element
include('elements/materials/Places/MaterialsFreeBreakfast')
MaterialsFreeBreakfast('element', 'Free Breakfast', 'an optional tech field')
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

' loads the MaterialsFreeBreakfast card
include('elements/materials/Places/MaterialsFreeBreakfast')
MaterialsFreeBreakfastCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFreeBreakfast card
include('elements/materials/Places/MaterialsFreeBreakfast')
MaterialsFreeBreakfastCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
