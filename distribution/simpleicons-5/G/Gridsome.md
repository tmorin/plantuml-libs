# Gridsome


```text
simpleicons-5/G/Gridsome
```

```text
include('simpleicons-5/G/Gridsome')
```



| Illustration | Gridsome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gridsome.png) | ![illustration for Gridsome](../../simpleicons-5/G/Gridsome.Local.png) |




## Gridsome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gridsome
include('simpleicons-5/G/Gridsome')

' renders the element
Gridsome('Gridsome', 'Gridsome', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gridsome
include('simpleicons-5/G/Gridsome')

' renders the element
Gridsome('Gridsome', 'Gridsome', 'an optional tech label')
@enduml
```

