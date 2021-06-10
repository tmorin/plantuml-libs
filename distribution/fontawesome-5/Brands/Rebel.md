# Rebel


```text
fontawesome-5/Brands/Rebel
```

```text
include('fontawesome-5/Brands/Rebel')
```



| Illustration | Rebel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Rebel.png) | ![illustration for Rebel](../../fontawesome-5/Brands/Rebel.Local.png) |




## Rebel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Rebel
include('fontawesome-5/Brands/Rebel')

' renders the element
Rebel('Rebel', 'Rebel', 'an optional tech label')
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

' loads the Item which embeds the element Rebel
include('fontawesome-5/Brands/Rebel')

' renders the element
Rebel('Rebel', 'Rebel', 'an optional tech label')
@enduml
```

