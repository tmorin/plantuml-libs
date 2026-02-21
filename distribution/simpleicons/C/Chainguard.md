# Chainguard


```text
simpleicons/C/Chainguard
```

```text
include('simpleicons/C/Chainguard')
```



| Illustration | Chainguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chainguard.png) | ![illustration for Chainguard](../../simpleicons/C/Chainguard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChainguardXs>`
- `<$ChainguardSm>`
- `<$ChainguardMd>`
- `<$ChainguardLg>`





## Chainguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chainguard
include('simpleicons/C/Chainguard')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chainguard
include('simpleicons/C/Chainguard')

' renders the element
Chainguard('Chainguard', 'Chainguard', 'an optional tech label', 'an optional description')
@enduml
```

