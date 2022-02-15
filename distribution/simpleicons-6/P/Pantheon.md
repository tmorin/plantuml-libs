# Pantheon


```text
simpleicons-6/P/Pantheon
```

```text
include('simpleicons-6/P/Pantheon')
```



| Illustration | Pantheon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pantheon.png) | ![illustration for Pantheon](../../simpleicons-6/P/Pantheon.Local.png) |




## Pantheon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pantheon
include('simpleicons-6/P/Pantheon')

' renders the element
Pantheon('Pantheon', 'Pantheon', 'an optional tech label')
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

' loads the Item which embeds the element Pantheon
include('simpleicons-6/P/Pantheon')

' renders the element
Pantheon('Pantheon', 'Pantheon', 'an optional tech label')
@enduml
```

