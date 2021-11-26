# Linux


```text
fontawesome-5/Brands/Linux
```

```text
include('fontawesome-5/Brands/Linux')
```



| Illustration | Linux |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Linux.png) | ![illustration for Linux](../../fontawesome-5/Brands/Linux.Local.png) |




## Linux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Linux
include('fontawesome-5/Brands/Linux')

' renders the element
Linux('Linux', 'Linux', 'an optional tech label')
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

' loads the Item which embeds the element Linux
include('fontawesome-5/Brands/Linux')

' renders the element
Linux('Linux', 'Linux', 'an optional tech label')
@enduml
```

