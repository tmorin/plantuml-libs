# Gitlfs


```text
simpleicons-6/G/Gitlfs
```

```text
include('simpleicons-6/G/Gitlfs')
```



| Illustration | Gitlfs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gitlfs.png) | ![illustration for Gitlfs](../../simpleicons-6/G/Gitlfs.Local.png) |




## Gitlfs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gitlfs
include('simpleicons-6/G/Gitlfs')

' renders the element
Gitlfs('Gitlfs', 'Gitlfs', 'an optional tech label')
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

' loads the Item which embeds the element Gitlfs
include('simpleicons-6/G/Gitlfs')

' renders the element
Gitlfs('Gitlfs', 'Gitlfs', 'an optional tech label')
@enduml
```

