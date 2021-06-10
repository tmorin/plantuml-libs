# Redhat


```text
fontawesome-5/Brands/Redhat
```

```text
include('fontawesome-5/Brands/Redhat')
```



| Illustration | Redhat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Redhat.png) | ![illustration for Redhat](../../fontawesome-5/Brands/Redhat.Local.png) |




## Redhat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Redhat
include('fontawesome-5/Brands/Redhat')

' renders the element
Redhat('Redhat', 'Redhat', 'an optional tech label')
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

' loads the Item which embeds the element Redhat
include('fontawesome-5/Brands/Redhat')

' renders the element
Redhat('Redhat', 'Redhat', 'an optional tech label')
@enduml
```

