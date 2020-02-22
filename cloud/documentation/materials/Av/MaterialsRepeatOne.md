# MaterialsRepeatOne
```text
elements/materials/Av/MaterialsRepeatOne
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRepeatOne icon](../../../icons/materials/Av/MaterialsRepeatOne.png) | ![MaterialsRepeatOne element](MaterialsRepeatOne.element.png) | ![MaterialsRepeatOne card](MaterialsRepeatOne.card.png) |
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

' loads the MaterialsRepeatOne element
include('elements/materials/Av/MaterialsRepeatOne')
MaterialsRepeatOne('element', 'Repeat One', 'an optional tech field')
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

' loads the MaterialsRepeatOne element
include('elements/materials/Av/MaterialsRepeatOne')
MaterialsRepeatOne('element', 'Repeat One', 'an optional tech field')
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

' loads the MaterialsRepeatOne card
include('elements/materials/Av/MaterialsRepeatOne')
MaterialsRepeatOneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRepeatOne card
include('elements/materials/Av/MaterialsRepeatOne')
MaterialsRepeatOneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
