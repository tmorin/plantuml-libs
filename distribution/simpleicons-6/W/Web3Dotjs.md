# Web3Dotjs


```text
simpleicons-6/W/Web3Dotjs
```

```text
include('simpleicons-6/W/Web3Dotjs')
```



| Illustration | Web3Dotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Web3Dotjs.png) | ![illustration for Web3Dotjs](../../simpleicons-6/W/Web3Dotjs.Local.png) |




## Web3Dotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Web3Dotjs
include('simpleicons-6/W/Web3Dotjs')

' renders the element
Web3Dotjs('Web3Dotjs', 'Web3 Dotjs', 'an optional tech label')
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

' loads the Item which embeds the element Web3Dotjs
include('simpleicons-6/W/Web3Dotjs')

' renders the element
Web3Dotjs('Web3Dotjs', 'Web3 Dotjs', 'an optional tech label')
@enduml
```

