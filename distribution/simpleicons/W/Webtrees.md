# Webtrees


```text
simpleicons/W/Webtrees
```

```text
include('simpleicons/W/Webtrees')
```



| Illustration | Webtrees |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Webtrees.png) | ![illustration for Webtrees](../../simpleicons/W/Webtrees.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebtreesXs>`
- `<$WebtreesSm>`
- `<$WebtreesMd>`
- `<$WebtreesLg>`





## Webtrees

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Webtrees
include('simpleicons/W/Webtrees')

' renders the element
Webtrees('Webtrees', 'Webtrees', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webtrees
include('simpleicons/W/Webtrees')

' renders the element
Webtrees('Webtrees', 'Webtrees', 'an optional tech label', 'an optional description')
@enduml
```

