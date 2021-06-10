# Bacon


```text
fontawesome-5/Solid/Bacon
```

```text
include('fontawesome-5/Solid/Bacon')
```



| Illustration | Bacon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bacon.png) | ![illustration for Bacon](../../fontawesome-5/Solid/Bacon.Local.png) |




## Bacon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bacon
include('fontawesome-5/Solid/Bacon')

' renders the element
Bacon('Bacon', 'Bacon', 'an optional tech label')
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

' loads the Item which embeds the element Bacon
include('fontawesome-5/Solid/Bacon')

' renders the element
Bacon('Bacon', 'Bacon', 'an optional tech label')
@enduml
```

