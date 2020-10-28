# AwsCorporateDataCenter
```text
elements/aws/GroupIcons/AwsCorporateDataCenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCorporateDataCenter icon](../../../icons/aws/GroupIcons/AwsCorporateDataCenter.png) | ![AwsCorporateDataCenter element](AwsCorporateDataCenter.element.png) | ![AwsCorporateDataCenter card](AwsCorporateDataCenter.card.png) |
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

' loads the AwsCorporateDataCenter element
include('elements/aws/GroupIcons/AwsCorporateDataCenter')
AwsCorporateDataCenter('element', 'Corporate Data Center', 'an optional tech field')
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

' loads the AwsCorporateDataCenter element
include('elements/aws/GroupIcons/AwsCorporateDataCenter')
AwsCorporateDataCenter('element', 'Corporate Data Center', 'an optional tech field')
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

' loads the AwsCorporateDataCenter card
include('elements/aws/GroupIcons/AwsCorporateDataCenter')
AwsCorporateDataCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCorporateDataCenter card
include('elements/aws/GroupIcons/AwsCorporateDataCenter')
AwsCorporateDataCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
