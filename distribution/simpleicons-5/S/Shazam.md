# Shazam


```text
simpleicons-5/S/Shazam
```

```text
include('simpleicons-5/S/Shazam')
```



| Illustration | Shazam |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Shazam.png) | ![illustration for Shazam](../../simpleicons-5/S/Shazam.Local.png) |




## Shazam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Shazam
include('simpleicons-5/S/Shazam')

' renders the element
Shazam('Shazam', 'Shazam', 'an optional tech label')
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

' loads the Item which embeds the element Shazam
include('simpleicons-5/S/Shazam')

' renders the element
Shazam('Shazam', 'Shazam', 'an optional tech label')
@enduml
```

