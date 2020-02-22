# MaterialsBrokenImage
```text
elements/materials/Image/MaterialsBrokenImage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBrokenImage icon](../../../icons/materials/Image/MaterialsBrokenImage.png) | ![MaterialsBrokenImage element](MaterialsBrokenImage.element.png) | ![MaterialsBrokenImage card](MaterialsBrokenImage.card.png) |
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

' loads the MaterialsBrokenImage element
include('elements/materials/Image/MaterialsBrokenImage')
MaterialsBrokenImage('element', 'Broken Image', 'an optional tech field')
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

' loads the MaterialsBrokenImage element
include('elements/materials/Image/MaterialsBrokenImage')
MaterialsBrokenImage('element', 'Broken Image', 'an optional tech field')
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

' loads the MaterialsBrokenImage card
include('elements/materials/Image/MaterialsBrokenImage')
MaterialsBrokenImageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBrokenImage card
include('elements/materials/Image/MaterialsBrokenImage')
MaterialsBrokenImageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
