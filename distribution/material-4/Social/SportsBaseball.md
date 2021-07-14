# SportsBaseball


```text
material-4/Social/SportsBaseball
```

```text
include('material-4/Social/SportsBaseball')
```



| Illustration | SportsBaseball |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsBaseball.png) | ![illustration for SportsBaseball](../../material-4/Social/SportsBaseball.Local.png) |




## SportsBaseball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsBaseball
include('material-4/Social/SportsBaseball')

' renders the element
SportsBaseball('SportsBaseball', 'Sports Baseball', 'an optional tech label')
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

' loads the Item which embeds the element SportsBaseball
include('material-4/Social/SportsBaseball')

' renders the element
SportsBaseball('SportsBaseball', 'Sports Baseball', 'an optional tech label')
@enduml
```

