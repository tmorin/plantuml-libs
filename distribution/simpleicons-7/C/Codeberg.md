# Codeberg


```text
simpleicons-7/C/Codeberg
```

```text
include('simpleicons-7/C/Codeberg')
```



| Illustration | Codeberg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Codeberg.png) | ![illustration for Codeberg](../../simpleicons-7/C/Codeberg.Local.png) |




## Codeberg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codeberg
include('simpleicons-7/C/Codeberg')

' renders the element
Codeberg('Codeberg', 'Codeberg', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codeberg
include('simpleicons-7/C/Codeberg')

' renders the element
Codeberg('Codeberg', 'Codeberg', 'an optional tech label', 'an optional description')
@enduml
```

