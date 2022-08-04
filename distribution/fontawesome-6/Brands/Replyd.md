# Replyd


```text
fontawesome-6/Brands/Replyd
```

```text
include('fontawesome-6/Brands/Replyd')
```



| Illustration | Replyd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Replyd.png) | ![illustration for Replyd](../../fontawesome-6/Brands/Replyd.Local.png) |




## Replyd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Replyd
include('fontawesome-6/Brands/Replyd')

' renders the element
Replyd('Replyd', 'Replyd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Replyd
include('fontawesome-6/Brands/Replyd')

' renders the element
Replyd('Replyd', 'Replyd', 'an optional tech label', 'an optional description')
@enduml
```

