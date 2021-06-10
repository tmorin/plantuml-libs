# Paste


```text
fontawesome-5/Solid/Paste
```

```text
include('fontawesome-5/Solid/Paste')
```



| Illustration | Paste |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Paste.png) | ![illustration for Paste](../../fontawesome-5/Solid/Paste.Local.png) |




## Paste

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Paste
include('fontawesome-5/Solid/Paste')

' renders the element
Paste('Paste', 'Paste', 'an optional tech label')
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

' loads the Item which embeds the element Paste
include('fontawesome-5/Solid/Paste')

' renders the element
Paste('Paste', 'Paste', 'an optional tech label')
@enduml
```

