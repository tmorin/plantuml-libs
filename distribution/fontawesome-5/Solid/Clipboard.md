# Clipboard


```text
fontawesome-5/Solid/Clipboard
```

```text
include('fontawesome-5/Solid/Clipboard')
```



| Illustration | Clipboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Clipboard.png) | ![illustration for Clipboard](../../fontawesome-5/Solid/Clipboard.Local.png) |




## Clipboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Clipboard
include('fontawesome-5/Solid/Clipboard')

' renders the element
Clipboard('Clipboard', 'Clipboard', 'an optional tech label')
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

' loads the Item which embeds the element Clipboard
include('fontawesome-5/Solid/Clipboard')

' renders the element
Clipboard('Clipboard', 'Clipboard', 'an optional tech label')
@enduml
```

