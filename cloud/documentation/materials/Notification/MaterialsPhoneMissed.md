# MaterialsPhoneMissed
```text
elements/materials/Notification/MaterialsPhoneMissed
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhoneMissed icon](../../../icons/materials/Notification/MaterialsPhoneMissed.png) | ![MaterialsPhoneMissed element](MaterialsPhoneMissed.element.png) | ![MaterialsPhoneMissed card](MaterialsPhoneMissed.card.png) |
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

' loads the MaterialsPhoneMissed element
include('elements/materials/Notification/MaterialsPhoneMissed')
MaterialsPhoneMissed('element', 'Phone Missed', 'an optional tech field')
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

' loads the MaterialsPhoneMissed element
include('elements/materials/Notification/MaterialsPhoneMissed')
MaterialsPhoneMissed('element', 'Phone Missed', 'an optional tech field')
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

' loads the MaterialsPhoneMissed card
include('elements/materials/Notification/MaterialsPhoneMissed')
MaterialsPhoneMissedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhoneMissed card
include('elements/materials/Notification/MaterialsPhoneMissed')
MaterialsPhoneMissedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
