# Googletv


```text
simpleicons-14/G/Googletv
```

```text
include('simpleicons-14/G/Googletv')
```



| Illustration | Googletv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googletv.png) | ![illustration for Googletv](../../simpleicons-14/G/Googletv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogletvXs>`
- `<$GoogletvSm>`
- `<$GoogletvMd>`
- `<$GoogletvLg>`





## Googletv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googletv
include('simpleicons-14/G/Googletv')

' renders the element
Googletv('Googletv', 'Googletv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googletv
include('simpleicons-14/G/Googletv')

' renders the element
Googletv('Googletv', 'Googletv', 'an optional tech label', 'an optional description')
@enduml
```

