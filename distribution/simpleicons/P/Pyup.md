# Pyup


```text
simpleicons/P/Pyup
```

```text
include('simpleicons/P/Pyup')
```



| Illustration | Pyup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pyup.png) | ![illustration for Pyup](../../simpleicons/P/Pyup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PyupXs>`
- `<$PyupSm>`
- `<$PyupMd>`
- `<$PyupLg>`





## Pyup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pyup
include('simpleicons/P/Pyup')

' renders the element
Pyup('Pyup', 'Pyup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pyup
include('simpleicons/P/Pyup')

' renders the element
Pyup('Pyup', 'Pyup', 'an optional tech label', 'an optional description')
@enduml
```

