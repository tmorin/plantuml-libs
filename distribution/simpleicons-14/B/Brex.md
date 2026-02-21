# Brex


```text
simpleicons-14/B/Brex
```

```text
include('simpleicons-14/B/Brex')
```



| Illustration | Brex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Brex.png) | ![illustration for Brex](../../simpleicons-14/B/Brex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrexXs>`
- `<$BrexSm>`
- `<$BrexMd>`
- `<$BrexLg>`





## Brex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Brex
include('simpleicons-14/B/Brex')

' renders the element
Brex('Brex', 'Brex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brex
include('simpleicons-14/B/Brex')

' renders the element
Brex('Brex', 'Brex', 'an optional tech label', 'an optional description')
@enduml
```

