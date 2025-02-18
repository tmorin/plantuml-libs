# Mlb


```text
simpleicons-14/M/Mlb
```

```text
include('simpleicons-14/M/Mlb')
```



| Illustration | Mlb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mlb.png) | ![illustration for Mlb](../../simpleicons-14/M/Mlb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MlbXs>`
- `<$MlbSm>`
- `<$MlbMd>`
- `<$MlbLg>`





## Mlb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mlb
include('simpleicons-14/M/Mlb')

' renders the element
Mlb('Mlb', 'Mlb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mlb
include('simpleicons-14/M/Mlb')

' renders the element
Mlb('Mlb', 'Mlb', 'an optional tech label', 'an optional description')
@enduml
```

