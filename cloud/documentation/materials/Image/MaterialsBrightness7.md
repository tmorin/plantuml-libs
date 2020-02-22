# MaterialsBrightness7
```text
elements/materials/Image/MaterialsBrightness7
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBrightness7 icon](../../../icons/materials/Image/MaterialsBrightness7.png) | ![MaterialsBrightness7 element](MaterialsBrightness7.element.png) | ![MaterialsBrightness7 card](MaterialsBrightness7.card.png) |
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

' loads the MaterialsBrightness7 element
include('elements/materials/Image/MaterialsBrightness7')
MaterialsBrightness7('element', 'Brightness7', 'an optional tech field')
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

' loads the MaterialsBrightness7 element
include('elements/materials/Image/MaterialsBrightness7')
MaterialsBrightness7('element', 'Brightness7', 'an optional tech field')
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

' loads the MaterialsBrightness7 card
include('elements/materials/Image/MaterialsBrightness7')
MaterialsBrightness7Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBrightness7 card
include('elements/materials/Image/MaterialsBrightness7')
MaterialsBrightness7Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
