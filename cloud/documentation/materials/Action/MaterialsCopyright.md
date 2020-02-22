# MaterialsCopyright
```text
elements/materials/Action/MaterialsCopyright
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCopyright icon](../../../icons/materials/Action/MaterialsCopyright.png) | ![MaterialsCopyright element](MaterialsCopyright.element.png) | ![MaterialsCopyright card](MaterialsCopyright.card.png) |
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

' loads the MaterialsCopyright element
include('elements/materials/Action/MaterialsCopyright')
MaterialsCopyright('element', 'Copyright', 'an optional tech field')
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

' loads the MaterialsCopyright element
include('elements/materials/Action/MaterialsCopyright')
MaterialsCopyright('element', 'Copyright', 'an optional tech field')
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

' loads the MaterialsCopyright card
include('elements/materials/Action/MaterialsCopyright')
MaterialsCopyrightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCopyright card
include('elements/materials/Action/MaterialsCopyright')
MaterialsCopyrightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
