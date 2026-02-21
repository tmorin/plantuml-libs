# Firebase


```text
simpleicons/F/Firebase
```

```text
include('simpleicons/F/Firebase')
```



| Illustration | Firebase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Firebase.png) | ![illustration for Firebase](../../simpleicons/F/Firebase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FirebaseXs>`
- `<$FirebaseSm>`
- `<$FirebaseMd>`
- `<$FirebaseLg>`





## Firebase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Firebase
include('simpleicons/F/Firebase')

' renders the element
Firebase('Firebase', 'Firebase', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Firebase
include('simpleicons/F/Firebase')

' renders the element
Firebase('Firebase', 'Firebase', 'an optional tech label', 'an optional description')
@enduml
```

