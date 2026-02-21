# Serverfault


```text
simpleicons/S/Serverfault
```

```text
include('simpleicons/S/Serverfault')
```



| Illustration | Serverfault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Serverfault.png) | ![illustration for Serverfault](../../simpleicons/S/Serverfault.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServerfaultXs>`
- `<$ServerfaultSm>`
- `<$ServerfaultMd>`
- `<$ServerfaultLg>`





## Serverfault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Serverfault
include('simpleicons/S/Serverfault')

' renders the element
Serverfault('Serverfault', 'Serverfault', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Serverfault
include('simpleicons/S/Serverfault')

' renders the element
Serverfault('Serverfault', 'Serverfault', 'an optional tech label', 'an optional description')
@enduml
```

