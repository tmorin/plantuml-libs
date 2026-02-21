# ThumbUpAlt


```text
material/Social/ThumbUpAlt
```

```text
include('material/Social/ThumbUpAlt')
```



| Illustration | ThumbUpAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/ThumbUpAlt.png) | ![illustration for ThumbUpAlt](../../material/Social/ThumbUpAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThumbUpAltXs>`
- `<$ThumbUpAltSm>`
- `<$ThumbUpAltMd>`
- `<$ThumbUpAltLg>`





## ThumbUpAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ThumbUpAlt
include('material/Social/ThumbUpAlt')

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
include('material/bootstrap')

' loads the Item which embeds the element ThumbUpAlt
include('material/Social/ThumbUpAlt')

' renders the element
ThumbUpAlt('ThumbUpAlt', 'Thumb Up Alt', 'an optional tech label', 'an optional description')
@enduml
```

