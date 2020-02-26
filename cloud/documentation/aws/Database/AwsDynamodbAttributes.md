# AwsDynamodbAttributes
```text
elements/aws/Database/AwsDynamodbAttributes
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsDynamodbAttributes icon](../../../icons/aws/Database/AwsDynamodbAttributes.png) | ![AwsDynamodbAttributes element](AwsDynamodbAttributes.element.png) | ![AwsDynamodbAttributes card](AwsDynamodbAttributes.card.png) |
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

' loads the AwsDynamodbAttributes element
include('elements/aws/Database/AwsDynamodbAttributes')
AwsDynamodbAttributes('element', 'Dynamodb Attributes', 'an optional tech field')
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

' loads the AwsDynamodbAttributes element
include('elements/aws/Database/AwsDynamodbAttributes')
AwsDynamodbAttributes('element', 'Dynamodb Attributes', 'an optional tech field')
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

' loads the AwsDynamodbAttributes card
include('elements/aws/Database/AwsDynamodbAttributes')
AwsDynamodbAttributesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsDynamodbAttributes card
include('elements/aws/Database/AwsDynamodbAttributes')
AwsDynamodbAttributesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
