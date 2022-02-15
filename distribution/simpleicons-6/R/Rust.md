# Rust


```text
simpleicons-6/R/Rust
```

```text
include('simpleicons-6/R/Rust')
```



| Illustration | Rust |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rust.png) | ![illustration for Rust](../../simpleicons-6/R/Rust.Local.png) |




## Rust

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rust
include('simpleicons-6/R/Rust')

' renders the element
Rust('Rust', 'Rust', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rust
include('simpleicons-6/R/Rust')

' renders the element
Rust('Rust', 'Rust', 'an optional tech label')
@enduml
```

