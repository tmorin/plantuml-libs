# Redhat


```text
fontawesome-6/Brands/Redhat
```

```text
include('fontawesome-6/Brands/Redhat')
```



| Illustration | Redhat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Redhat.png) | ![illustration for Redhat](../../fontawesome-6/Brands/Redhat.Local.png) |




## Redhat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Redhat
include('fontawesome-6/Brands/Redhat')

' renders the element
Redhat('Redhat', 'Redhat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redhat
include('fontawesome-6/Brands/Redhat')

' renders the element
Redhat('Redhat', 'Redhat', 'an optional tech label', 'an optional description')
@enduml
```

