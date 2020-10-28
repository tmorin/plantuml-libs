# BrandNextcloud
```text
elements/brand/BrandNextcloud
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![BrandNextcloud icon](../../icons/brand/BrandNextcloud.png) | ![BrandNextcloud element](BrandNextcloud.element.png) | ![BrandNextcloud card](BrandNextcloud.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the BrandNextcloud element
include('elements/brand/BrandNextcloud')
BrandNextcloud('element', 'Nextcloud', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the BrandNextcloud element
include('elements/brand/BrandNextcloud')
BrandNextcloud('element', 'Nextcloud', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/perso"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the BrandNextcloud card
include('elements/brand/BrandNextcloud')
BrandNextcloudCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the BrandNextcloud card
include('elements/brand/BrandNextcloud')
BrandNextcloudCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
