# StackExchange


```text
fontawesome-5/Brands/StackExchange
```

```text
include('fontawesome-5/Brands/StackExchange')
```



| Illustration | StackExchange |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/StackExchange.png) | ![illustration for StackExchange](../../fontawesome-5/Brands/StackExchange.Local.png) |




## StackExchange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StackExchange
include('fontawesome-5/Brands/StackExchange')

' renders the element
StackExchange('StackExchange', 'Stack Exchange', 'an optional tech label')
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

' loads the Item which embeds the element StackExchange
include('fontawesome-5/Brands/StackExchange')

' renders the element
StackExchange('StackExchange', 'Stack Exchange', 'an optional tech label')
@enduml
```

