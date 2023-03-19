# SubdirectoryArrowLeft


```text
material-4/Navigation/SubdirectoryArrowLeft
```

```text
include('material-4/Navigation/SubdirectoryArrowLeft')
```



| Illustration | SubdirectoryArrowLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/SubdirectoryArrowLeft.png) | ![illustration for SubdirectoryArrowLeft](../../material-4/Navigation/SubdirectoryArrowLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SubdirectoryArrowLeftXs>`
- `<$SubdirectoryArrowLeftSm>`
- `<$SubdirectoryArrowLeftMd>`
- `<$SubdirectoryArrowLeftLg>`





## SubdirectoryArrowLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SubdirectoryArrowLeft
include('material-4/Navigation/SubdirectoryArrowLeft')

' renders the element
SubdirectoryArrowLeft('SubdirectoryArrowLeft', 'Subdirectory Arrow Left', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SubdirectoryArrowLeft
include('material-4/Navigation/SubdirectoryArrowLeft')

' renders the element
SubdirectoryArrowLeft('SubdirectoryArrowLeft', 'Subdirectory Arrow Left', 'an optional tech label', 'an optional description')
@enduml
```

