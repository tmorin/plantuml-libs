# Figshare


```text
simpleicons-5/F/Figshare
```

```text
include('simpleicons-5/F/Figshare')
```



| Illustration | Figshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Figshare.png) | ![illustration for Figshare](../../simpleicons-5/F/Figshare.Local.png) |




## Figshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Figshare
include('simpleicons-5/F/Figshare')

' renders the element
Figshare('Figshare', 'Figshare', 'an optional tech label')
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

' loads the Item which embeds the element Figshare
include('simpleicons-5/F/Figshare')

' renders the element
Figshare('Figshare', 'Figshare', 'an optional tech label')
@enduml
```

