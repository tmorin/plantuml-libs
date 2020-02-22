# MaterialsBorderLeft
```text
elements/materials/Editor/MaterialsBorderLeft
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBorderLeft icon](../../../icons/materials/Editor/MaterialsBorderLeft.png) | ![MaterialsBorderLeft element](MaterialsBorderLeft.element.png) | ![MaterialsBorderLeft card](MaterialsBorderLeft.card.png) |
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

' loads the MaterialsBorderLeft element
include('elements/materials/Editor/MaterialsBorderLeft')
MaterialsBorderLeft('element', 'Border Left', 'an optional tech field')
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

' loads the MaterialsBorderLeft element
include('elements/materials/Editor/MaterialsBorderLeft')
MaterialsBorderLeft('element', 'Border Left', 'an optional tech field')
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

' loads the MaterialsBorderLeft card
include('elements/materials/Editor/MaterialsBorderLeft')
MaterialsBorderLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBorderLeft card
include('elements/materials/Editor/MaterialsBorderLeft')
MaterialsBorderLeftCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
