# Chainguard


```text
simpleicons-8/C/Chainguard
```

```text
include('simpleicons-8/C/Chainguard')
```



| Illustration | Chainguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Chainguard.png) | ![illustration for Chainguard](../../simpleicons-8/C/Chainguard.Local.png) |




## Chainguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Chainguard
include('simpleicons-8/C/Chainguard')

' renders the element
Chainguard('Chainguard', 'Chainguard', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Chainguard
include('simpleicons-8/C/Chainguard')

' renders the element
Chainguard('Chainguard', 'Chainguard', 'an optional tech label', 'an optional description')
@enduml
```

