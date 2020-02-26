# AwsIotHttpProtocol
```text
elements/aws/InternetOfThings/AwsIotHttpProtocol
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIotHttpProtocol icon](../../../icons/aws/InternetOfThings/AwsIotHttpProtocol.png) | ![AwsIotHttpProtocol element](AwsIotHttpProtocol.element.png) | ![AwsIotHttpProtocol card](AwsIotHttpProtocol.card.png) |
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

' loads the AwsIotHttpProtocol element
include('elements/aws/InternetOfThings/AwsIotHttpProtocol')
AwsIotHttpProtocol('element', 'Iot Http Protocol', 'an optional tech field')
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

' loads the AwsIotHttpProtocol element
include('elements/aws/InternetOfThings/AwsIotHttpProtocol')
AwsIotHttpProtocol('element', 'Iot Http Protocol', 'an optional tech field')
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

' loads the AwsIotHttpProtocol card
include('elements/aws/InternetOfThings/AwsIotHttpProtocol')
AwsIotHttpProtocolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIotHttpProtocol card
include('elements/aws/InternetOfThings/AwsIotHttpProtocol')
AwsIotHttpProtocolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
