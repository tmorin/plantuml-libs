# Underline


```text
fontawesome-6/Solid/Underline
```

```text
include('fontawesome-6/Solid/Underline')
```



| Illustration | Underline |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Underline.png) | ![illustration for Underline](../../fontawesome-6/Solid/Underline.Local.png) |




## Underline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Underline
include('fontawesome-6/Solid/Underline')

' renders the element
Underline('Underline', 'Underline', 'an optional tech label')
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

' loads the Item which embeds the element Underline
include('fontawesome-6/Solid/Underline')

' renders the element
Underline('Underline', 'Underline', 'an optional tech label')
@enduml
```

