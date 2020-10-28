# AwsInternetAlt2
```text
elements/aws/General/AwsInternetAlt2
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsInternetAlt2 icon](../../../icons/aws/General/AwsInternetAlt2.png) | ![AwsInternetAlt2 element](AwsInternetAlt2.element.png) | ![AwsInternetAlt2 card](AwsInternetAlt2.card.png) |
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

' loads the AwsInternetAlt2 element
include('elements/aws/General/AwsInternetAlt2')
AwsInternetAlt2('element', 'Internet Alt2', 'an optional tech field')
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

' loads the AwsInternetAlt2 element
include('elements/aws/General/AwsInternetAlt2')
AwsInternetAlt2('element', 'Internet Alt2', 'an optional tech field')
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

' loads the AwsInternetAlt2 card
include('elements/aws/General/AwsInternetAlt2')
AwsInternetAlt2Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsInternetAlt2 card
include('elements/aws/General/AwsInternetAlt2')
AwsInternetAlt2Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
