# Whitesource


```text
simpleicons-7/W/Whitesource
```

```text
include('simpleicons-7/W/Whitesource')
```



| Illustration | Whitesource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Whitesource.png) | ![illustration for Whitesource](../../simpleicons-7/W/Whitesource.Local.png) |




## Whitesource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Whitesource
include('simpleicons-7/W/Whitesource')

' renders the element
Whitesource('Whitesource', 'Whitesource', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Whitesource
include('simpleicons-7/W/Whitesource')

' renders the element
Whitesource('Whitesource', 'Whitesource', 'an optional tech label')
@enduml
```

