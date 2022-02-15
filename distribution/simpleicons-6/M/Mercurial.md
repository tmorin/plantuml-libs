# Mercurial


```text
simpleicons-6/M/Mercurial
```

```text
include('simpleicons-6/M/Mercurial')
```



| Illustration | Mercurial |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mercurial.png) | ![illustration for Mercurial](../../simpleicons-6/M/Mercurial.Local.png) |




## Mercurial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mercurial
include('simpleicons-6/M/Mercurial')

' renders the element
Mercurial('Mercurial', 'Mercurial', 'an optional tech label')
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

' loads the Item which embeds the element Mercurial
include('simpleicons-6/M/Mercurial')

' renders the element
Mercurial('Mercurial', 'Mercurial', 'an optional tech label')
@enduml
```

