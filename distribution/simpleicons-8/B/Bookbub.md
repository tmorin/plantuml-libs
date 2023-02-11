# Bookbub


```text
simpleicons-8/B/Bookbub
```

```text
include('simpleicons-8/B/Bookbub')
```



| Illustration | Bookbub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bookbub.png) | ![illustration for Bookbub](../../simpleicons-8/B/Bookbub.Local.png) |




## Bookbub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bookbub
include('simpleicons-8/B/Bookbub')

' renders the element
Bookbub('Bookbub', 'Bookbub', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bookbub
include('simpleicons-8/B/Bookbub')

' renders the element
Bookbub('Bookbub', 'Bookbub', 'an optional tech label', 'an optional description')
@enduml
```

