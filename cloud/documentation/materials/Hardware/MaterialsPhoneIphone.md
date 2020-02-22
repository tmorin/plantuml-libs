# MaterialsPhoneIphone
```text
elements/materials/Hardware/MaterialsPhoneIphone
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhoneIphone icon](../../../icons/materials/Hardware/MaterialsPhoneIphone.png) | ![MaterialsPhoneIphone element](MaterialsPhoneIphone.element.png) | ![MaterialsPhoneIphone card](MaterialsPhoneIphone.card.png) |
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

' loads the MaterialsPhoneIphone element
include('elements/materials/Hardware/MaterialsPhoneIphone')
MaterialsPhoneIphone('element', 'Phone Iphone', 'an optional tech field')
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

' loads the MaterialsPhoneIphone element
include('elements/materials/Hardware/MaterialsPhoneIphone')
MaterialsPhoneIphone('element', 'Phone Iphone', 'an optional tech field')
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

' loads the MaterialsPhoneIphone card
include('elements/materials/Hardware/MaterialsPhoneIphone')
MaterialsPhoneIphoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhoneIphone card
include('elements/materials/Hardware/MaterialsPhoneIphone')
MaterialsPhoneIphoneCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
