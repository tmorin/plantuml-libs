# Bookbub


```text
simpleicons-6/B/Bookbub
```

```text
include('simpleicons-6/B/Bookbub')
```



| Illustration | Bookbub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bookbub.png) | ![illustration for Bookbub](../../simpleicons-6/B/Bookbub.Local.png) |




## Bookbub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bookbub
include('simpleicons-6/B/Bookbub')

' renders the element
Bookbub('Bookbub', 'Bookbub', 'an optional tech label')
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

' loads the Item which embeds the element Bookbub
include('simpleicons-6/B/Bookbub')

' renders the element
Bookbub('Bookbub', 'Bookbub', 'an optional tech label')
@enduml
```

