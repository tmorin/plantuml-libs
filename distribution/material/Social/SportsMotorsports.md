# SportsMotorsports


```text
material/Social/SportsMotorsports
```

```text
include('material/Social/SportsMotorsports')
```



| Illustration | SportsMotorsports |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SportsMotorsports.png) | ![illustration for SportsMotorsports](../../material/Social/SportsMotorsports.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsMotorsportsXs>`
- `<$SportsMotorsportsSm>`
- `<$SportsMotorsportsMd>`
- `<$SportsMotorsportsLg>`





## SportsMotorsports

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SportsMotorsports
include('material/Social/SportsMotorsports')

' renders the element
SportsMotorsports('SportsMotorsports', 'Sports Motorsports', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsMotorsports
include('material/Social/SportsMotorsports')

' renders the element
SportsMotorsports('SportsMotorsports', 'Sports Motorsports', 'an optional tech label', 'an optional description')
@enduml
```

