# AwsMacie
```text
elements/aws/SecurityIdentityCompliance/AwsMacie
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsMacie icon](../../../icons/aws/SecurityIdentityCompliance/AwsMacie.png) | ![AwsMacie element](AwsMacie.element.png) | ![AwsMacie card](AwsMacie.card.png) |
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

' loads the AwsMacie element
include('elements/aws/SecurityIdentityCompliance/AwsMacie')
AwsMacie('element', 'Macie', 'an optional tech field')
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

' loads the AwsMacie element
include('elements/aws/SecurityIdentityCompliance/AwsMacie')
AwsMacie('element', 'Macie', 'an optional tech field')
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

' loads the AwsMacie card
include('elements/aws/SecurityIdentityCompliance/AwsMacie')
AwsMacieCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsMacie card
include('elements/aws/SecurityIdentityCompliance/AwsMacie')
AwsMacieCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
