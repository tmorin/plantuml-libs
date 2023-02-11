# Adobelightroomclassic


```text
simpleicons-8/A/Adobelightroomclassic
```

```text
include('simpleicons-8/A/Adobelightroomclassic')
```



| Illustration | Adobelightroomclassic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Adobelightroomclassic.png) | ![illustration for Adobelightroomclassic](../../simpleicons-8/A/Adobelightroomclassic.Local.png) |




## Adobelightroomclassic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Adobelightroomclassic
include('simpleicons-8/A/Adobelightroomclassic')

' renders the element
Adobelightroomclassic('Adobelightroomclassic', 'Adobelightroomclassic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adobelightroomclassic
include('simpleicons-8/A/Adobelightroomclassic')

' renders the element
Adobelightroomclassic('Adobelightroomclassic', 'Adobelightroomclassic', 'an optional tech label', 'an optional description')
@enduml
```

