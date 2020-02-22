# MaterialsDiscFull
```text
elements/materials/Notification/MaterialsDiscFull
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDiscFull icon](../../../icons/materials/Notification/MaterialsDiscFull.png) | ![MaterialsDiscFull element](MaterialsDiscFull.element.png) | ![MaterialsDiscFull card](MaterialsDiscFull.card.png) |
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

' loads the MaterialsDiscFull element
include('elements/materials/Notification/MaterialsDiscFull')
MaterialsDiscFull('element', 'Disc Full', 'an optional tech field')
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

' loads the MaterialsDiscFull element
include('elements/materials/Notification/MaterialsDiscFull')
MaterialsDiscFull('element', 'Disc Full', 'an optional tech field')
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

' loads the MaterialsDiscFull card
include('elements/materials/Notification/MaterialsDiscFull')
MaterialsDiscFullCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDiscFull card
include('elements/materials/Notification/MaterialsDiscFull')
MaterialsDiscFullCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
