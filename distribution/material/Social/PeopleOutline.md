# PeopleOutline


```text
material/Social/PeopleOutline
```

```text
include('material/Social/PeopleOutline')
```



| Illustration | PeopleOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/PeopleOutline.png) | ![illustration for PeopleOutline](../../material/Social/PeopleOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeopleOutlineXs>`
- `<$PeopleOutlineSm>`
- `<$PeopleOutlineMd>`
- `<$PeopleOutlineLg>`





## PeopleOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PeopleOutline
include('material/Social/PeopleOutline')

' renders the element
PeopleOutline('PeopleOutline', 'People Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleOutline
include('material/Social/PeopleOutline')

' renders the element
PeopleOutline('PeopleOutline', 'People Outline', 'an optional tech label', 'an optional description')
@enduml
```

