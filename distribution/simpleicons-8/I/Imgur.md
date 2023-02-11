# Imgur


```text
simpleicons-8/I/Imgur
```

```text
include('simpleicons-8/I/Imgur')
```



| Illustration | Imgur |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Imgur.png) | ![illustration for Imgur](../../simpleicons-8/I/Imgur.Local.png) |




## Imgur

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Imgur
include('simpleicons-8/I/Imgur')

' renders the element
Imgur('Imgur', 'Imgur', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Imgur
include('simpleicons-8/I/Imgur')

' renders the element
Imgur('Imgur', 'Imgur', 'an optional tech label', 'an optional description')
@enduml
```

