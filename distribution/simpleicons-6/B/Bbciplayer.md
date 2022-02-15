# Bbciplayer


```text
simpleicons-6/B/Bbciplayer
```

```text
include('simpleicons-6/B/Bbciplayer')
```



| Illustration | Bbciplayer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bbciplayer.png) | ![illustration for Bbciplayer](../../simpleicons-6/B/Bbciplayer.Local.png) |




## Bbciplayer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bbciplayer
include('simpleicons-6/B/Bbciplayer')

' renders the element
Bbciplayer('Bbciplayer', 'Bbciplayer', 'an optional tech label')
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

' loads the Item which embeds the element Bbciplayer
include('simpleicons-6/B/Bbciplayer')

' renders the element
Bbciplayer('Bbciplayer', 'Bbciplayer', 'an optional tech label')
@enduml
```

