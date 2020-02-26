# AwsIotSitewise
```text
elements/aws/InternetOfThings/AwsIotSitewise
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotSitewise icon](../../../icons/aws/InternetOfThings/AwsIotSitewise.png) | ![AwsIotSitewise element](AwsIotSitewise.element.png) | ![AwsIotSitewise card](AwsIotSitewise.card.png) |
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

' loads the AwsIotSitewise element
include('elements/aws/InternetOfThings/AwsIotSitewise')
AwsIotSitewise('element', 'Iot Sitewise', 'an optional tech field')
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

' loads the AwsIotSitewise element
include('elements/aws/InternetOfThings/AwsIotSitewise')
AwsIotSitewise('element', 'Iot Sitewise', 'an optional tech field')
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

' loads the AwsIotSitewise card
include('elements/aws/InternetOfThings/AwsIotSitewise')
AwsIotSitewiseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotSitewise card
include('elements/aws/InternetOfThings/AwsIotSitewise')
AwsIotSitewiseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
