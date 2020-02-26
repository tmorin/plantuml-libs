# MaterialsLocationDisabled
```text
elements/materials/Device/MaterialsLocationDisabled
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocationDisabled icon](../../../icons/materials/Device/MaterialsLocationDisabled.png) | ![MaterialsLocationDisabled element](MaterialsLocationDisabled.element.png) | ![MaterialsLocationDisabled card](MaterialsLocationDisabled.card.png) |
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

' loads the MaterialsLocationDisabled element
include('elements/materials/Device/MaterialsLocationDisabled')
MaterialsLocationDisabled('element', 'Location Disabled', 'an optional tech field')
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

' loads the MaterialsLocationDisabled element
include('elements/materials/Device/MaterialsLocationDisabled')
MaterialsLocationDisabled('element', 'Location Disabled', 'an optional tech field')
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

' loads the MaterialsLocationDisabled card
include('elements/materials/Device/MaterialsLocationDisabled')
MaterialsLocationDisabledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocationDisabled card
include('elements/materials/Device/MaterialsLocationDisabled')
MaterialsLocationDisabledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
