# RestorePage


```text
material/Action/RestorePage
```

```text
include('material/Action/RestorePage')
```



| Illustration | RestorePage |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/RestorePage.png) | ![illustration for RestorePage](../../material/Action/RestorePage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RestorePageXs>`
- `<$RestorePageSm>`
- `<$RestorePageMd>`
- `<$RestorePageLg>`





## RestorePage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RestorePage
include('material/Action/RestorePage')

' renders the element
RestorePage('RestorePage', 'Restore Page', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RestorePage
include('material/Action/RestorePage')

' renders the element
RestorePage('RestorePage', 'Restore Page', 'an optional tech label', 'an optional description')
@enduml
```

