# Firstdraft


```text
fontawesome-5/Brands/Firstdraft
```

```text
include('fontawesome-5/Brands/Firstdraft')
```



| Illustration | Firstdraft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Firstdraft.png) | ![illustration for Firstdraft](../../fontawesome-5/Brands/Firstdraft.Local.png) |




## Firstdraft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Firstdraft
include('fontawesome-5/Brands/Firstdraft')

' renders the element
Firstdraft('Firstdraft', 'Firstdraft', 'an optional tech label')
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

' loads the Item which embeds the element Firstdraft
include('fontawesome-5/Brands/Firstdraft')

' renders the element
Firstdraft('Firstdraft', 'Firstdraft', 'an optional tech label')
@enduml
```

