# Dochub


```text
fontawesome-5/Brands/Dochub
```

```text
include('fontawesome-5/Brands/Dochub')
```



| Illustration | Dochub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Dochub.png) | ![illustration for Dochub](../../fontawesome-5/Brands/Dochub.Local.png) |




## Dochub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dochub
include('fontawesome-5/Brands/Dochub')

' renders the element
Dochub('Dochub', 'Dochub', 'an optional tech label')
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

' loads the Item which embeds the element Dochub
include('fontawesome-5/Brands/Dochub')

' renders the element
Dochub('Dochub', 'Dochub', 'an optional tech label')
@enduml
```

