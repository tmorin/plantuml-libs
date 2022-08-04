# ThumbUpAlt


```text
material-4/Social/ThumbUpAlt
```

```text
include('material-4/Social/ThumbUpAlt')
```



| Illustration | ThumbUpAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/ThumbUpAlt.png) | ![illustration for ThumbUpAlt](../../material-4/Social/ThumbUpAlt.Local.png) |




## ThumbUpAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ThumbUpAlt
include('material-4/Social/ThumbUpAlt')

' renders the element
ThumbUpAlt('ThumbUpAlt', 'Thumb Up Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThumbUpAlt
include('material-4/Social/ThumbUpAlt')

' renders the element
ThumbUpAlt('ThumbUpAlt', 'Thumb Up Alt', 'an optional tech label', 'an optional description')
@enduml
```

