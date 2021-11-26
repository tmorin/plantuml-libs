# Bahai


```text
fontawesome-5/Solid/Bahai
```

```text
include('fontawesome-5/Solid/Bahai')
```



| Illustration | Bahai |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bahai.png) | ![illustration for Bahai](../../fontawesome-5/Solid/Bahai.Local.png) |




## Bahai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bahai
include('fontawesome-5/Solid/Bahai')

' renders the element
Bahai('Bahai', 'Bahai', 'an optional tech label')
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

' loads the Item which embeds the element Bahai
include('fontawesome-5/Solid/Bahai')

' renders the element
Bahai('Bahai', 'Bahai', 'an optional tech label')
@enduml
```

