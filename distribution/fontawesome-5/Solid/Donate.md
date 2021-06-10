# Donate


```text
fontawesome-5/Solid/Donate
```

```text
include('fontawesome-5/Solid/Donate')
```



| Illustration | Donate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Donate.png) | ![illustration for Donate](../../fontawesome-5/Solid/Donate.Local.png) |




## Donate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Donate
include('fontawesome-5/Solid/Donate')

' renders the element
Donate('Donate', 'Donate', 'an optional tech label')
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

' loads the Item which embeds the element Donate
include('fontawesome-5/Solid/Donate')

' renders the element
Donate('Donate', 'Donate', 'an optional tech label')
@enduml
```

