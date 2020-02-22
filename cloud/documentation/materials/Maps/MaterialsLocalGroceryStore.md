# MaterialsLocalGroceryStore
```text
elements/materials/Maps/MaterialsLocalGroceryStore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalGroceryStore icon](../../../icons/materials/Maps/MaterialsLocalGroceryStore.png) | ![MaterialsLocalGroceryStore element](MaterialsLocalGroceryStore.element.png) | ![MaterialsLocalGroceryStore card](MaterialsLocalGroceryStore.card.png) |
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

' loads the MaterialsLocalGroceryStore element
include('elements/materials/Maps/MaterialsLocalGroceryStore')
MaterialsLocalGroceryStore('element', 'Local Grocery Store', 'an optional tech field')
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

' loads the MaterialsLocalGroceryStore element
include('elements/materials/Maps/MaterialsLocalGroceryStore')
MaterialsLocalGroceryStore('element', 'Local Grocery Store', 'an optional tech field')
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

' loads the MaterialsLocalGroceryStore card
include('elements/materials/Maps/MaterialsLocalGroceryStore')
MaterialsLocalGroceryStoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalGroceryStore card
include('elements/materials/Maps/MaterialsLocalGroceryStore')
MaterialsLocalGroceryStoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
