# Freebsd


```text
fontawesome-6/Brands/Freebsd
```

```text
include('fontawesome-6/Brands/Freebsd')
```



| Illustration | Freebsd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Freebsd.png) | ![illustration for Freebsd](../../fontawesome-6/Brands/Freebsd.Local.png) |




## Freebsd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Freebsd
include('fontawesome-6/Brands/Freebsd')

' renders the element
Freebsd('Freebsd', 'Freebsd', 'an optional tech label')
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

' loads the Item which embeds the element Freebsd
include('fontawesome-6/Brands/Freebsd')

' renders the element
Freebsd('Freebsd', 'Freebsd', 'an optional tech label')
@enduml
```

