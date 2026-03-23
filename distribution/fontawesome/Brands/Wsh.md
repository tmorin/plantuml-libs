# Wsh


```text
fontawesome/Brands/Wsh
```

```text
include('fontawesome/Brands/Wsh')
```



| Illustration | Wsh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Wsh.png) | ![illustration for Wsh](../../fontawesome/Brands/Wsh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WshXs>`
- `<$WshSm>`
- `<$WshMd>`
- `<$WshLg>`





## Wsh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wsh
include('fontawesome/Brands/Wsh')

' renders the element
Wsh('Wsh', 'Wsh', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wsh
include('fontawesome/Brands/Wsh')

' renders the element
Wsh('Wsh', 'Wsh', 'an optional tech label', 'an optional description')
@enduml
```

