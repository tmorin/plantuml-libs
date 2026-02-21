# Quickreply


```text
material/Action/Quickreply
```

```text
include('material/Action/Quickreply')
```



| Illustration | Quickreply |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Quickreply.png) | ![illustration for Quickreply](../../material/Action/Quickreply.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuickreplyXs>`
- `<$QuickreplySm>`
- `<$QuickreplyMd>`
- `<$QuickreplyLg>`





## Quickreply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Quickreply
include('material/Action/Quickreply')

' renders the element
Quickreply('Quickreply', 'Quickreply', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Quickreply
include('material/Action/Quickreply')

' renders the element
Quickreply('Quickreply', 'Quickreply', 'an optional tech label', 'an optional description')
@enduml
```

