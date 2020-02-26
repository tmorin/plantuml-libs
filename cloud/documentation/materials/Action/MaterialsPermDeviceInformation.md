# MaterialsPermDeviceInformation
```text
elements/materials/Action/MaterialsPermDeviceInformation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPermDeviceInformation icon](../../../icons/materials/Action/MaterialsPermDeviceInformation.png) | ![MaterialsPermDeviceInformation element](MaterialsPermDeviceInformation.element.png) | ![MaterialsPermDeviceInformation card](MaterialsPermDeviceInformation.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsPermDeviceInformation element
include('elements/materials/Action/MaterialsPermDeviceInformation')
MaterialsPermDeviceInformation('element', 'Perm Device Information', 'an optional tech field')
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

' loads the MaterialsPermDeviceInformation element
include('elements/materials/Action/MaterialsPermDeviceInformation')
MaterialsPermDeviceInformation('element', 'Perm Device Information', 'an optional tech field')
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

' loads the style
include('styles/materials')

' loads the MaterialsPermDeviceInformation card
include('elements/materials/Action/MaterialsPermDeviceInformation')
MaterialsPermDeviceInformationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPermDeviceInformation card
include('elements/materials/Action/MaterialsPermDeviceInformation')
MaterialsPermDeviceInformationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
