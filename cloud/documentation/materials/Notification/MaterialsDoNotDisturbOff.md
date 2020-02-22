# MaterialsDoNotDisturbOff
```text
elements/materials/Notification/MaterialsDoNotDisturbOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDoNotDisturbOff icon](../../../icons/materials/Notification/MaterialsDoNotDisturbOff.png) | ![MaterialsDoNotDisturbOff element](MaterialsDoNotDisturbOff.element.png) | ![MaterialsDoNotDisturbOff card](MaterialsDoNotDisturbOff.card.png) |
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

' loads the MaterialsDoNotDisturbOff element
include('elements/materials/Notification/MaterialsDoNotDisturbOff')
MaterialsDoNotDisturbOff('element', 'Do Not Disturb Off', 'an optional tech field')
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

' loads the MaterialsDoNotDisturbOff element
include('elements/materials/Notification/MaterialsDoNotDisturbOff')
MaterialsDoNotDisturbOff('element', 'Do Not Disturb Off', 'an optional tech field')
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

' loads the MaterialsDoNotDisturbOff card
include('elements/materials/Notification/MaterialsDoNotDisturbOff')
MaterialsDoNotDisturbOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDoNotDisturbOff card
include('elements/materials/Notification/MaterialsDoNotDisturbOff')
MaterialsDoNotDisturbOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
