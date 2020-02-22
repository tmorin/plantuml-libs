# MaterialsHourglassFull
```text
elements/materials/Action/MaterialsHourglassFull
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHourglassFull icon](../../../icons/materials/Action/MaterialsHourglassFull.png) | ![MaterialsHourglassFull element](MaterialsHourglassFull.element.png) | ![MaterialsHourglassFull card](MaterialsHourglassFull.card.png) |
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

' loads the MaterialsHourglassFull element
include('elements/materials/Action/MaterialsHourglassFull')
MaterialsHourglassFull('element', 'Hourglass Full', 'an optional tech field')
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

' loads the MaterialsHourglassFull element
include('elements/materials/Action/MaterialsHourglassFull')
MaterialsHourglassFull('element', 'Hourglass Full', 'an optional tech field')
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

' loads the MaterialsHourglassFull card
include('elements/materials/Action/MaterialsHourglassFull')
MaterialsHourglassFullCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHourglassFull card
include('elements/materials/Action/MaterialsHourglassFull')
MaterialsHourglassFullCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
