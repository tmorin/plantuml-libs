# Redash


```text
simpleicons/R/Redash
```

```text
include('simpleicons/R/Redash')
```



| Illustration | Redash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Redash.png) | ![illustration for Redash](../../simpleicons/R/Redash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedashXs>`
- `<$RedashSm>`
- `<$RedashMd>`
- `<$RedashLg>`





## Redash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redash
include('simpleicons/R/Redash')

' renders the element
Redash('Redash', 'Redash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redash
include('simpleicons/R/Redash')

' renders the element
Redash('Redash', 'Redash', 'an optional tech label', 'an optional description')
@enduml
```

