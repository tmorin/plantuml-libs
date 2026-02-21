# SubdirectoryArrowRight


```text
material/Navigation/SubdirectoryArrowRight
```

```text
include('material/Navigation/SubdirectoryArrowRight')
```



| Illustration | SubdirectoryArrowRight |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/SubdirectoryArrowRight.png) | ![illustration for SubdirectoryArrowRight](../../material/Navigation/SubdirectoryArrowRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SubdirectoryArrowRightXs>`
- `<$SubdirectoryArrowRightSm>`
- `<$SubdirectoryArrowRightMd>`
- `<$SubdirectoryArrowRightLg>`





## SubdirectoryArrowRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SubdirectoryArrowRight
include('material/Navigation/SubdirectoryArrowRight')

' renders the element
SubdirectoryArrowRight('SubdirectoryArrowRight', 'Subdirectory Arrow Right', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SubdirectoryArrowRight
include('material/Navigation/SubdirectoryArrowRight')

' renders the element
SubdirectoryArrowRight('SubdirectoryArrowRight', 'Subdirectory Arrow Right', 'an optional tech label', 'an optional description')
@enduml
```

