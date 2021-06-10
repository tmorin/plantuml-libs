# Less


```text
fontawesome-5/Brands/Less
```

```text
include('fontawesome-5/Brands/Less')
```



| Illustration | Less |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Less.png) | ![illustration for Less](../../fontawesome-5/Brands/Less.Local.png) |




## Less

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Less
include('fontawesome-5/Brands/Less')

' renders the element
Less('Less', 'Less', 'an optional tech label')
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

' loads the Item which embeds the element Less
include('fontawesome-5/Brands/Less')

' renders the element
Less('Less', 'Less', 'an optional tech label')
@enduml
```

