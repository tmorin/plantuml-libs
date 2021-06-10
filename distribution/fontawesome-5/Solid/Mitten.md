# Mitten


```text
fontawesome-5/Solid/Mitten
```

```text
include('fontawesome-5/Solid/Mitten')
```



| Illustration | Mitten |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Mitten.png) | ![illustration for Mitten](../../fontawesome-5/Solid/Mitten.Local.png) |




## Mitten

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mitten
include('fontawesome-5/Solid/Mitten')

' renders the element
Mitten('Mitten', 'Mitten', 'an optional tech label')
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

' loads the Item which embeds the element Mitten
include('fontawesome-5/Solid/Mitten')

' renders the element
Mitten('Mitten', 'Mitten', 'an optional tech label')
@enduml
```

