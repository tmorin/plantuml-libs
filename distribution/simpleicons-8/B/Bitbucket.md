# Bitbucket


```text
simpleicons-8/B/Bitbucket
```

```text
include('simpleicons-8/B/Bitbucket')
```



| Illustration | Bitbucket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bitbucket.png) | ![illustration for Bitbucket](../../simpleicons-8/B/Bitbucket.Local.png) |




## Bitbucket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bitbucket
include('simpleicons-8/B/Bitbucket')

' renders the element
Bitbucket('Bitbucket', 'Bitbucket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitbucket
include('simpleicons-8/B/Bitbucket')

' renders the element
Bitbucket('Bitbucket', 'Bitbucket', 'an optional tech label', 'an optional description')
@enduml
```

