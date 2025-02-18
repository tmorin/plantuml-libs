# Vtex


```text
simpleicons-14/V/Vtex
```

```text
include('simpleicons-14/V/Vtex')
```



| Illustration | Vtex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vtex.png) | ![illustration for Vtex](../../simpleicons-14/V/Vtex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VtexXs>`
- `<$VtexSm>`
- `<$VtexMd>`
- `<$VtexLg>`





## Vtex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vtex
include('simpleicons-14/V/Vtex')

' renders the element
Vtex('Vtex', 'Vtex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vtex
include('simpleicons-14/V/Vtex')

' renders the element
Vtex('Vtex', 'Vtex', 'an optional tech label', 'an optional description')
@enduml
```

