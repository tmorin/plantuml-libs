# MaterialsLocalLaundryService
```text
elements/materials/Maps/MaterialsLocalLaundryService
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalLaundryService icon](../../../icons/materials/Maps/MaterialsLocalLaundryService.png) | ![MaterialsLocalLaundryService element](MaterialsLocalLaundryService.element.png) | ![MaterialsLocalLaundryService card](MaterialsLocalLaundryService.card.png) |
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

' loads the MaterialsLocalLaundryService element
include('elements/materials/Maps/MaterialsLocalLaundryService')
MaterialsLocalLaundryService('element', 'Local Laundry Service', 'an optional tech field')
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

' loads the MaterialsLocalLaundryService element
include('elements/materials/Maps/MaterialsLocalLaundryService')
MaterialsLocalLaundryService('element', 'Local Laundry Service', 'an optional tech field')
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

' loads the MaterialsLocalLaundryService card
include('elements/materials/Maps/MaterialsLocalLaundryService')
MaterialsLocalLaundryServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalLaundryService card
include('elements/materials/Maps/MaterialsLocalLaundryService')
MaterialsLocalLaundryServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
