# SportsFootball


```text
material/Social/SportsFootball
```

```text
include('material/Social/SportsFootball')
```



| Illustration | SportsFootball |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SportsFootball.png) | ![illustration for SportsFootball](../../material/Social/SportsFootball.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsFootballXs>`
- `<$SportsFootballSm>`
- `<$SportsFootballMd>`
- `<$SportsFootballLg>`





## SportsFootball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SportsFootball
include('material/Social/SportsFootball')

' renders the element
SportsFootball('SportsFootball', 'Sports Football', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsFootball
include('material/Social/SportsFootball')

' renders the element
SportsFootball('SportsFootball', 'Sports Football', 'an optional tech label', 'an optional description')
@enduml
```

