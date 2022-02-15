# Enpass


```text
simpleicons-6/E/Enpass
```

```text
include('simpleicons-6/E/Enpass')
```



| Illustration | Enpass |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Enpass.png) | ![illustration for Enpass](../../simpleicons-6/E/Enpass.Local.png) |




## Enpass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Enpass
include('simpleicons-6/E/Enpass')

' renders the element
Enpass('Enpass', 'Enpass', 'an optional tech label')
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

' loads the Item which embeds the element Enpass
include('simpleicons-6/E/Enpass')

' renders the element
Enpass('Enpass', 'Enpass', 'an optional tech label')
@enduml
```

