# Dev


```text
fontawesome-5/Brands/Dev
```

```text
include('fontawesome-5/Brands/Dev')
```



| Illustration | Dev |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Dev.png) | ![illustration for Dev](../../fontawesome-5/Brands/Dev.Local.png) |




## Dev

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dev
include('fontawesome-5/Brands/Dev')

' renders the element
Dev('Dev', 'Dev', 'an optional tech label')
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

' loads the Item which embeds the element Dev
include('fontawesome-5/Brands/Dev')

' renders the element
Dev('Dev', 'Dev', 'an optional tech label')
@enduml
```

