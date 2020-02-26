# AwsSingleSignOn
```text
elements/aws/SecurityIdentityCompliance/AwsSingleSignOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSingleSignOn icon](../../../icons/aws/SecurityIdentityCompliance/AwsSingleSignOn.png) | ![AwsSingleSignOn element](AwsSingleSignOn.element.png) | ![AwsSingleSignOn card](AwsSingleSignOn.card.png) |
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

' loads the AwsSingleSignOn element
include('elements/aws/SecurityIdentityCompliance/AwsSingleSignOn')
AwsSingleSignOn('element', 'Single Sign On', 'an optional tech field')
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

' loads the AwsSingleSignOn element
include('elements/aws/SecurityIdentityCompliance/AwsSingleSignOn')
AwsSingleSignOn('element', 'Single Sign On', 'an optional tech field')
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

' loads the AwsSingleSignOn card
include('elements/aws/SecurityIdentityCompliance/AwsSingleSignOn')
AwsSingleSignOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSingleSignOn card
include('elements/aws/SecurityIdentityCompliance/AwsSingleSignOn')
AwsSingleSignOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
