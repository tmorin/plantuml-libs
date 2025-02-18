# Doordash


```text
simpleicons-14/D/Doordash
```

```text
include('simpleicons-14/D/Doordash')
```



| Illustration | Doordash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Doordash.png) | ![illustration for Doordash](../../simpleicons-14/D/Doordash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoordashXs>`
- `<$DoordashSm>`
- `<$DoordashMd>`
- `<$DoordashLg>`





## Doordash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Doordash
include('simpleicons-14/D/Doordash')

' renders the element
Doordash('Doordash', 'Doordash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Doordash
include('simpleicons-14/D/Doordash')

' renders the element
Doordash('Doordash', 'Doordash', 'an optional tech label', 'an optional description')
@enduml
```

