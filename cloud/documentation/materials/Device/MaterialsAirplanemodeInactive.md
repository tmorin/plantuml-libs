# MaterialsAirplanemodeInactive
```text
elements/materials/Device/MaterialsAirplanemodeInactive
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAirplanemodeInactive icon](../../../icons/materials/Device/MaterialsAirplanemodeInactive.png) | ![MaterialsAirplanemodeInactive element](MaterialsAirplanemodeInactive.element.png) | ![MaterialsAirplanemodeInactive card](MaterialsAirplanemodeInactive.card.png) |
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

' loads the MaterialsAirplanemodeInactive element
include('elements/materials/Device/MaterialsAirplanemodeInactive')
MaterialsAirplanemodeInactive('element', 'Airplanemode Inactive', 'an optional tech field')
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

' loads the MaterialsAirplanemodeInactive element
include('elements/materials/Device/MaterialsAirplanemodeInactive')
MaterialsAirplanemodeInactive('element', 'Airplanemode Inactive', 'an optional tech field')
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

' loads the MaterialsAirplanemodeInactive card
include('elements/materials/Device/MaterialsAirplanemodeInactive')
MaterialsAirplanemodeInactiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAirplanemodeInactive card
include('elements/materials/Device/MaterialsAirplanemodeInactive')
MaterialsAirplanemodeInactiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
