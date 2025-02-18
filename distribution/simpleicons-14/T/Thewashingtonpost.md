# Thewashingtonpost


```text
simpleicons-14/T/Thewashingtonpost
```

```text
include('simpleicons-14/T/Thewashingtonpost')
```



| Illustration | Thewashingtonpost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Thewashingtonpost.png) | ![illustration for Thewashingtonpost](../../simpleicons-14/T/Thewashingtonpost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThewashingtonpostXs>`
- `<$ThewashingtonpostSm>`
- `<$ThewashingtonpostMd>`
- `<$ThewashingtonpostLg>`





## Thewashingtonpost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thewashingtonpost
include('simpleicons-14/T/Thewashingtonpost')

' renders the element
Thewashingtonpost('Thewashingtonpost', 'Thewashingtonpost', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thewashingtonpost
include('simpleicons-14/T/Thewashingtonpost')

' renders the element
Thewashingtonpost('Thewashingtonpost', 'Thewashingtonpost', 'an optional tech label', 'an optional description')
@enduml
```

