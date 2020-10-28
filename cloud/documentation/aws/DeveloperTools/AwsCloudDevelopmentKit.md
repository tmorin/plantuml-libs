# AwsCloudDevelopmentKit
```text
elements/aws/DeveloperTools/AwsCloudDevelopmentKit
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudDevelopmentKit icon](../../../icons/aws/DeveloperTools/AwsCloudDevelopmentKit.png) | ![AwsCloudDevelopmentKit element](AwsCloudDevelopmentKit.element.png) | ![AwsCloudDevelopmentKit card](AwsCloudDevelopmentKit.card.png) |
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

' loads the AwsCloudDevelopmentKit element
include('elements/aws/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKit('element', 'Cloud Development Kit', 'an optional tech field')
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

' loads the AwsCloudDevelopmentKit element
include('elements/aws/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKit('element', 'Cloud Development Kit', 'an optional tech field')
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

' loads the AwsCloudDevelopmentKit card
include('elements/aws/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudDevelopmentKit card
include('elements/aws/DeveloperTools/AwsCloudDevelopmentKit')
AwsCloudDevelopmentKitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
