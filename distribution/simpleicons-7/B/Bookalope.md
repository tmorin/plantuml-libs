# Bookalope


```text
simpleicons-7/B/Bookalope
```

```text
include('simpleicons-7/B/Bookalope')
```



| Illustration | Bookalope |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bookalope.png) | ![illustration for Bookalope](../../simpleicons-7/B/Bookalope.Local.png) |




## Bookalope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bookalope
include('simpleicons-7/B/Bookalope')

' renders the element
Bookalope('Bookalope', 'Bookalope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bookalope
include('simpleicons-7/B/Bookalope')

' renders the element
Bookalope('Bookalope', 'Bookalope', 'an optional tech label', 'an optional description')
@enduml
```

