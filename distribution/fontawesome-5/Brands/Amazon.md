# Amazon


```text
fontawesome-5/Brands/Amazon
```

```text
include('fontawesome-5/Brands/Amazon')
```



| Illustration | Amazon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Amazon.png) | ![illustration for Amazon](../../fontawesome-5/Brands/Amazon.Local.png) |




## Amazon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Amazon
include('fontawesome-5/Brands/Amazon')

' renders the element
Amazon('Amazon', 'Amazon', 'an optional tech label')
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

' loads the Item which embeds the element Amazon
include('fontawesome-5/Brands/Amazon')

' renders the element
Amazon('Amazon', 'Amazon', 'an optional tech label')
@enduml
```

