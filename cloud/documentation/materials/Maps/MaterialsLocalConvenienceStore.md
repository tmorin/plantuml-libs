# MaterialsLocalConvenienceStore
```text
elements/materials/Maps/MaterialsLocalConvenienceStore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalConvenienceStore icon](../../../icons/materials/Maps/MaterialsLocalConvenienceStore.png) | ![MaterialsLocalConvenienceStore element](MaterialsLocalConvenienceStore.element.png) | ![MaterialsLocalConvenienceStore card](MaterialsLocalConvenienceStore.card.png) |
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

' loads the MaterialsLocalConvenienceStore element
include('elements/materials/Maps/MaterialsLocalConvenienceStore')
MaterialsLocalConvenienceStore('element', 'Local Convenience Store', 'an optional tech field')
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

' loads the MaterialsLocalConvenienceStore element
include('elements/materials/Maps/MaterialsLocalConvenienceStore')
MaterialsLocalConvenienceStore('element', 'Local Convenience Store', 'an optional tech field')
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

' loads the MaterialsLocalConvenienceStore card
include('elements/materials/Maps/MaterialsLocalConvenienceStore')
MaterialsLocalConvenienceStoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalConvenienceStore card
include('elements/materials/Maps/MaterialsLocalConvenienceStore')
MaterialsLocalConvenienceStoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
