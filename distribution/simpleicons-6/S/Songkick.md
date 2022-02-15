# Songkick


```text
simpleicons-6/S/Songkick
```

```text
include('simpleicons-6/S/Songkick')
```



| Illustration | Songkick |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Songkick.png) | ![illustration for Songkick](../../simpleicons-6/S/Songkick.Local.png) |




## Songkick

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Songkick
include('simpleicons-6/S/Songkick')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Songkick
include('simpleicons-6/S/Songkick')

' renders the element
Songkick('Songkick', 'Songkick', 'an optional tech label')
@enduml
```

