# Bvg


```text
simpleicons-8/B/Bvg
```

```text
include('simpleicons-8/B/Bvg')
```



| Illustration | Bvg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bvg.png) | ![illustration for Bvg](../../simpleicons-8/B/Bvg.Local.png) |




## Bvg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bvg
include('simpleicons-8/B/Bvg')

' renders the element
Bvg('Bvg', 'Bvg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bvg
include('simpleicons-8/B/Bvg')

' renders the element
Bvg('Bvg', 'Bvg', 'an optional tech label', 'an optional description')
@enduml
```

