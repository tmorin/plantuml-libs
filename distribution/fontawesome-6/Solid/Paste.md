# Paste


```text
fontawesome-6/Solid/Paste
```

```text
include('fontawesome-6/Solid/Paste')
```



| Illustration | Paste |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Paste.png) | ![illustration for Paste](../../fontawesome-6/Solid/Paste.Local.png) |




## Paste

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Paste
include('fontawesome-6/Solid/Paste')

' renders the element
Paste('Paste', 'Paste', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paste
include('fontawesome-6/Solid/Paste')

' renders the element
Paste('Paste', 'Paste', 'an optional tech label', 'an optional description')
@enduml
```

