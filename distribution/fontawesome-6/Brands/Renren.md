# Renren


```text
fontawesome-6/Brands/Renren
```

```text
include('fontawesome-6/Brands/Renren')
```



| Illustration | Renren |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Renren.png) | ![illustration for Renren](../../fontawesome-6/Brands/Renren.Local.png) |




## Renren

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Renren
include('fontawesome-6/Brands/Renren')

' renders the element
Renren('Renren', 'Renren', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Renren
include('fontawesome-6/Brands/Renren')

' renders the element
Renren('Renren', 'Renren', 'an optional tech label', 'an optional description')
@enduml
```

