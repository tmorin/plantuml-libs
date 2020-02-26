# AwsIotCamera
```text
elements/aws/InternetOfThings/AwsIotCamera
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotCamera icon](../../../icons/aws/InternetOfThings/AwsIotCamera.png) | ![AwsIotCamera element](AwsIotCamera.element.png) | ![AwsIotCamera card](AwsIotCamera.card.png) |
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

' loads the AwsIotCamera element
include('elements/aws/InternetOfThings/AwsIotCamera')
AwsIotCamera('element', 'Iot Camera', 'an optional tech field')
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

' loads the AwsIotCamera element
include('elements/aws/InternetOfThings/AwsIotCamera')
AwsIotCamera('element', 'Iot Camera', 'an optional tech field')
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

' loads the AwsIotCamera card
include('elements/aws/InternetOfThings/AwsIotCamera')
AwsIotCameraCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotCamera card
include('elements/aws/InternetOfThings/AwsIotCamera')
AwsIotCameraCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
