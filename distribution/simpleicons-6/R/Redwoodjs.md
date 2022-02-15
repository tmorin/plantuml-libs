# Redwoodjs


```text
simpleicons-6/R/Redwoodjs
```

```text
include('simpleicons-6/R/Redwoodjs')
```



| Illustration | Redwoodjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Redwoodjs.png) | ![illustration for Redwoodjs](../../simpleicons-6/R/Redwoodjs.Local.png) |




## Redwoodjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Redwoodjs
include('simpleicons-6/R/Redwoodjs')

' renders the element
Redwoodjs('Redwoodjs', 'Redwoodjs', 'an optional tech label')
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

' loads the Item which embeds the element Redwoodjs
include('simpleicons-6/R/Redwoodjs')

' renders the element
Redwoodjs('Redwoodjs', 'Redwoodjs', 'an optional tech label')
@enduml
```

