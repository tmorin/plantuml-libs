# Stitcher


```text
simpleicons-14/S/Stitcher
```

```text
include('simpleicons-14/S/Stitcher')
```



| Illustration | Stitcher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stitcher.png) | ![illustration for Stitcher](../../simpleicons-14/S/Stitcher.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StitcherXs>`
- `<$StitcherSm>`
- `<$StitcherMd>`
- `<$StitcherLg>`





## Stitcher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stitcher
include('simpleicons-14/S/Stitcher')

' renders the element
Stitcher('Stitcher', 'Stitcher', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stitcher
include('simpleicons-14/S/Stitcher')

' renders the element
Stitcher('Stitcher', 'Stitcher', 'an optional tech label', 'an optional description')
@enduml
```

