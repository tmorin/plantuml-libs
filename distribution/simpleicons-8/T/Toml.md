# Toml


```text
simpleicons-8/T/Toml
```

```text
include('simpleicons-8/T/Toml')
```



| Illustration | Toml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Toml.png) | ![illustration for Toml](../../simpleicons-8/T/Toml.Local.png) |




## Toml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Toml
include('simpleicons-8/T/Toml')

' renders the element
Toml('Toml', 'Toml', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Toml
include('simpleicons-8/T/Toml')

' renders the element
Toml('Toml', 'Toml', 'an optional tech label', 'an optional description')
@enduml
```

