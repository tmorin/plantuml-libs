# Gitbook


```text
simpleicons-5/G/Gitbook
```

```text
include('simpleicons-5/G/Gitbook')
```



| Illustration | Gitbook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gitbook.png) | ![illustration for Gitbook](../../simpleicons-5/G/Gitbook.Local.png) |




## Gitbook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gitbook
include('simpleicons-5/G/Gitbook')

' renders the element
Gitbook('Gitbook', 'Gitbook', 'an optional tech label')
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

' loads the Item which embeds the element Gitbook
include('simpleicons-5/G/Gitbook')

' renders the element
Gitbook('Gitbook', 'Gitbook', 'an optional tech label')
@enduml
```

