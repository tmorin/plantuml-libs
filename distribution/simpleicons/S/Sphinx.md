# Sphinx


```text
simpleicons/S/Sphinx
```

```text
include('simpleicons/S/Sphinx')
```



| Illustration | Sphinx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sphinx.png) | ![illustration for Sphinx](../../simpleicons/S/Sphinx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SphinxXs>`
- `<$SphinxSm>`
- `<$SphinxMd>`
- `<$SphinxLg>`





## Sphinx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sphinx
include('simpleicons/S/Sphinx')

' renders the element
Sphinx('Sphinx', 'Sphinx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sphinx
include('simpleicons/S/Sphinx')

' renders the element
Sphinx('Sphinx', 'Sphinx', 'an optional tech label', 'an optional description')
@enduml
```

