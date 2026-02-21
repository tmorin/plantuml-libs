# Enpass


```text
simpleicons/E/Enpass
```

```text
include('simpleicons/E/Enpass')
```



| Illustration | Enpass |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Enpass.png) | ![illustration for Enpass](../../simpleicons/E/Enpass.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnpassXs>`
- `<$EnpassSm>`
- `<$EnpassMd>`
- `<$EnpassLg>`





## Enpass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Enpass
include('simpleicons/E/Enpass')

' renders the element
Enpass('Enpass', 'Enpass', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Enpass
include('simpleicons/E/Enpass')

' renders the element
Enpass('Enpass', 'Enpass', 'an optional tech label', 'an optional description')
@enduml
```

