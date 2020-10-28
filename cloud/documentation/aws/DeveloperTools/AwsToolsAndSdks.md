# AwsToolsAndSdks
```text
elements/aws/DeveloperTools/AwsToolsAndSdks
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsToolsAndSdks icon](../../../icons/aws/DeveloperTools/AwsToolsAndSdks.png) | ![AwsToolsAndSdks element](AwsToolsAndSdks.element.png) | ![AwsToolsAndSdks card](AwsToolsAndSdks.card.png) |
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

' loads the AwsToolsAndSdks element
include('elements/aws/DeveloperTools/AwsToolsAndSdks')
AwsToolsAndSdks('element', 'Tools And Sdks', 'an optional tech field')
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

' loads the AwsToolsAndSdks element
include('elements/aws/DeveloperTools/AwsToolsAndSdks')
AwsToolsAndSdks('element', 'Tools And Sdks', 'an optional tech field')
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

' loads the AwsToolsAndSdks card
include('elements/aws/DeveloperTools/AwsToolsAndSdks')
AwsToolsAndSdksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsToolsAndSdks card
include('elements/aws/DeveloperTools/AwsToolsAndSdks')
AwsToolsAndSdksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
