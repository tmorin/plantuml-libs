# Bisecthosting


```text
simpleicons/B/Bisecthosting
```

```text
include('simpleicons/B/Bisecthosting')
```



| Illustration | Bisecthosting |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bisecthosting.png) | ![illustration for Bisecthosting](../../simpleicons/B/Bisecthosting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BisecthostingXs>`
- `<$BisecthostingSm>`
- `<$BisecthostingMd>`
- `<$BisecthostingLg>`





## Bisecthosting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bisecthosting
include('simpleicons/B/Bisecthosting')

' renders the element
Bisecthosting('Bisecthosting', 'Bisecthosting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bisecthosting
include('simpleicons/B/Bisecthosting')

' renders the element
Bisecthosting('Bisecthosting', 'Bisecthosting', 'an optional tech label', 'an optional description')
@enduml
```

