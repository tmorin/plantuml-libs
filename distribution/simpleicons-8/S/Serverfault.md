# Serverfault


```text
simpleicons-8/S/Serverfault
```

```text
include('simpleicons-8/S/Serverfault')
```



| Illustration | Serverfault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Serverfault.png) | ![illustration for Serverfault](../../simpleicons-8/S/Serverfault.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Serverfault
include('simpleicons-8/S/Serverfault')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Serverfault
include('simpleicons-8/S/Serverfault')

' renders the element
Serverfault('Serverfault', 'Serverfault', 'an optional tech label', 'an optional description')
@enduml
```

