# Mercurial


```text
simpleicons-5/M/Mercurial
```

```text
include('simpleicons-5/M/Mercurial')
```



| Illustration | Mercurial |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mercurial.png) | ![illustration for Mercurial](../../simpleicons-5/M/Mercurial.Local.png) |




## Mercurial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mercurial
include('simpleicons-5/M/Mercurial')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mercurial
include('simpleicons-5/M/Mercurial')

' renders the element
Mercurial('Mercurial', 'Mercurial', 'an optional tech label')
@enduml
```

