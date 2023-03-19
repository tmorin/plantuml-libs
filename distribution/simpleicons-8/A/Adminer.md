# Adminer


```text
simpleicons-8/A/Adminer
```

```text
include('simpleicons-8/A/Adminer')
```



| Illustration | Adminer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Adminer.png) | ![illustration for Adminer](../../simpleicons-8/A/Adminer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdminerXs>`
- `<$AdminerSm>`
- `<$AdminerMd>`
- `<$AdminerLg>`





## Adminer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adminer
include('simpleicons-8/A/Adminer')

' renders the element
Adminer('Adminer', 'Adminer', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adminer
include('simpleicons-8/A/Adminer')

' renders the element
Adminer('Adminer', 'Adminer', 'an optional tech label', 'an optional description')
@enduml
```

