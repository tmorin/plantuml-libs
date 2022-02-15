# Googlesearchconsole


```text
simpleicons-6/G/Googlesearchconsole
```

```text
include('simpleicons-6/G/Googlesearchconsole')
```



| Illustration | Googlesearchconsole |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlesearchconsole.png) | ![illustration for Googlesearchconsole](../../simpleicons-6/G/Googlesearchconsole.Local.png) |




## Googlesearchconsole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlesearchconsole
include('simpleicons-6/G/Googlesearchconsole')

' renders the element
Googlesearchconsole('Googlesearchconsole', 'Googlesearchconsole', 'an optional tech label')
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

' loads the Item which embeds the element Googlesearchconsole
include('simpleicons-6/G/Googlesearchconsole')

' renders the element
Googlesearchconsole('Googlesearchconsole', 'Googlesearchconsole', 'an optional tech label')
@enduml
```

