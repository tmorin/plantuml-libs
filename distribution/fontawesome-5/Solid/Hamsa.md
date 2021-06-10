# Hamsa


```text
fontawesome-5/Solid/Hamsa
```

```text
include('fontawesome-5/Solid/Hamsa')
```



| Illustration | Hamsa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hamsa.png) | ![illustration for Hamsa](../../fontawesome-5/Solid/Hamsa.Local.png) |




## Hamsa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hamsa
include('fontawesome-5/Solid/Hamsa')

' renders the element
Hamsa('Hamsa', 'Hamsa', 'an optional tech label')
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

' loads the Item which embeds the element Hamsa
include('fontawesome-5/Solid/Hamsa')

' renders the element
Hamsa('Hamsa', 'Hamsa', 'an optional tech label')
@enduml
```

