# Centos


```text
fontawesome-6/Brands/Centos
```

```text
include('fontawesome-6/Brands/Centos')
```



| Illustration | Centos |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Centos.png) | ![illustration for Centos](../../fontawesome-6/Brands/Centos.Local.png) |




## Centos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Centos
include('fontawesome-6/Brands/Centos')

' renders the element
Centos('Centos', 'Centos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Centos
include('fontawesome-6/Brands/Centos')

' renders the element
Centos('Centos', 'Centos', 'an optional tech label', 'an optional description')
@enduml
```

