# Qq


```text
fontawesome-5/Brands/Qq
```

```text
include('fontawesome-5/Brands/Qq')
```



| Illustration | Qq |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Qq.png) | ![illustration for Qq](../../fontawesome-5/Brands/Qq.Local.png) |




## Qq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Qq
include('fontawesome-5/Brands/Qq')

' renders the element
Qq('Qq', 'Qq', 'an optional tech label')
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

' loads the Item which embeds the element Qq
include('fontawesome-5/Brands/Qq')

' renders the element
Qq('Qq', 'Qq', 'an optional tech label')
@enduml
```

