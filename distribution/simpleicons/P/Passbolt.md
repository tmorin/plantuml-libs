# Passbolt


```text
simpleicons/P/Passbolt
```

```text
include('simpleicons/P/Passbolt')
```



| Illustration | Passbolt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Passbolt.png) | ![illustration for Passbolt](../../simpleicons/P/Passbolt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PassboltXs>`
- `<$PassboltSm>`
- `<$PassboltMd>`
- `<$PassboltLg>`





## Passbolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Passbolt
include('simpleicons/P/Passbolt')

' renders the element
Passbolt('Passbolt', 'Passbolt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Passbolt
include('simpleicons/P/Passbolt')

' renders the element
Passbolt('Passbolt', 'Passbolt', 'an optional tech label', 'an optional description')
@enduml
```

