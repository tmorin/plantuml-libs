# Paddypower


```text
simpleicons-14/P/Paddypower
```

```text
include('simpleicons-14/P/Paddypower')
```



| Illustration | Paddypower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Paddypower.png) | ![illustration for Paddypower](../../simpleicons-14/P/Paddypower.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaddypowerXs>`
- `<$PaddypowerSm>`
- `<$PaddypowerMd>`
- `<$PaddypowerLg>`





## Paddypower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Paddypower
include('simpleicons-14/P/Paddypower')

' renders the element
Paddypower('Paddypower', 'Paddypower', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paddypower
include('simpleicons-14/P/Paddypower')

' renders the element
Paddypower('Paddypower', 'Paddypower', 'an optional tech label', 'an optional description')
@enduml
```

