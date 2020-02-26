# MaterialsPhoneAndroid
```text
elements/materials/Hardware/MaterialsPhoneAndroid
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhoneAndroid icon](../../../icons/materials/Hardware/MaterialsPhoneAndroid.png) | ![MaterialsPhoneAndroid element](MaterialsPhoneAndroid.element.png) | ![MaterialsPhoneAndroid card](MaterialsPhoneAndroid.card.png) |
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

' loads the MaterialsPhoneAndroid element
include('elements/materials/Hardware/MaterialsPhoneAndroid')
MaterialsPhoneAndroid('element', 'Phone Android', 'an optional tech field')
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

' loads the MaterialsPhoneAndroid element
include('elements/materials/Hardware/MaterialsPhoneAndroid')
MaterialsPhoneAndroid('element', 'Phone Android', 'an optional tech field')
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

' loads the MaterialsPhoneAndroid card
include('elements/materials/Hardware/MaterialsPhoneAndroid')
MaterialsPhoneAndroidCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhoneAndroid card
include('elements/materials/Hardware/MaterialsPhoneAndroid')
MaterialsPhoneAndroidCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
