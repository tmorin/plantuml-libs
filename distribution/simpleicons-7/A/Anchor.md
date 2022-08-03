# Anchor


```text
simpleicons-7/A/Anchor
```

```text
include('simpleicons-7/A/Anchor')
```



| Illustration | Anchor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Anchor.png) | ![illustration for Anchor](../../simpleicons-7/A/Anchor.Local.png) |




## Anchor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Anchor
include('simpleicons-7/A/Anchor')

' renders the element
Anchor('Anchor', 'Anchor', 'an optional tech label')
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

' loads the Item which embeds the element Anchor
include('simpleicons-7/A/Anchor')

' renders the element
Anchor('Anchor', 'Anchor', 'an optional tech label')
@enduml
```
