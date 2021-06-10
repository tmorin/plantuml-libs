# Paw


```text
fontawesome-5/Solid/Paw
```

```text
include('fontawesome-5/Solid/Paw')
```



| Illustration | Paw |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Paw.png) | ![illustration for Paw](../../fontawesome-5/Solid/Paw.Local.png) |




## Paw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Paw
include('fontawesome-5/Solid/Paw')

' renders the element
Paw('Paw', 'Paw', 'an optional tech label')
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

' loads the Item which embeds the element Paw
include('fontawesome-5/Solid/Paw')

' renders the element
Paw('Paw', 'Paw', 'an optional tech label')
@enduml
```

