# Firebase


```text
simpleicons-5/F/Firebase
```

```text
include('simpleicons-5/F/Firebase')
```



| Illustration | Firebase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Firebase.png) | ![illustration for Firebase](../../simpleicons-5/F/Firebase.Local.png) |




## Firebase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Firebase
include('simpleicons-5/F/Firebase')

' renders the element
Firebase('Firebase', 'Firebase', 'an optional tech label')
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

' loads the Item which embeds the element Firebase
include('simpleicons-5/F/Firebase')

' renders the element
Firebase('Firebase', 'Firebase', 'an optional tech label')
@enduml
```

