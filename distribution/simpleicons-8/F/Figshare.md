# Figshare


```text
simpleicons-8/F/Figshare
```

```text
include('simpleicons-8/F/Figshare')
```



| Illustration | Figshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Figshare.png) | ![illustration for Figshare](../../simpleicons-8/F/Figshare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FigshareXs>`
- `<$FigshareSm>`
- `<$FigshareMd>`
- `<$FigshareLg>`





## Figshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Figshare
include('simpleicons-8/F/Figshare')

' renders the element
Figshare('Figshare', 'Figshare', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Figshare
include('simpleicons-8/F/Figshare')

' renders the element
Figshare('Figshare', 'Figshare', 'an optional tech label', 'an optional description')
@enduml
```

