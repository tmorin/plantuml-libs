# Jinja


```text
simpleicons/J/Jinja
```

```text
include('simpleicons/J/Jinja')
```



| Illustration | Jinja |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jinja.png) | ![illustration for Jinja](../../simpleicons/J/Jinja.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JinjaXs>`
- `<$JinjaSm>`
- `<$JinjaMd>`
- `<$JinjaLg>`





## Jinja

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jinja
include('simpleicons/J/Jinja')

' renders the element
Jinja('Jinja', 'Jinja', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jinja
include('simpleicons/J/Jinja')

' renders the element
Jinja('Jinja', 'Jinja', 'an optional tech label', 'an optional description')
@enduml
```

