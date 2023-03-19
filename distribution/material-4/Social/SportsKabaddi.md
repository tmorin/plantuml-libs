# SportsKabaddi


```text
material-4/Social/SportsKabaddi
```

```text
include('material-4/Social/SportsKabaddi')
```



| Illustration | SportsKabaddi |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SportsKabaddi.png) | ![illustration for SportsKabaddi](../../material-4/Social/SportsKabaddi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsKabaddiXs>`
- `<$SportsKabaddiSm>`
- `<$SportsKabaddiMd>`
- `<$SportsKabaddiLg>`





## SportsKabaddi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SportsKabaddi
include('material-4/Social/SportsKabaddi')

' renders the element
SportsKabaddi('SportsKabaddi', 'Sports Kabaddi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsKabaddi
include('material-4/Social/SportsKabaddi')

' renders the element
SportsKabaddi('SportsKabaddi', 'Sports Kabaddi', 'an optional tech label', 'an optional description')
@enduml
```

