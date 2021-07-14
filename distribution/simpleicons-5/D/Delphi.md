# Delphi


```text
simpleicons-5/D/Delphi
```

```text
include('simpleicons-5/D/Delphi')
```



| Illustration | Delphi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Delphi.png) | ![illustration for Delphi](../../simpleicons-5/D/Delphi.Local.png) |




## Delphi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Delphi
include('simpleicons-5/D/Delphi')

' renders the element
Delphi('Delphi', 'Delphi', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Delphi
include('simpleicons-5/D/Delphi')

' renders the element
Delphi('Delphi', 'Delphi', 'an optional tech label')
@enduml
```

