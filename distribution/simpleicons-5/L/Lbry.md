# Lbry


```text
simpleicons-5/L/Lbry
```

```text
include('simpleicons-5/L/Lbry')
```



| Illustration | Lbry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lbry.png) | ![illustration for Lbry](../../simpleicons-5/L/Lbry.Local.png) |




## Lbry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lbry
include('simpleicons-5/L/Lbry')

' renders the element
Lbry('Lbry', 'Lbry', 'an optional tech label')
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

' loads the Item which embeds the element Lbry
include('simpleicons-5/L/Lbry')

' renders the element
Lbry('Lbry', 'Lbry', 'an optional tech label')
@enduml
```

