# Retropie


```text
simpleicons-14/R/Retropie
```

```text
include('simpleicons-14/R/Retropie')
```



| Illustration | Retropie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Retropie.png) | ![illustration for Retropie](../../simpleicons-14/R/Retropie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RetropieXs>`
- `<$RetropieSm>`
- `<$RetropieMd>`
- `<$RetropieLg>`





## Retropie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Retropie
include('simpleicons-14/R/Retropie')

' renders the element
Retropie('Retropie', 'Retropie', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Retropie
include('simpleicons-14/R/Retropie')

' renders the element
Retropie('Retropie', 'Retropie', 'an optional tech label', 'an optional description')
@enduml
```

