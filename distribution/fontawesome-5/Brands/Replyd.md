# Replyd


```text
fontawesome-5/Brands/Replyd
```

```text
include('fontawesome-5/Brands/Replyd')
```



| Illustration | Replyd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Replyd.png) | ![illustration for Replyd](../../fontawesome-5/Brands/Replyd.Local.png) |




## Replyd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Replyd
include('fontawesome-5/Brands/Replyd')

' renders the element
Replyd('Replyd', 'Replyd', 'an optional tech label')
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

' loads the Item which embeds the element Replyd
include('fontawesome-5/Brands/Replyd')

' renders the element
Replyd('Replyd', 'Replyd', 'an optional tech label')
@enduml
```

