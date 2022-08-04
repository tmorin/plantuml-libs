# Moscowmetro


```text
simpleicons-7/M/Moscowmetro
```

```text
include('simpleicons-7/M/Moscowmetro')
```



| Illustration | Moscowmetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Moscowmetro.png) | ![illustration for Moscowmetro](../../simpleicons-7/M/Moscowmetro.Local.png) |




## Moscowmetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Moscowmetro
include('simpleicons-7/M/Moscowmetro')

' renders the element
Moscowmetro('Moscowmetro', 'Moscowmetro', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Moscowmetro
include('simpleicons-7/M/Moscowmetro')

' renders the element
Moscowmetro('Moscowmetro', 'Moscowmetro', 'an optional tech label', 'an optional description')
@enduml
```

