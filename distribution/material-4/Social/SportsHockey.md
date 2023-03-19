# SportsHockey


```text
material-4/Social/SportsHockey
```

```text
include('material-4/Social/SportsHockey')
```



| Illustration | SportsHockey |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsHockey.png) | ![illustration for SportsHockey](../../material-4/Social/SportsHockey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsHockeyXs>`
- `<$SportsHockeySm>`
- `<$SportsHockeyMd>`
- `<$SportsHockeyLg>`





## SportsHockey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsHockey
include('material-4/Social/SportsHockey')

' renders the element
SportsHockey('SportsHockey', 'Sports Hockey', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsHockey
include('material-4/Social/SportsHockey')

' renders the element
SportsHockey('SportsHockey', 'Sports Hockey', 'an optional tech label', 'an optional description')
@enduml
```

