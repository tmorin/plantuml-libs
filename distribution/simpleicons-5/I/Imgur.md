# Imgur


```text
simpleicons-5/I/Imgur
```

```text
include('simpleicons-5/I/Imgur')
```



| Illustration | Imgur |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Imgur.png) | ![illustration for Imgur](../../simpleicons-5/I/Imgur.Local.png) |




## Imgur

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Imgur
include('simpleicons-5/I/Imgur')

' renders the element
Imgur('Imgur', 'Imgur', 'an optional tech label')
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

' loads the Item which embeds the element Imgur
include('simpleicons-5/I/Imgur')

' renders the element
Imgur('Imgur', 'Imgur', 'an optional tech label')
@enduml
```

