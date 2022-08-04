# Laravel


```text
fontawesome-6/Brands/Laravel
```

```text
include('fontawesome-6/Brands/Laravel')
```



| Illustration | Laravel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Laravel.png) | ![illustration for Laravel](../../fontawesome-6/Brands/Laravel.Local.png) |




## Laravel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Laravel
include('fontawesome-6/Brands/Laravel')

' renders the element
Laravel('Laravel', 'Laravel', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Laravel
include('fontawesome-6/Brands/Laravel')

' renders the element
Laravel('Laravel', 'Laravel', 'an optional tech label', 'an optional description')
@enduml
```

