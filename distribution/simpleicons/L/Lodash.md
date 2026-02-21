# Lodash


```text
simpleicons/L/Lodash
```

```text
include('simpleicons/L/Lodash')
```



| Illustration | Lodash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lodash.png) | ![illustration for Lodash](../../simpleicons/L/Lodash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LodashXs>`
- `<$LodashSm>`
- `<$LodashMd>`
- `<$LodashLg>`





## Lodash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lodash
include('simpleicons/L/Lodash')

' renders the element
Lodash('Lodash', 'Lodash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lodash
include('simpleicons/L/Lodash')

' renders the element
Lodash('Lodash', 'Lodash', 'an optional tech label', 'an optional description')
@enduml
```

