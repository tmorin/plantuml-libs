# Googlekeep


```text
simpleicons-14/G/Googlekeep
```

```text
include('simpleicons-14/G/Googlekeep')
```



| Illustration | Googlekeep |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlekeep.png) | ![illustration for Googlekeep](../../simpleicons-14/G/Googlekeep.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglekeepXs>`
- `<$GooglekeepSm>`
- `<$GooglekeepMd>`
- `<$GooglekeepLg>`





## Googlekeep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlekeep
include('simpleicons-14/G/Googlekeep')

' renders the element
Googlekeep('Googlekeep', 'Googlekeep', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlekeep
include('simpleicons-14/G/Googlekeep')

' renders the element
Googlekeep('Googlekeep', 'Googlekeep', 'an optional tech label', 'an optional description')
@enduml
```

