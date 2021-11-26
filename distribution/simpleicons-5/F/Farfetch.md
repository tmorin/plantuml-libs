# Farfetch


```text
simpleicons-5/F/Farfetch
```

```text
include('simpleicons-5/F/Farfetch')
```



| Illustration | Farfetch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Farfetch.png) | ![illustration for Farfetch](../../simpleicons-5/F/Farfetch.Local.png) |




## Farfetch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Farfetch
include('simpleicons-5/F/Farfetch')

' renders the element
Farfetch('Farfetch', 'Farfetch', 'an optional tech label')
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

' loads the Item which embeds the element Farfetch
include('simpleicons-5/F/Farfetch')

' renders the element
Farfetch('Farfetch', 'Farfetch', 'an optional tech label')
@enduml
```

