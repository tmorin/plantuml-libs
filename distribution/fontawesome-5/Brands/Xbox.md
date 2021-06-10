# Xbox


```text
fontawesome-5/Brands/Xbox
```

```text
include('fontawesome-5/Brands/Xbox')
```



| Illustration | Xbox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Xbox.png) | ![illustration for Xbox](../../fontawesome-5/Brands/Xbox.Local.png) |




## Xbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Xbox
include('fontawesome-5/Brands/Xbox')

' renders the element
Xbox('Xbox', 'Xbox', 'an optional tech label')
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

' loads the Item which embeds the element Xbox
include('fontawesome-5/Brands/Xbox')

' renders the element
Xbox('Xbox', 'Xbox', 'an optional tech label')
@enduml
```

