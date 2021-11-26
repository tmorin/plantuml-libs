# Anchor


```text
fontawesome-5/Solid/Anchor
```

```text
include('fontawesome-5/Solid/Anchor')
```



| Illustration | Anchor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Anchor.png) | ![illustration for Anchor](../../fontawesome-5/Solid/Anchor.Local.png) |




## Anchor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Anchor
include('fontawesome-5/Solid/Anchor')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Anchor
include('fontawesome-5/Solid/Anchor')

' renders the element
Anchor('Anchor', 'Anchor', 'an optional tech label')
@enduml
```

