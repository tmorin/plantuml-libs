# Yammer


```text
fontawesome-5/Brands/Yammer
```

```text
include('fontawesome-5/Brands/Yammer')
```



| Illustration | Yammer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Yammer.png) | ![illustration for Yammer](../../fontawesome-5/Brands/Yammer.Local.png) |




## Yammer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Yammer
include('fontawesome-5/Brands/Yammer')

' renders the element
Yammer('Yammer', 'Yammer', 'an optional tech label')
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

' loads the Item which embeds the element Yammer
include('fontawesome-5/Brands/Yammer')

' renders the element
Yammer('Yammer', 'Yammer', 'an optional tech label')
@enduml
```

