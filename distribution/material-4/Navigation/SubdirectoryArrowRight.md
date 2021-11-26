# SubdirectoryArrowRight


```text
material-4/Navigation/SubdirectoryArrowRight
```

```text
include('material-4/Navigation/SubdirectoryArrowRight')
```



| Illustration | SubdirectoryArrowRight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/SubdirectoryArrowRight.png) | ![illustration for SubdirectoryArrowRight](../../material-4/Navigation/SubdirectoryArrowRight.Local.png) |




## SubdirectoryArrowRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SubdirectoryArrowRight
include('material-4/Navigation/SubdirectoryArrowRight')

' renders the element
SubdirectoryArrowRight('SubdirectoryArrowRight', 'Subdirectory Arrow Right', 'an optional tech label')
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

' loads the Item which embeds the element SubdirectoryArrowRight
include('material-4/Navigation/SubdirectoryArrowRight')

' renders the element
SubdirectoryArrowRight('SubdirectoryArrowRight', 'Subdirectory Arrow Right', 'an optional tech label')
@enduml
```

