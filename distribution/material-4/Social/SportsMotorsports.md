# SportsMotorsports


```text
material-4/Social/SportsMotorsports
```

```text
include('material-4/Social/SportsMotorsports')
```



| Illustration | SportsMotorsports |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsMotorsports.png) | ![illustration for SportsMotorsports](../../material-4/Social/SportsMotorsports.Local.png) |




## SportsMotorsports

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsMotorsports
include('material-4/Social/SportsMotorsports')

' renders the element
SportsMotorsports('SportsMotorsports', 'Sports Motorsports', 'an optional tech label')
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

' loads the Item which embeds the element SportsMotorsports
include('material-4/Social/SportsMotorsports')

' renders the element
SportsMotorsports('SportsMotorsports', 'Sports Motorsports', 'an optional tech label')
@enduml
```

