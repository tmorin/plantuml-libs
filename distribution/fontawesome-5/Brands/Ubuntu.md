# Ubuntu


```text
fontawesome-5/Brands/Ubuntu
```

```text
include('fontawesome-5/Brands/Ubuntu')
```



| Illustration | Ubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Ubuntu.png) | ![illustration for Ubuntu](../../fontawesome-5/Brands/Ubuntu.Local.png) |




## Ubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ubuntu
include('fontawesome-5/Brands/Ubuntu')

' renders the element
Ubuntu('Ubuntu', 'Ubuntu', 'an optional tech label')
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

' loads the Item which embeds the element Ubuntu
include('fontawesome-5/Brands/Ubuntu')

' renders the element
Ubuntu('Ubuntu', 'Ubuntu', 'an optional tech label')
@enduml
```

