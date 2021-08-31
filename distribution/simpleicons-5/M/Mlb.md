# Mlb


```text
simpleicons-5/M/Mlb
```

```text
include('simpleicons-5/M/Mlb')
```



| Illustration | Mlb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mlb.png) | ![illustration for Mlb](../../simpleicons-5/M/Mlb.Local.png) |




## Mlb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mlb
include('simpleicons-5/M/Mlb')

' renders the element
Mlb('Mlb', 'Mlb', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mlb
include('simpleicons-5/M/Mlb')

' renders the element
Mlb('Mlb', 'Mlb', 'an optional tech label')
@enduml
```

