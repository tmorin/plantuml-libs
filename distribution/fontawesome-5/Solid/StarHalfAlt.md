# StarHalfAlt


```text
fontawesome-5/Solid/StarHalfAlt
```

```text
include('fontawesome-5/Solid/StarHalfAlt')
```



| Illustration | StarHalfAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/StarHalfAlt.png) | ![illustration for StarHalfAlt](../../fontawesome-5/Solid/StarHalfAlt.Local.png) |




## StarHalfAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StarHalfAlt
include('fontawesome-5/Solid/StarHalfAlt')

' renders the element
StarHalfAlt('StarHalfAlt', 'Star Half Alt', 'an optional tech label')
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

' loads the Item which embeds the element StarHalfAlt
include('fontawesome-5/Solid/StarHalfAlt')

' renders the element
StarHalfAlt('StarHalfAlt', 'Star Half Alt', 'an optional tech label')
@enduml
```

