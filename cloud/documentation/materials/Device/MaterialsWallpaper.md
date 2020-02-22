# MaterialsWallpaper
```text
elements/materials/Device/MaterialsWallpaper
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsWallpaper icon](../../../icons/materials/Device/MaterialsWallpaper.png) | ![MaterialsWallpaper element](MaterialsWallpaper.element.png) | ![MaterialsWallpaper card](MaterialsWallpaper.card.png) |
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

' loads the MaterialsWallpaper element
include('elements/materials/Device/MaterialsWallpaper')
MaterialsWallpaper('element', 'Wallpaper', 'an optional tech field')
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

' loads the MaterialsWallpaper element
include('elements/materials/Device/MaterialsWallpaper')
MaterialsWallpaper('element', 'Wallpaper', 'an optional tech field')
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

' loads the MaterialsWallpaper card
include('elements/materials/Device/MaterialsWallpaper')
MaterialsWallpaperCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsWallpaper card
include('elements/materials/Device/MaterialsWallpaper')
MaterialsWallpaperCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
