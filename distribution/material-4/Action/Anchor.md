# Anchor


```text
material-4/Action/Anchor
```

```text
include('material-4/Action/Anchor')
```



| Illustration | Anchor |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Anchor.png) | ![illustration for Anchor](../../material-4/Action/Anchor.Local.png) |




## Anchor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Anchor
include('material-4/Action/Anchor')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Anchor
include('material-4/Action/Anchor')

' renders the element
Anchor('Anchor', 'Anchor', 'an optional tech label')
@enduml
```

