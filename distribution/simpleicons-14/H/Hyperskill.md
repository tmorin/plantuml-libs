# Hyperskill


```text
simpleicons-14/H/Hyperskill
```

```text
include('simpleicons-14/H/Hyperskill')
```



| Illustration | Hyperskill |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hyperskill.png) | ![illustration for Hyperskill](../../simpleicons-14/H/Hyperskill.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HyperskillXs>`
- `<$HyperskillSm>`
- `<$HyperskillMd>`
- `<$HyperskillLg>`





## Hyperskill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hyperskill
include('simpleicons-14/H/Hyperskill')

' renders the element
Hyperskill('Hyperskill', 'Hyperskill', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hyperskill
include('simpleicons-14/H/Hyperskill')

' renders the element
Hyperskill('Hyperskill', 'Hyperskill', 'an optional tech label', 'an optional description')
@enduml
```

