# D3Dotjs


```text
simpleicons-6/D/D3Dotjs
```

```text
include('simpleicons-6/D/D3Dotjs')
```



| Illustration | D3Dotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/D3Dotjs.png) | ![illustration for D3Dotjs](../../simpleicons-6/D/D3Dotjs.Local.png) |




## D3Dotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element D3Dotjs
include('simpleicons-6/D/D3Dotjs')

' renders the element
D3Dotjs('D3Dotjs', 'D3 Dotjs', 'an optional tech label')
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

' loads the Item which embeds the element D3Dotjs
include('simpleicons-6/D/D3Dotjs')

' renders the element
D3Dotjs('D3Dotjs', 'D3 Dotjs', 'an optional tech label')
@enduml
```

