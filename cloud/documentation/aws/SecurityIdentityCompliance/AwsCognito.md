# AwsCognito
```text
elements/aws/SecurityIdentityCompliance/AwsCognito
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCognito icon](../../../icons/aws/SecurityIdentityCompliance/AwsCognito.png) | ![AwsCognito element](AwsCognito.element.png) | ![AwsCognito card](AwsCognito.card.png) |
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

' loads the AwsCognito element
include('elements/aws/SecurityIdentityCompliance/AwsCognito')
AwsCognito('element', 'Cognito', 'an optional tech field')
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

' loads the AwsCognito element
include('elements/aws/SecurityIdentityCompliance/AwsCognito')
AwsCognito('element', 'Cognito', 'an optional tech field')
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

' loads the AwsCognito card
include('elements/aws/SecurityIdentityCompliance/AwsCognito')
AwsCognitoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCognito card
include('elements/aws/SecurityIdentityCompliance/AwsCognito')
AwsCognitoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
