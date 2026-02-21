# Restore


```text
material/Action/Restore
```

```text
include('material/Action/Restore')
```



| Illustration | Restore |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Restore.png) | ![illustration for Restore](../../material/Action/Restore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RestoreXs>`
- `<$RestoreSm>`
- `<$RestoreMd>`
- `<$RestoreLg>`





## Restore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Restore
include('material/Action/Restore')

' renders the element
Restore('Restore', 'Restore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Restore
include('material/Action/Restore')

' renders the element
Restore('Restore', 'Restore', 'an optional tech label', 'an optional description')
@enduml
```

