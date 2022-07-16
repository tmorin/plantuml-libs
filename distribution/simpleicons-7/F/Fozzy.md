# Fozzy


```text
simpleicons-7/F/Fozzy
```

```text
include('simpleicons-7/F/Fozzy')
```



| Illustration | Fozzy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fozzy.png) | ![illustration for Fozzy](../../simpleicons-7/F/Fozzy.Local.png) |




## Fozzy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fozzy
include('simpleicons-7/F/Fozzy')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fozzy
include('simpleicons-7/F/Fozzy')

' renders the element
Fozzy('Fozzy', 'Fozzy', 'an optional tech label')
@enduml
```

