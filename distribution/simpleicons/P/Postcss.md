# Postcss


```text
simpleicons/P/Postcss
```

```text
include('simpleicons/P/Postcss')
```



| Illustration | Postcss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Postcss.png) | ![illustration for Postcss](../../simpleicons/P/Postcss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PostcssXs>`
- `<$PostcssSm>`
- `<$PostcssMd>`
- `<$PostcssLg>`





## Postcss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Postcss
include('simpleicons/P/Postcss')

' renders the element
Postcss('Postcss', 'Postcss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Postcss
include('simpleicons/P/Postcss')

' renders the element
Postcss('Postcss', 'Postcss', 'an optional tech label', 'an optional description')
@enduml
```

