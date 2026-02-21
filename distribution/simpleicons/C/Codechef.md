# Codechef


```text
simpleicons/C/Codechef
```

```text
include('simpleicons/C/Codechef')
```



| Illustration | Codechef |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Codechef.png) | ![illustration for Codechef](../../simpleicons/C/Codechef.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodechefXs>`
- `<$CodechefSm>`
- `<$CodechefMd>`
- `<$CodechefLg>`





## Codechef

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codechef
include('simpleicons/C/Codechef')

' renders the element
Codechef('Codechef', 'Codechef', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codechef
include('simpleicons/C/Codechef')

' renders the element
Codechef('Codechef', 'Codechef', 'an optional tech label', 'an optional description')
@enduml
```

