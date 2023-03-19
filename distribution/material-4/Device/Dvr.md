# Dvr


```text
material-4/Device/Dvr
```

```text
include('material-4/Device/Dvr')
```



| Illustration | Dvr |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/Dvr.png) | ![illustration for Dvr](../../material-4/Device/Dvr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DvrXs>`
- `<$DvrSm>`
- `<$DvrMd>`
- `<$DvrLg>`





## Dvr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Dvr
include('material-4/Device/Dvr')

' renders the element
Dvr('Dvr', 'Dvr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dvr
include('material-4/Device/Dvr')

' renders the element
Dvr('Dvr', 'Dvr', 'an optional tech label', 'an optional description')
@enduml
```

