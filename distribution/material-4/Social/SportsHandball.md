# SportsHandball


```text
material-4/Social/SportsHandball
```

```text
include('material-4/Social/SportsHandball')
```



| Illustration | SportsHandball |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsHandball.png) | ![illustration for SportsHandball](../../material-4/Social/SportsHandball.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsHandballXs>`
- `<$SportsHandballSm>`
- `<$SportsHandballMd>`
- `<$SportsHandballLg>`





## SportsHandball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsHandball
include('material-4/Social/SportsHandball')

' renders the element
SportsHandball('SportsHandball', 'Sports Handball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsHandball
include('material-4/Social/SportsHandball')

' renders the element
SportsHandball('SportsHandball', 'Sports Handball', 'an optional tech label', 'an optional description')
@enduml
```

