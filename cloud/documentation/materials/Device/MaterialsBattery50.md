# MaterialsBattery50
```text
elements/materials/Device/MaterialsBattery50
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBattery50 icon](../../../icons/materials/Device/MaterialsBattery50.png) | ![MaterialsBattery50 element](MaterialsBattery50.element.png) | ![MaterialsBattery50 card](MaterialsBattery50.card.png) |
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

' loads the MaterialsBattery50 element
include('elements/materials/Device/MaterialsBattery50')
MaterialsBattery50('element', 'Battery50', 'an optional tech field')
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

' loads the MaterialsBattery50 element
include('elements/materials/Device/MaterialsBattery50')
MaterialsBattery50('element', 'Battery50', 'an optional tech field')
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

' loads the MaterialsBattery50 card
include('elements/materials/Device/MaterialsBattery50')
MaterialsBattery50Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBattery50 card
include('elements/materials/Device/MaterialsBattery50')
MaterialsBattery50Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
