# _6FtApart


```text
material-4/Social/_6FtApart
```

```text
include('material-4/Social/_6FtApart')
```



| Illustration | _6FtApart |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/_6FtApart.png) | ![illustration for _6FtApart](../../material-4/Social/_6FtApart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$_6FtApartXs>`
- `<$_6FtApartSm>`
- `<$_6FtApartMd>`
- `<$_6FtApartLg>`





## _6FtApart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _6FtApart
include('material-4/Social/_6FtApart')

' renders the element
_6FtApart('6ftApart', '6ft Apart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element _6FtApart
include('material-4/Social/_6FtApart')

' renders the element
_6FtApart('6ftApart', '6ft Apart', 'an optional tech label', 'an optional description')
@enduml
```

