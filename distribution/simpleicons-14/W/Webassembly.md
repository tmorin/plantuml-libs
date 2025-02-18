# Webassembly


```text
simpleicons-14/W/Webassembly
```

```text
include('simpleicons-14/W/Webassembly')
```



| Illustration | Webassembly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Webassembly.png) | ![illustration for Webassembly](../../simpleicons-14/W/Webassembly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebassemblyXs>`
- `<$WebassemblySm>`
- `<$WebassemblyMd>`
- `<$WebassemblyLg>`





## Webassembly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Webassembly
include('simpleicons-14/W/Webassembly')

' renders the element
Webassembly('Webassembly', 'Webassembly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webassembly
include('simpleicons-14/W/Webassembly')

' renders the element
Webassembly('Webassembly', 'Webassembly', 'an optional tech label', 'an optional description')
@enduml
```

