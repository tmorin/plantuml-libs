# Opentofu


```text
simpleicons/O/Opentofu
```

```text
include('simpleicons/O/Opentofu')
```



| Illustration | Opentofu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opentofu.png) | ![illustration for Opentofu](../../simpleicons/O/Opentofu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpentofuXs>`
- `<$OpentofuSm>`
- `<$OpentofuMd>`
- `<$OpentofuLg>`





## Opentofu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opentofu
include('simpleicons/O/Opentofu')

' renders the element
Opentofu('Opentofu', 'Opentofu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opentofu
include('simpleicons/O/Opentofu')

' renders the element
Opentofu('Opentofu', 'Opentofu', 'an optional tech label', 'an optional description')
@enduml
```

