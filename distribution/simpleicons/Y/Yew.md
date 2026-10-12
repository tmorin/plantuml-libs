# Yew


```text
simpleicons/Y/Yew
```

```text
include('simpleicons/Y/Yew')
```



| Illustration | Yew |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Y/Yew.png) | ![illustration for Yew](../../simpleicons/Y/Yew.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YewXs>`
- `<$YewSm>`
- `<$YewMd>`
- `<$YewLg>`





## Yew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Yew
include('simpleicons/Y/Yew')

' renders the element
Yew('Yew', 'Yew', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yew
include('simpleicons/Y/Yew')

' renders the element
Yew('Yew', 'Yew', 'an optional tech label', 'an optional description')
@enduml
```

