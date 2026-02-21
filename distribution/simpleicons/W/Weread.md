# Weread


```text
simpleicons/W/Weread
```

```text
include('simpleicons/W/Weread')
```



| Illustration | Weread |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Weread.png) | ![illustration for Weread](../../simpleicons/W/Weread.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WereadXs>`
- `<$WereadSm>`
- `<$WereadMd>`
- `<$WereadLg>`





## Weread

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Weread
include('simpleicons/W/Weread')

' renders the element
Weread('Weread', 'Weread', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Weread
include('simpleicons/W/Weread')

' renders the element
Weread('Weread', 'Weread', 'an optional tech label', 'an optional description')
@enduml
```

