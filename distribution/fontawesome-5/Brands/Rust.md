# Rust


```text
fontawesome-5/Brands/Rust
```

```text
include('fontawesome-5/Brands/Rust')
```



| Illustration | Rust |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Rust.png) | ![illustration for Rust](../../fontawesome-5/Brands/Rust.Local.png) |




## Rust

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Rust
include('fontawesome-5/Brands/Rust')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Rust
include('fontawesome-5/Brands/Rust')

' renders the element
Rust('Rust', 'Rust', 'an optional tech label')
@enduml
```

