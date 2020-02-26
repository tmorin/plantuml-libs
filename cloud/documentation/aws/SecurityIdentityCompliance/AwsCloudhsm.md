# AwsCloudhsm
```text
elements/aws/SecurityIdentityCompliance/AwsCloudhsm
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudhsm icon](../../../icons/aws/SecurityIdentityCompliance/AwsCloudhsm.png) | ![AwsCloudhsm element](AwsCloudhsm.element.png) | ![AwsCloudhsm card](AwsCloudhsm.card.png) |
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

' loads the AwsCloudhsm element
include('elements/aws/SecurityIdentityCompliance/AwsCloudhsm')
AwsCloudhsm('element', 'Cloudhsm', 'an optional tech field')
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

' loads the AwsCloudhsm element
include('elements/aws/SecurityIdentityCompliance/AwsCloudhsm')
AwsCloudhsm('element', 'Cloudhsm', 'an optional tech field')
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

' loads the AwsCloudhsm card
include('elements/aws/SecurityIdentityCompliance/AwsCloudhsm')
AwsCloudhsmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudhsm card
include('elements/aws/SecurityIdentityCompliance/AwsCloudhsm')
AwsCloudhsmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
