# Htmx


```text
simpleicons-14/H/Htmx
```

```text
include('simpleicons-14/H/Htmx')
```



| Illustration | Htmx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Htmx.png) | ![illustration for Htmx](../../simpleicons-14/H/Htmx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HtmxXs>`
- `<$HtmxSm>`
- `<$HtmxMd>`
- `<$HtmxLg>`





## Htmx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Htmx
include('simpleicons-14/H/Htmx')

' renders the element
Htmx('Htmx', 'Htmx', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Htmx
include('simpleicons-14/H/Htmx')

' renders the element
Htmx('Htmx', 'Htmx', 'an optional tech label', 'an optional description')
@enduml
```

