# AwsCloudAlt
```text
elements/aws/GroupIcons/AwsCloudAlt
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudAlt icon](../../../icons/aws/GroupIcons/AwsCloudAlt.png) | ![AwsCloudAlt element](AwsCloudAlt.element.png) | ![AwsCloudAlt card](AwsCloudAlt.card.png) |
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

' loads the AwsCloudAlt element
include('elements/aws/GroupIcons/AwsCloudAlt')
AwsCloudAlt('element', 'Cloud Alt', 'an optional tech field')
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

' loads the AwsCloudAlt element
include('elements/aws/GroupIcons/AwsCloudAlt')
AwsCloudAlt('element', 'Cloud Alt', 'an optional tech field')
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

' loads the AwsCloudAlt card
include('elements/aws/GroupIcons/AwsCloudAlt')
AwsCloudAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudAlt card
include('elements/aws/GroupIcons/AwsCloudAlt')
AwsCloudAltCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
