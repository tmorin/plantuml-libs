# Lospec


```text
simpleicons-14/L/Lospec
```

```text
include('simpleicons-14/L/Lospec')
```



| Illustration | Lospec |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lospec.png) | ![illustration for Lospec](../../simpleicons-14/L/Lospec.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LospecXs>`
- `<$LospecSm>`
- `<$LospecMd>`
- `<$LospecLg>`





## Lospec

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lospec
include('simpleicons-14/L/Lospec')

' renders the element
Lospec('Lospec', 'Lospec', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lospec
include('simpleicons-14/L/Lospec')

' renders the element
Lospec('Lospec', 'Lospec', 'an optional tech label', 'an optional description')
@enduml
```

