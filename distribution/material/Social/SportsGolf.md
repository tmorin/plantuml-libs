# SportsGolf


```text
material/Social/SportsGolf
```

```text
include('material/Social/SportsGolf')
```



| Illustration | SportsGolf |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SportsGolf.png) | ![illustration for SportsGolf](../../material/Social/SportsGolf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsGolfXs>`
- `<$SportsGolfSm>`
- `<$SportsGolfMd>`
- `<$SportsGolfLg>`





## SportsGolf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SportsGolf
include('material/Social/SportsGolf')

' renders the element
SportsGolf('SportsGolf', 'Sports Golf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsGolf
include('material/Social/SportsGolf')

' renders the element
SportsGolf('SportsGolf', 'Sports Golf', 'an optional tech label', 'an optional description')
@enduml
```

