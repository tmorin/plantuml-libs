# MaterialsLocalPharmacy
```text
elements/materials/Maps/MaterialsLocalPharmacy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalPharmacy icon](../../../icons/materials/Maps/MaterialsLocalPharmacy.png) | ![MaterialsLocalPharmacy element](MaterialsLocalPharmacy.element.png) | ![MaterialsLocalPharmacy card](MaterialsLocalPharmacy.card.png) |
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

' loads the MaterialsLocalPharmacy element
include('elements/materials/Maps/MaterialsLocalPharmacy')
MaterialsLocalPharmacy('element', 'Local Pharmacy', 'an optional tech field')
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

' loads the MaterialsLocalPharmacy element
include('elements/materials/Maps/MaterialsLocalPharmacy')
MaterialsLocalPharmacy('element', 'Local Pharmacy', 'an optional tech field')
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

' loads the MaterialsLocalPharmacy card
include('elements/materials/Maps/MaterialsLocalPharmacy')
MaterialsLocalPharmacyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalPharmacy card
include('elements/materials/Maps/MaterialsLocalPharmacy')
MaterialsLocalPharmacyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
