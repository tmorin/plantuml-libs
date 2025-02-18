# Confluence


```text
simpleicons-14/C/Confluence
```

```text
include('simpleicons-14/C/Confluence')
```



| Illustration | Confluence |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Confluence.png) | ![illustration for Confluence](../../simpleicons-14/C/Confluence.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConfluenceXs>`
- `<$ConfluenceSm>`
- `<$ConfluenceMd>`
- `<$ConfluenceLg>`





## Confluence

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Confluence
include('simpleicons-14/C/Confluence')

' renders the element
Confluence('Confluence', 'Confluence', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Confluence
include('simpleicons-14/C/Confluence')

' renders the element
Confluence('Confluence', 'Confluence', 'an optional tech label', 'an optional description')
@enduml
```

