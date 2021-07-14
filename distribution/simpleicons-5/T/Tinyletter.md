# Tinyletter


```text
simpleicons-5/T/Tinyletter
```

```text
include('simpleicons-5/T/Tinyletter')
```



| Illustration | Tinyletter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tinyletter.png) | ![illustration for Tinyletter](../../simpleicons-5/T/Tinyletter.Local.png) |




## Tinyletter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tinyletter
include('simpleicons-5/T/Tinyletter')

' renders the element
Tinyletter('Tinyletter', 'Tinyletter', 'an optional tech label')
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

' loads the Item which embeds the element Tinyletter
include('simpleicons-5/T/Tinyletter')

' renders the element
Tinyletter('Tinyletter', 'Tinyletter', 'an optional tech label')
@enduml
```

