# Indent


```text
fontawesome-5/Solid/Indent
```

```text
include('fontawesome-5/Solid/Indent')
```



| Illustration | Indent |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Indent.png) | ![illustration for Indent](../../fontawesome-5/Solid/Indent.Local.png) |




## Indent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Indent
include('fontawesome-5/Solid/Indent')

' renders the element
Indent('Indent', 'Indent', 'an optional tech label')
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

' loads the Item which embeds the element Indent
include('fontawesome-5/Solid/Indent')

' renders the element
Indent('Indent', 'Indent', 'an optional tech label')
@enduml
```

