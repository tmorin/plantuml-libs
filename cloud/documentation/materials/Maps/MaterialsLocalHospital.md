# MaterialsLocalHospital
```text
elements/materials/Maps/MaterialsLocalHospital
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalHospital icon](../../../icons/materials/Maps/MaterialsLocalHospital.png) | ![MaterialsLocalHospital element](MaterialsLocalHospital.element.png) | ![MaterialsLocalHospital card](MaterialsLocalHospital.card.png) |
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

' loads the MaterialsLocalHospital element
include('elements/materials/Maps/MaterialsLocalHospital')
MaterialsLocalHospital('element', 'Local Hospital', 'an optional tech field')
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

' loads the MaterialsLocalHospital element
include('elements/materials/Maps/MaterialsLocalHospital')
MaterialsLocalHospital('element', 'Local Hospital', 'an optional tech field')
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

' loads the MaterialsLocalHospital card
include('elements/materials/Maps/MaterialsLocalHospital')
MaterialsLocalHospitalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalHospital card
include('elements/materials/Maps/MaterialsLocalHospital')
MaterialsLocalHospitalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
