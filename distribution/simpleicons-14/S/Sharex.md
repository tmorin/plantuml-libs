# Sharex


```text
simpleicons-14/S/Sharex
```

```text
include('simpleicons-14/S/Sharex')
```



| Illustration | Sharex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sharex.png) | ![illustration for Sharex](../../simpleicons-14/S/Sharex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SharexXs>`
- `<$SharexSm>`
- `<$SharexMd>`
- `<$SharexLg>`





## Sharex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sharex
include('simpleicons-14/S/Sharex')

' renders the element
Sharex('Sharex', 'Sharex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sharex
include('simpleicons-14/S/Sharex')

' renders the element
Sharex('Sharex', 'Sharex', 'an optional tech label', 'an optional description')
@enduml
```

