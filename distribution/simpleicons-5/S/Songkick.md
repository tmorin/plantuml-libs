# Songkick


```text
simpleicons-5/S/Songkick
```

```text
include('simpleicons-5/S/Songkick')
```



| Illustration | Songkick |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Songkick.png) | ![illustration for Songkick](../../simpleicons-5/S/Songkick.Local.png) |




## Songkick

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Songkick
include('simpleicons-5/S/Songkick')

' renders the element
Songkick('Songkick', 'Songkick', 'an optional tech label')
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

' loads the Item which embeds the element Songkick
include('simpleicons-5/S/Songkick')

' renders the element
Songkick('Songkick', 'Songkick', 'an optional tech label')
@enduml
```

