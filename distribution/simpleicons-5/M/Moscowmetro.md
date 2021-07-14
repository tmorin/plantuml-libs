# Moscowmetro


```text
simpleicons-5/M/Moscowmetro
```

```text
include('simpleicons-5/M/Moscowmetro')
```



| Illustration | Moscowmetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Moscowmetro.png) | ![illustration for Moscowmetro](../../simpleicons-5/M/Moscowmetro.Local.png) |




## Moscowmetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Moscowmetro
include('simpleicons-5/M/Moscowmetro')

' renders the element
Moscowmetro('Moscowmetro', 'Moscowmetro', 'an optional tech label')
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

' loads the Item which embeds the element Moscowmetro
include('simpleicons-5/M/Moscowmetro')

' renders the element
Moscowmetro('Moscowmetro', 'Moscowmetro', 'an optional tech label')
@enduml
```

