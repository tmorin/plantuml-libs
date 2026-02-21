# Styledcomponents


```text
simpleicons/S/Styledcomponents
```

```text
include('simpleicons/S/Styledcomponents')
```



| Illustration | Styledcomponents |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Styledcomponents.png) | ![illustration for Styledcomponents](../../simpleicons/S/Styledcomponents.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StyledcomponentsXs>`
- `<$StyledcomponentsSm>`
- `<$StyledcomponentsMd>`
- `<$StyledcomponentsLg>`





## Styledcomponents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Styledcomponents
include('simpleicons/S/Styledcomponents')

' renders the element
Styledcomponents('Styledcomponents', 'Styledcomponents', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Styledcomponents
include('simpleicons/S/Styledcomponents')

' renders the element
Styledcomponents('Styledcomponents', 'Styledcomponents', 'an optional tech label', 'an optional description')
@enduml
```

