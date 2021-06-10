# Ad


```text
fontawesome-5/Solid/Ad
```

```text
include('fontawesome-5/Solid/Ad')
```



| Illustration | Ad |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Ad.png) | ![illustration for Ad](../../fontawesome-5/Solid/Ad.Local.png) |




## Ad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ad
include('fontawesome-5/Solid/Ad')

' renders the element
Ad('Ad', 'Ad', 'an optional tech label')
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

' loads the Item which embeds the element Ad
include('fontawesome-5/Solid/Ad')

' renders the element
Ad('Ad', 'Ad', 'an optional tech label')
@enduml
```

