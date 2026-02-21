# Appletv


```text
simpleicons/A/Appletv
```

```text
include('simpleicons/A/Appletv')
```



| Illustration | Appletv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Appletv.png) | ![illustration for Appletv](../../simpleicons/A/Appletv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppletvXs>`
- `<$AppletvSm>`
- `<$AppletvMd>`
- `<$AppletvLg>`





## Appletv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Appletv
include('simpleicons/A/Appletv')

' renders the element
Appletv('Appletv', 'Appletv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Appletv
include('simpleicons/A/Appletv')

' renders the element
Appletv('Appletv', 'Appletv', 'an optional tech label', 'an optional description')
@enduml
```

