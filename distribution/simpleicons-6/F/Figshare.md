# Figshare


```text
simpleicons-6/F/Figshare
```

```text
include('simpleicons-6/F/Figshare')
```



| Illustration | Figshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Figshare.png) | ![illustration for Figshare](../../simpleicons-6/F/Figshare.Local.png) |




## Figshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Figshare
include('simpleicons-6/F/Figshare')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Figshare
include('simpleicons-6/F/Figshare')

' renders the element
Figshare('Figshare', 'Figshare', 'an optional tech label')
@enduml
```

