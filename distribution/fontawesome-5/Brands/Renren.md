# Renren


```text
fontawesome-5/Brands/Renren
```

```text
include('fontawesome-5/Brands/Renren')
```



| Illustration | Renren |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Renren.png) | ![illustration for Renren](../../fontawesome-5/Brands/Renren.Local.png) |




## Renren

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Renren
include('fontawesome-5/Brands/Renren')

' renders the element
Renren('Renren', 'Renren', 'an optional tech label')
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

' loads the Item which embeds the element Renren
include('fontawesome-5/Brands/Renren')

' renders the element
Renren('Renren', 'Renren', 'an optional tech label')
@enduml
```

