# MaterialsBrightnessMedium
```text
elements/materials/Device/MaterialsBrightnessMedium
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBrightnessMedium icon](../../../icons/materials/Device/MaterialsBrightnessMedium.png) | ![MaterialsBrightnessMedium element](MaterialsBrightnessMedium.element.png) | ![MaterialsBrightnessMedium card](MaterialsBrightnessMedium.card.png) |
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

' loads the MaterialsBrightnessMedium element
include('elements/materials/Device/MaterialsBrightnessMedium')
MaterialsBrightnessMedium('element', 'Brightness Medium', 'an optional tech field')
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

' loads the MaterialsBrightnessMedium element
include('elements/materials/Device/MaterialsBrightnessMedium')
MaterialsBrightnessMedium('element', 'Brightness Medium', 'an optional tech field')
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

' loads the MaterialsBrightnessMedium card
include('elements/materials/Device/MaterialsBrightnessMedium')
MaterialsBrightnessMediumCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBrightnessMedium card
include('elements/materials/Device/MaterialsBrightnessMedium')
MaterialsBrightnessMediumCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
