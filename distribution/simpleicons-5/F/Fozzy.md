# Fozzy


```text
simpleicons-5/F/Fozzy
```

```text
include('simpleicons-5/F/Fozzy')
```



| Illustration | Fozzy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fozzy.png) | ![illustration for Fozzy](../../simpleicons-5/F/Fozzy.Local.png) |




## Fozzy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fozzy
include('simpleicons-5/F/Fozzy')

' renders the element
Fozzy('Fozzy', 'Fozzy', 'an optional tech label')
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

' loads the Item which embeds the element Fozzy
include('simpleicons-5/F/Fozzy')

' renders the element
Fozzy('Fozzy', 'Fozzy', 'an optional tech label')
@enduml
```

