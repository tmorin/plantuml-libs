# Stitcher


```text
simpleicons-6/S/Stitcher
```

```text
include('simpleicons-6/S/Stitcher')
```



| Illustration | Stitcher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Stitcher.png) | ![illustration for Stitcher](../../simpleicons-6/S/Stitcher.Local.png) |




## Stitcher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Stitcher
include('simpleicons-6/S/Stitcher')

' renders the element
Stitcher('Stitcher', 'Stitcher', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Stitcher
include('simpleicons-6/S/Stitcher')

' renders the element
Stitcher('Stitcher', 'Stitcher', 'an optional tech label')
@enduml
```

