# AwsManagementConsole
```text
elements/aws/ManagementGovernance/AwsManagementConsole
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsManagementConsole icon](../../../icons/aws/ManagementGovernance/AwsManagementConsole.png) | ![AwsManagementConsole element](AwsManagementConsole.element.png) | ![AwsManagementConsole card](AwsManagementConsole.card.png) |
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
include('styles/aws')

' loads the AwsManagementConsole element
include('elements/aws/ManagementGovernance/AwsManagementConsole')
AwsManagementConsole('element', 'Management Console', 'an optional tech field')
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

' loads the AwsManagementConsole element
include('elements/aws/ManagementGovernance/AwsManagementConsole')
AwsManagementConsole('element', 'Management Console', 'an optional tech field')
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
include('styles/aws')

' loads the AwsManagementConsole card
include('elements/aws/ManagementGovernance/AwsManagementConsole')
AwsManagementConsoleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsManagementConsole card
include('elements/aws/ManagementGovernance/AwsManagementConsole')
AwsManagementConsoleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
