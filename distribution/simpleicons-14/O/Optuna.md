# Optuna


```text
simpleicons-14/O/Optuna
```

```text
include('simpleicons-14/O/Optuna')
```



| Illustration | Optuna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Optuna.png) | ![illustration for Optuna](../../simpleicons-14/O/Optuna.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OptunaXs>`
- `<$OptunaSm>`
- `<$OptunaMd>`
- `<$OptunaLg>`





## Optuna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Optuna
include('simpleicons-14/O/Optuna')

' renders the element
Optuna('Optuna', 'Optuna', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Optuna
include('simpleicons-14/O/Optuna')

' renders the element
Optuna('Optuna', 'Optuna', 'an optional tech label', 'an optional description')
@enduml
```

