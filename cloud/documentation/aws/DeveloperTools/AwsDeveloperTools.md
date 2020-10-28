# AwsDeveloperTools
```text
elements/aws/DeveloperTools/AwsDeveloperTools
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDeveloperTools icon](../../../icons/aws/DeveloperTools/AwsDeveloperTools.png) | ![AwsDeveloperTools element](AwsDeveloperTools.element.png) | ![AwsDeveloperTools card](AwsDeveloperTools.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsDeveloperTools element
include('elements/aws/DeveloperTools/AwsDeveloperTools')
AwsDeveloperTools('element', 'Developer Tools', 'an optional tech field')
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
include('styles/aws')

' loads the AwsDeveloperTools element
include('elements/aws/DeveloperTools/AwsDeveloperTools')
AwsDeveloperTools('element', 'Developer Tools', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsDeveloperTools card
include('elements/aws/DeveloperTools/AwsDeveloperTools')
AwsDeveloperToolsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/aws')

' loads the AwsDeveloperTools card
include('elements/aws/DeveloperTools/AwsDeveloperTools')
AwsDeveloperToolsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
