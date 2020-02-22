# AwsCloud9
```text
elements/aws/DeveloperTools/AwsCloud9
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloud9 icon](../../../icons/aws/DeveloperTools/AwsCloud9.png) | ![AwsCloud9 element](AwsCloud9.element.png) | ![AwsCloud9 card](AwsCloud9.card.png) |
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

' loads the AwsCloud9 element
include('elements/aws/DeveloperTools/AwsCloud9')
AwsCloud9('element', 'Cloud9', 'an optional tech field')
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

' loads the AwsCloud9 element
include('elements/aws/DeveloperTools/AwsCloud9')
AwsCloud9('element', 'Cloud9', 'an optional tech field')
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

' loads the AwsCloud9 card
include('elements/aws/DeveloperTools/AwsCloud9')
AwsCloud9Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloud9 card
include('elements/aws/DeveloperTools/AwsCloud9')
AwsCloud9Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
