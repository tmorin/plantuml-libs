# AwsCloudsearch
```text
elements/aws/Analytics/AwsCloudsearch
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudsearch icon](../../../icons/aws/Analytics/AwsCloudsearch.png) | ![AwsCloudsearch element](AwsCloudsearch.element.png) | ![AwsCloudsearch card](AwsCloudsearch.card.png) |
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

' loads the AwsCloudsearch element
include('elements/aws/Analytics/AwsCloudsearch')
AwsCloudsearch('element', 'Cloudsearch', 'an optional tech field')
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

' loads the AwsCloudsearch element
include('elements/aws/Analytics/AwsCloudsearch')
AwsCloudsearch('element', 'Cloudsearch', 'an optional tech field')
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

' loads the AwsCloudsearch card
include('elements/aws/Analytics/AwsCloudsearch')
AwsCloudsearchCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudsearch card
include('elements/aws/Analytics/AwsCloudsearch')
AwsCloudsearchCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
