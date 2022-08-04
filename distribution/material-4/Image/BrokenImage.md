# BrokenImage


```text
material-4/Image/BrokenImage
```

```text
include('material-4/Image/BrokenImage')
```



| Illustration | BrokenImage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/BrokenImage.png) | ![illustration for BrokenImage](../../material-4/Image/BrokenImage.Local.png) |




## BrokenImage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BrokenImage
include('material-4/Image/BrokenImage')

' renders the element
BrokenImage('BrokenImage', 'Broken Image', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BrokenImage
include('material-4/Image/BrokenImage')

' renders the element
BrokenImage('BrokenImage', 'Broken Image', 'an optional tech label', 'an optional description')
@enduml
```

