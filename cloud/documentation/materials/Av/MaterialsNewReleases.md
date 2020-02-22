# MaterialsNewReleases
```text
elements/materials/Av/MaterialsNewReleases
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNewReleases icon](../../../icons/materials/Av/MaterialsNewReleases.png) | ![MaterialsNewReleases element](MaterialsNewReleases.element.png) | ![MaterialsNewReleases card](MaterialsNewReleases.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsNewReleases element
include('elements/materials/Av/MaterialsNewReleases')
MaterialsNewReleases('element', 'New Releases', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsNewReleases element
include('elements/materials/Av/MaterialsNewReleases')
MaterialsNewReleases('element', 'New Releases', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsNewReleases card
include('elements/materials/Av/MaterialsNewReleases')
MaterialsNewReleasesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsNewReleases card
include('elements/materials/Av/MaterialsNewReleases')
MaterialsNewReleasesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
