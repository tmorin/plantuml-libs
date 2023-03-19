# PersonOutline


```text
material-4/Social/PersonOutline
```

```text
include('material-4/Social/PersonOutline')
```



| Illustration | PersonOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PersonOutline.png) | ![illustration for PersonOutline](../../material-4/Social/PersonOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonOutlineXs>`
- `<$PersonOutlineSm>`
- `<$PersonOutlineMd>`
- `<$PersonOutlineLg>`





## PersonOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PersonOutline
include('material-4/Social/PersonOutline')

' renders the element
PersonOutline('PersonOutline', 'Person Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonOutline
include('material-4/Social/PersonOutline')

' renders the element
PersonOutline('PersonOutline', 'Person Outline', 'an optional tech label', 'an optional description')
@enduml
```

