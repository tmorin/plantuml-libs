# Deaf


```text
fontawesome-5/Solid/Deaf
```

```text
include('fontawesome-5/Solid/Deaf')
```



| Illustration | Deaf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Deaf.png) | ![illustration for Deaf](../../fontawesome-5/Solid/Deaf.Local.png) |




## Deaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Deaf
include('fontawesome-5/Solid/Deaf')

' renders the element
Deaf('Deaf', 'Deaf', 'an optional tech label')
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

' loads the Item which embeds the element Deaf
include('fontawesome-5/Solid/Deaf')

' renders the element
Deaf('Deaf', 'Deaf', 'an optional tech label')
@enduml
```

