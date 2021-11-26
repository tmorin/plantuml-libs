# Go


```text
simpleicons-5/G/Go
```

```text
include('simpleicons-5/G/Go')
```



| Illustration | Go |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Go.png) | ![illustration for Go](../../simpleicons-5/G/Go.Local.png) |




## Go

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Go
include('simpleicons-5/G/Go')

' renders the element
Go('Go', 'Go', 'an optional tech label')
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

' loads the Item which embeds the element Go
include('simpleicons-5/G/Go')

' renders the element
Go('Go', 'Go', 'an optional tech label')
@enduml
```

