# Styledcomponents


```text
simpleicons-5/S/Styledcomponents
```

```text
include('simpleicons-5/S/Styledcomponents')
```



| Illustration | Styledcomponents |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Styledcomponents.png) | ![illustration for Styledcomponents](../../simpleicons-5/S/Styledcomponents.Local.png) |




## Styledcomponents

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Styledcomponents
include('simpleicons-5/S/Styledcomponents')

' renders the element
Styledcomponents('Styledcomponents', 'Styledcomponents', 'an optional tech label')
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

' loads the Item which embeds the element Styledcomponents
include('simpleicons-5/S/Styledcomponents')

' renders the element
Styledcomponents('Styledcomponents', 'Styledcomponents', 'an optional tech label')
@enduml
```

