# CreativeCommonsBy


```text
fontawesome-6/Brands/CreativeCommonsBy
```

```text
include('fontawesome-6/Brands/CreativeCommonsBy')
```



| Illustration | CreativeCommonsBy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/CreativeCommonsBy.png) | ![illustration for CreativeCommonsBy](../../fontawesome-6/Brands/CreativeCommonsBy.Local.png) |




## CreativeCommonsBy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CreativeCommonsBy
include('fontawesome-6/Brands/CreativeCommonsBy')

' renders the element
CreativeCommonsBy('CreativeCommonsBy', 'Creative Commons By', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CreativeCommonsBy
include('fontawesome-6/Brands/CreativeCommonsBy')

' renders the element
CreativeCommonsBy('CreativeCommonsBy', 'Creative Commons By', 'an optional tech label', 'an optional description')
@enduml
```

