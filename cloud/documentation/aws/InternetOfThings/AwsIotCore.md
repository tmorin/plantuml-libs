# AwsIotCore
```text
elements/aws/InternetOfThings/AwsIotCore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotCore icon](../../../icons/aws/InternetOfThings/AwsIotCore.png) | ![AwsIotCore element](AwsIotCore.element.png) | ![AwsIotCore card](AwsIotCore.card.png) |
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

' loads the AwsIotCore element
include('elements/aws/InternetOfThings/AwsIotCore')
AwsIotCore('element', 'Iot Core', 'an optional tech field')
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

' loads the AwsIotCore element
include('elements/aws/InternetOfThings/AwsIotCore')
AwsIotCore('element', 'Iot Core', 'an optional tech field')
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

' loads the AwsIotCore card
include('elements/aws/InternetOfThings/AwsIotCore')
AwsIotCoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotCore card
include('elements/aws/InternetOfThings/AwsIotCore')
AwsIotCoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
