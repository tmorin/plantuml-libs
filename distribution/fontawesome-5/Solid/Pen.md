# Pen


```text
fontawesome-5/Solid/Pen
```

```text
include('fontawesome-5/Solid/Pen')
```



| Illustration | Pen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Pen.png) | ![illustration for Pen](../../fontawesome-5/Solid/Pen.Local.png) |




## Pen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Pen
include('fontawesome-5/Solid/Pen')

' renders the element
Pen('Pen', 'Pen', 'an optional tech label')
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

' loads the Item which embeds the element Pen
include('fontawesome-5/Solid/Pen')

' renders the element
Pen('Pen', 'Pen', 'an optional tech label')
@enduml
```

