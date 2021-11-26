# ThumbDownAlt


```text
material-4/Social/ThumbDownAlt
```

```text
include('material-4/Social/ThumbDownAlt')
```



| Illustration | ThumbDownAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/ThumbDownAlt.png) | ![illustration for ThumbDownAlt](../../material-4/Social/ThumbDownAlt.Local.png) |




## ThumbDownAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ThumbDownAlt
include('material-4/Social/ThumbDownAlt')

' renders the element
ThumbDownAlt('ThumbDownAlt', 'Thumb Down Alt', 'an optional tech label')
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

' loads the Item which embeds the element ThumbDownAlt
include('material-4/Social/ThumbDownAlt')

' renders the element
ThumbDownAlt('ThumbDownAlt', 'Thumb Down Alt', 'an optional tech label')
@enduml
```

