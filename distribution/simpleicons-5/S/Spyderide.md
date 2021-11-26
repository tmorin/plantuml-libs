# Spyderide


```text
simpleicons-5/S/Spyderide
```

```text
include('simpleicons-5/S/Spyderide')
```



| Illustration | Spyderide |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Spyderide.png) | ![illustration for Spyderide](../../simpleicons-5/S/Spyderide.Local.png) |




## Spyderide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Spyderide
include('simpleicons-5/S/Spyderide')

' renders the element
Spyderide('Spyderide', 'Spyderide', 'an optional tech label')
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

' loads the Item which embeds the element Spyderide
include('simpleicons-5/S/Spyderide')

' renders the element
Spyderide('Spyderide', 'Spyderide', 'an optional tech label')
@enduml
```

