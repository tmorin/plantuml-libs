# Rust


```text
fontawesome-6/Brands/Rust
```

```text
include('fontawesome-6/Brands/Rust')
```



| Illustration | Rust |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Rust.png) | ![illustration for Rust](../../fontawesome-6/Brands/Rust.Local.png) |




## Rust

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Rust
include('fontawesome-6/Brands/Rust')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Rust
include('fontawesome-6/Brands/Rust')

' renders the element
Rust('Rust', 'Rust', 'an optional tech label')
@enduml
```

